"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { useCartUI } from "@/lib/cart-ui-context";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Learn", href: "/learn" },
  { label: "Services", href: "/services" },
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();
  const { openCart } = useCartUI();
  const pathname = usePathname();

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  /* Prevent body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 bg-paper/80 backdrop-blur-md relative">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-6 sm:px-10 lg:px-16">
        {/* ── Desktop nav (left) ─────────────────────── */}
        <nav className="hidden items-center gap-8 md:flex md:flex-1">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-light tracking-wide transition-colors hover:text-ink ${
                  isActive ? "text-ink" : "text-charcoal"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* ── Logo (center) ──────────────────────────────── */}
        <Link
          href="/"
          className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2 transition-opacity hover:opacity-70"
        >
          <Image
            src="/images/logo.PNG"
            alt="Ink & Moment"
            width={32}
            height={32}
            className="h-7 w-auto"
          />
          <span className="font-heading text-xl tracking-wide text-ink">
            Ink & Moment<span className="text-warm-gray">墨時</span>
          </span>
        </Link>

        {/* ── Right: cart + mobile toggle ─────────────── */}
        <div className="ml-auto flex items-center gap-3">
          {/* Cart icon */}
          <button
            type="button"
            onClick={openCart}
            className="relative flex items-center justify-center p-1 text-charcoal transition-colors hover:text-ink"
            aria-label="Open cart"
          >
            <ShoppingBag size={18} />
            {totalItems > 0 && (
              <span className="absolute -right-1 -top-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-ink text-[9px] leading-none text-paper">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center gap-1.5 rounded-lg border border-border-light bg-paper px-3 py-2 text-xs uppercase tracking-widest text-ink transition-colors hover:border-ink hover:bg-stone/50 md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            <span>Menu</span>
          </button>
        </div>

      </div>

      {/* ── Mobile dropdown menu ────────────────────────── */}
      {mobileOpen && (
        <>
          {/* Scrim */}
          <div
            className="fixed inset-0 z-40 bg-black/15 backdrop-blur-sm md:hidden"
            onClick={() => setMobileOpen(false)}
          />

          {/* Dropdown panel */}
          <div className="absolute right-3 top-[calc(100%+8px)] z-50 w-64 origin-top-right rounded-2xl border border-border-light bg-paper/95 p-2 shadow-lg backdrop-blur-xl md:hidden">
            <nav className="flex flex-col gap-0.5">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-xl px-4 py-3 text-sm tracking-wide transition-colors ${
                      isActive
                        ? "bg-stone font-medium text-ink"
                        : "text-charcoal hover:bg-stone hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
