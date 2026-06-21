"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  X,
  Minus,
  Plus,
  ShoppingBag,
  Loader2,
  ChevronDown,
  Tag,
  FileText,
  Check,
} from "lucide-react";
import { useCart, type ShippingMethod } from "@/lib/cart-context";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function CartDrawer({ open, onClose }: Props) {
  const {
    items,
    totalItems,
    subtotal,
    shippingFee,
    discountAmount,
    total,
    updateQuantity,
    removeItem,
    clearCart,
    applyPromo,
    removePromo,
    promoCode,
    note,
    setNote,
    shippingMethod,
    setShipping,
  } = useCart();

  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [promoOpen, setPromoOpen] = useState(false);
  const [noteOpen, setNoteOpen] = useState(false);
  const [promoInput, setPromoInput] = useState("");
  const [promoError, setPromoError] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [shippingOpen, setShippingOpen] = useState(false);

  /* Reset promo form on close */
  useEffect(() => {
    if (!open) {
      setPromoOpen(false);
      setNoteOpen(false);
      setShippingOpen(false);
      setPromoInput("");
      setPromoError("");
      setPromoApplied(false);
    }
  }, [open]);

  /* Lock body scroll when open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleApplyPromo = () => {
    if (!promoInput.trim()) return;
    const valid = applyPromo(promoInput);
    if (valid) {
      setPromoError("");
      setPromoApplied(true);
      setPromoInput("");
      setPromoOpen(false); // collapse so success message shows
    } else {
      setPromoError("Invalid promo code.");
      setPromoApplied(false);
    }
  };

  const handleRemovePromo = () => {
    removePromo();
    setPromoApplied(false);
    setPromoInput("");
    setPromoError("");
    setPromoOpen(true); // reopen so user can enter a new code
  };

  const handleCheckout = async () => {
    setCheckoutLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({
            title: i.title,
            price: i.price,
            quantity: i.quantity,
            image: i.image,
          })),
          discountAmount,
          shippingFee,
          note,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Something went wrong.");
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Could not start checkout. Please try again.");
    } finally {
      setCheckoutLoading(false);
    }
  };

  /* ── Helpers ──────────────────────────────────────────── */
  const CURRENCY = "USD";
  const fmt = (n: number) =>
    `$${n.toLocaleString("en-US", { minimumFractionDigits: 2 })} ${CURRENCY}`;

  return (
    <>
      {/* Scrim */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/20 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer panel */}
      <div
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-paper shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        } overflow-y-auto`}
      >
        {/* ── Header ────────────────────────────────────── */}
        <div className="shrink-0 flex items-center justify-between border-b border-border-light px-6 py-5">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} className="text-ink" />
            <span className="text-sm text-ink">
              Cart
              {totalItems > 0 && (
                <span className="ml-1 text-warm-gray">({totalItems})</span>
              )}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex items-center justify-center p-1 text-charcoal transition-colors hover:text-ink"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* ── Body ──────────────────────────────────────── */}
        <div className="px-6 pt-10 pb-12">
          {items.length === 0 ? (
            <div className="mt-20 text-center">
              <ShoppingBag size={32} className="mx-auto text-border-light" />
              <p className="mt-4 text-sm text-warm-gray">Your cart is empty.</p>
            </div>
          ) : (
            <div className="space-y-8">
              {/* ── Items ─────────────────────────────── */}
              <ul className="space-y-6 mb-6">
                {items.map((item) => (
                  <li key={item.id} className="flex gap-4">
                    <div className="relative h-20 w-16 shrink-0 overflow-hidden bg-stone">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-between py-0.5">
                      <div className="flex justify-between">
                        <Link
                          href={`/shop#${item.id}`}
                          onClick={onClose}
                          className="text-sm text-ink transition-colors hover:text-warm-gray"
                        >
                          {item.title}
                        </Link>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="p-0.5 text-warm-gray transition-colors hover:text-ink"
                          aria-label={`Remove ${item.title}`}
                        >
                          <X size={14} />
                        </button>
                      </div>

                      <p className="text-xs text-warm-gray">
                        {fmt(item.price)}
                      </p>

                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="flex h-6 w-6 items-center justify-center rounded-full border border-border-light text-charcoal transition-colors hover:border-ink hover:text-ink"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="min-w-[1ch] text-center text-xs text-ink">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="flex h-6 w-6 items-center justify-center rounded-full border border-border-light text-charcoal transition-colors hover:border-ink hover:text-ink"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* ── Promo code ─────────────────────────── */}
              <div className="border-t border-border-light pt-6">
                <button
                  type="button"
                  onClick={() => setPromoOpen(!promoOpen)}
                  className="flex w-full items-center justify-between text-xs uppercase tracking-widest text-charcoal transition-colors hover:text-ink"
                >
                  <span className="flex items-center gap-2">
                    <Tag size={14} />
                    {promoCode
                      ? `Promo applied: ${promoCode}`
                      : "Enter a promo code"}
                  </span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${
                      promoOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {promoOpen && (
                  <div className="mt-3 flex gap-2">
                    <input
                      type="text"
                      value={promoInput}
                      onChange={(e) => {
                        setPromoInput(e.target.value);
                        setPromoError("");
                      }}
                      onKeyDown={(e) =>
                        e.key === "Enter" && handleApplyPromo()
                      }
                      placeholder="Enter code"
                      className="flex-1 border-b border-border-light bg-transparent px-1 pb-1.5 pt-1 text-xs text-ink outline-none transition-colors placeholder:text-warm-gray focus:border-ink"
                    />
                    {promoCode ? (
                      <button
                        type="button"
                        onClick={handleRemovePromo}
                        className="whitespace-nowrap text-[11px] uppercase tracking-widest text-warm-gray underline underline-offset-2 transition-colors hover:text-ink"
                      >
                        Remove
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleApplyPromo}
                        className="whitespace-nowrap rounded-full border border-ink bg-transparent px-4 py-1.5 text-[11px] uppercase tracking-widest text-ink transition-all hover:bg-ink hover:text-paper"
                      >
                        Apply
                      </button>
                    )}
                  </div>
                )}

                {promoError && (
                  <p className="mt-1.5 text-[11px] text-red-500">
                    {promoError}
                  </p>
                )}
                {promoApplied && !promoError && promoCode && !promoOpen && (
                  <p className="mt-1.5 flex items-center gap-1 text-[11px] text-green-600">
                    <Check size={12} /> Code applied!
                  </p>
                )}
              </div>

              {/* ── Order notes ────────────────────────── */}
              <div className="border-t border-border-light pt-6">
                <button
                  type="button"
                  onClick={() => setNoteOpen(!noteOpen)}
                  className="flex w-full items-center justify-between text-xs uppercase tracking-widest text-charcoal transition-colors hover:text-ink"
                >
                  <span className="flex items-center gap-2">
                    <FileText size={14} />
                    {note ? "Note added" : "Add a note"}
                  </span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${
                      noteOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {noteOpen && (
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Custom requests, delivery notes&hellip;"
                    rows={3}
                    className="mt-3 w-full resize-none border-b border-border-light bg-transparent px-1 pb-2 pt-1 text-xs text-ink outline-none transition-colors placeholder:text-warm-gray focus:border-ink"
                  />
                )}
              </div>
            </div>
          )}
        </div>

        {/* ── Footer / Order Summary ──────────────────────── */}
        {items.length > 0 && (
          <div className="shrink-0 border-t border-border-light px-6 pt-10 pb-8">
            {/* Shipping selector */}
            <div className="mb-4">
              <button
                type="button"
                onClick={() => setShippingOpen(!shippingOpen)}
                className="flex w-full items-center justify-between text-xs text-charcoal transition-colors hover:text-ink"
              >
                <span>Shipping</span>
                <span className="flex items-center gap-1.5">
                  <span className="text-warm-gray">
                    {shippingMethod === "local"
                      ? "Hong Kong"
                      : "International"}
                  </span>
                  <span className="font-heading text-sm text-ink">
                    {shippingFee === 0 ? "FREE" : `+${fmt(shippingFee)}`}
                  </span>
                  <ChevronDown
                    size={12}
                    className={`text-warm-gray transition-transform ${
                      shippingOpen ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </button>

              {shippingOpen && (
                <div className="mt-3 space-y-1">
                  {([["local", "Hong Kong (FREE)"], ["international", `International (+${fmt(19)})`]] as [ShippingMethod, string][]).map(
                    ([method, label]) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => {
                          setShipping(method);
                          setShippingOpen(false);
                        }}
                        className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-xs transition-colors ${
                          shippingMethod === method
                            ? "bg-stone text-ink"
                            : "text-charcoal hover:bg-stone hover:text-ink"
                        }`}
                      >
                        <span>{label}</span>
                        {shippingMethod === method && (
                          <Check size={12} className="text-accent" />
                        )}
                      </button>
                    ),
                  )}
                </div>
              )}
            </div>

            {/* Totals */}
            <div className="space-y-3 border-t border-border-light pt-5">
              <div className="flex items-center justify-between text-xs text-warm-gray">
                <span>Subtotal</span>
                <span>{fmt(subtotal)}</span>
              </div>

              {discountAmount > 0 && (
                <div className="flex items-center justify-between text-xs text-green-600">
                  <span>Discount ({promoCode})</span>
                  <span>&minus;{fmt(discountAmount)}</span>
                </div>
              )}

              {shippingFee > 0 && (
                <div className="flex items-center justify-between text-xs text-warm-gray">
                  <span>Shipping</span>
                  <span>{fmt(shippingFee)}</span>
                </div>
              )}

              <div className="flex items-center justify-between border-t border-border-light pt-2 text-sm text-ink">
                <span>Total</span>
                <span className="font-heading text-base">{fmt(total)}</span>
              </div>
            </div>

            <p className="mt-5 text-center text-[10px] leading-relaxed text-warm-gray">
              All orders are processed in USD. Orders shipped outside the US
              may be subject to customs duties.
            </p>

            <button
              type="button"
              onClick={handleCheckout}
              disabled={checkoutLoading}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full border border-ink bg-transparent px-8 py-3 text-xs uppercase tracking-widest text-ink transition-all hover:bg-ink hover:text-paper disabled:opacity-60"
            >
              {checkoutLoading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Redirecting&hellip;
                </>
              ) : (
                "Proceed to Checkout"
              )}
            </button>

            <button
              type="button"
              onClick={clearCart}
              className="mt-3 w-full text-center text-xs text-warm-gray underline underline-offset-2 transition-colors hover:text-ink"
            >
              Clear cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
