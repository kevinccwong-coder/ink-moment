"use client";

import {
  createContext,
  useContext,
  useReducer,
  type ReactNode,
} from "react";

/* ── Constants ────────────────────────────────────────────── */
const SHIPPING_FEES = { local: 0, international: 19 } as const;

const PROMO_CODES: Record<string, number> = {
  WELCOME10: 10, // 10% off
  INK20: 20, // 20% off
};

/* ── Types ────────────────────────────────────────────────── */
export type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
};

export type ShippingMethod = "local" | "international";

type CartState = {
  items: CartItem[];
  promoCode: string;
  appliedDiscount: number; // percentage 0–100
  note: string;
  shippingMethod: ShippingMethod;
};

type CartAction =
  | { type: "ADD_ITEM"; payload: Omit<CartItem, "quantity"> }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QTY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR" }
  | { type: "APPLY_PROMO"; payload: { code: string; discount: number } }
  | { type: "REMOVE_PROMO" }
  | { type: "SET_NOTE"; payload: string }
  | { type: "SET_SHIPPING"; payload: ShippingMethod };

/* ── Reducer ──────────────────────────────────────────────── */
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.payload.id
              ? { ...i, quantity: i.quantity + 1 }
              : i,
          ),
        };
      }
      return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
    }
    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter((i) => i.id !== action.payload) };
    case "UPDATE_QTY":
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload.id
            ? { ...i, quantity: Math.max(1, action.payload.quantity) }
            : i,
        ),
      };
    case "CLEAR":
      return { ...state, items: [], promoCode: "", appliedDiscount: 0, note: "", shippingMethod: "local" };
    case "APPLY_PROMO":
      return { ...state, promoCode: action.payload.code, appliedDiscount: action.payload.discount };
    case "REMOVE_PROMO":
      return { ...state, promoCode: "", appliedDiscount: 0 };
    case "SET_NOTE":
      return { ...state, note: action.payload };
    case "SET_SHIPPING":
      return { ...state, shippingMethod: action.payload };
    default:
      return state;
  }
}

/* ── Helpers ──────────────────────────────────────────────── */
const totalItems = (items: CartItem[]) =>
  items.reduce((sum, i) => sum + i.quantity, 0);

const subtotal = (items: CartItem[]) =>
  items.reduce((sum, i) => sum + i.price * i.quantity, 0);

/* ── Context ──────────────────────────────────────────────── */
export type CartContextValue = CartState & {
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  shippingFee: number;
  discountAmount: number;
  total: number;
  applyPromo: (code: string) => boolean; // returns true if valid
  removePromo: () => void;
  setNote: (note: string) => void;
  setShipping: (method: ShippingMethod) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

/* ── Provider ──────────────────────────────────────────────── */
export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    promoCode: "",
    appliedDiscount: 0,
    note: "",
    shippingMethod: "local",
  });

  const sub = subtotal(state.items);
  const shippingFee = SHIPPING_FEES[state.shippingMethod];
  const discountAmount = state.appliedDiscount > 0
    ? sub * (state.appliedDiscount / 100)
    : 0;

  const value: CartContextValue = {
    ...state,
    addItem: (item) => dispatch({ type: "ADD_ITEM", payload: item }),
    removeItem: (id) => dispatch({ type: "REMOVE_ITEM", payload: id }),
    updateQuantity: (id, quantity) =>
      dispatch({ type: "UPDATE_QTY", payload: { id, quantity } }),
    clearCart: () => dispatch({ type: "CLEAR" }),
    applyPromo: (code: string) => {
      const discount = PROMO_CODES[code.toUpperCase().trim()];
      if (discount !== undefined) {
        dispatch({ type: "APPLY_PROMO", payload: { code: code.toUpperCase().trim(), discount } });
        return true;
      }
      return false;
    },
    removePromo: () => dispatch({ type: "REMOVE_PROMO" }),
    setNote: (note: string) => dispatch({ type: "SET_NOTE", payload: note }),
    setShipping: (method) => dispatch({ type: "SET_SHIPPING", payload: method }),
    totalItems: totalItems(state.items),
    subtotal: sub,
    shippingFee,
    discountAmount,
    total: Math.max(0, sub - discountAmount + shippingFee),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

/* ── Hook ──────────────────────────────────────────────────── */
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
