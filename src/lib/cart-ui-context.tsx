"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import CartDrawer from "@/components/ui/CartDrawer";

type CartUIContextValue = {
  openCart: () => void;
};

const CartUIContext = createContext<CartUIContextValue | null>(null);

export function CartUIProvider({ children }: { children: ReactNode }) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartUIContext.Provider value={{ openCart: () => setCartOpen(true) }}>
      {children}
      {/* CartDrawer rendered at root level — no sticky header wrapper */}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </CartUIContext.Provider>
  );
}

export function useCartUI() {
  const ctx = useContext(CartUIContext);
  if (!ctx) throw new Error("useCartUI must be used within a CartUIProvider");
  return ctx;
}
