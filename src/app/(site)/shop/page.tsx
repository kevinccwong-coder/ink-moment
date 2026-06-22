"use client";

import Image from "next/image";
import { useCart } from "@/lib/cart-context";

/* ── Sample products ─────────────────────────────────────── */
const PRODUCTS = [
  {
    id: "stillness",
    title: "Stillness",
    subtitle: "靜",
    price: 199,
    image: "/images/Calligraphy_001.png",
    objectFit: "contain",
  },
  {
    id: "slow-walking",
    title: "Slow Walking",
    subtitle: "慢行",
    price: 49,
    image: "/images/slow_walking.jpeg",
    objectFit: "contain",
  },
  {
    id: "silence",
    title: "Silence",
    subtitle: "靜",
    price: 49,
    image: "/images/silence_small.png",
    objectFit: "contain",
  },
  {
    id: "breath",
    title: "Breath of Ink",
    subtitle: "氣",
    price: 49,
    image: "/images/qi_small.png",
    objectFit: "contain",
  },
  {
    id: "heart",
    title: "Heart on Paper",
    subtitle: "心",
    price: 49,
    image: "/images/heart_small.png",
    objectFit: "contain",
  },
  {
    id: "self",
    title: "Self Portrait",
    subtitle: "我",
    price: 49,
    image: "/images/wo_small.png",
    objectFit: "contain",
  },
  {
    id: "harmony",
    title: "Harmony",
    subtitle: "和",
    price: 15,
    image: null,
    bg: "bg-stone",
  },
  {
    id: "strength",
    title: "Strength",
    subtitle: "力",
    price: 18,
    image: null,
    bg: "bg-stone",
  },
  {
    id: "grace",
    title: "Grace",
    subtitle: "雅",
    price: 21,
    image: null,
    bg: "bg-stone",
  },
  {
    id: "flow",
    title: "Flow",
    subtitle: "流",
    price: 17,
    image: null,
    bg: "bg-stone",
  },
  {
    id: "wisdom",
    title: "Wisdom",
    subtitle: "智",
    price: 26,
    image: null,
    bg: "bg-stone",
  },
] as const;

export default function ShopPage() {
  const { addItem, totalItems } = useCart();

  return (
    <>
      {/* ── Page header ────────────────────────────────── */}
      <section className="border-b border-border-light bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center sm:px-10 lg:px-16">
          <span className="text-xs uppercase tracking-[0.2em] text-warm-gray">
            Collection
          </span>
          <h1 className="mt-3 font-heading text-3xl font-light text-ink sm:text-4xl">
            Original Works
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-charcoal">
            Each piece is one of a kind — brush-painted on handmade rice paper,
            signed, and ready to frame.
          </p>
        </div>
      </section>

      {/* ── Product grid ────────────────────────────────── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product) => (
              <article
                key={product.id}
                className="group flex flex-col bg-paper transition-all hover:-translate-y-0.5"
              >
                {/* Image area */}
                {product.image ? (
                  <div className="relative aspect-[4/5] overflow-hidden bg-stone">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className={`${product.objectFit === "contain" ? "object-contain p-4" : "object-cover"} transition-all duration-500 group-hover:scale-105`}
                    />
                  </div>
                ) : (
                  <div
                    className={`flex aspect-[4/5] items-center justify-center ${product.bg}`}
                  >
                    <span className="select-none font-heading text-8xl leading-none text-accent/20 transition-all group-hover:text-accent/35">
                      {product.subtitle}
                    </span>
                  </div>
                )}

                {/* Product info */}
                <div className="flex flex-1 flex-col px-6 pb-8 pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="font-heading text-lg text-ink">
                        {product.title}
                      </h2>
                      <p className="mt-0.5 text-xs text-warm-gray">
                        {product.subtitle}
                      </p>
                    </div>
                    <span className="text-sm text-ink">
                      ${product.price} <span className="text-warm-gray text-[10px]">USD</span>
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      addItem({
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        image: product.image ?? "/images/Calligraphy_001.png",
                      })
                    }
                    className="mt-6 w-full rounded-full border border-ink bg-transparent px-6 py-2.5 text-[11px] uppercase tracking-widest text-ink transition-all hover:bg-ink hover:text-paper"
                  >
                    Add to Cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
