import { NextResponse } from "next/server";
import Stripe from "stripe";

/* ── Lazy Stripe client ───────────────────────────────────── */
function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not set.");
  }
  return new Stripe(key);
}

/* ── Types ────────────────────────────────────────────────── */
type LineItem = {
  title: string;
  price: number; // dollars
  quantity: number;
  image: string;
};

type CheckoutBody = {
  items: LineItem[];
  discountAmount: number; // dollars
  shippingFee: number; // dollars
  note?: string;
};

/* ── POST /api/checkout ───────────────────────────────────── */
export async function POST(request: Request) {
  try {
    const body: CheckoutBody = await request.json();

    if (!body.items || body.items.length === 0) {
      return NextResponse.json(
        { error: "Cart is empty." },
        { status: 400 },
      );
    }

    const stripe = getStripe();

    /* Build line_items from cart items */
    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] =
      body.items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.title,
            images: item.image ? [item.image] : [],
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      }));

    /* Add shipping fee as a separate line item */
    if (body.shippingFee > 0) {
      line_items.push({
        price_data: {
          currency: "usd",
          product_data: { name: "International Shipping" },
          unit_amount: Math.round(body.shippingFee * 100),
        },
        quantity: 1,
      });
    }

    /* Add discount as a negative line item */
    if (body.discountAmount > 0) {
      line_items.push({
        price_data: {
          currency: "usd",
          product_data: { name: "Discount" },
          unit_amount: -Math.round(body.discountAmount * 100),
        },
        quantity: 1,
      });
    }

    /* Build metadata (Stripe supports up to 50 keys, 500 chars each) */
    const metadata: Record<string, string> = {};
    if (body.note?.trim()) {
      metadata.order_note = body.note.trim();
    }

    /* Create the Checkout Session */
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      metadata: Object.keys(metadata).length > 0 ? metadata : undefined,
      success_url: `${request.headers.get("origin")}/shop?checkout=success`,
      cancel_url: `${request.headers.get("origin")}/shop?checkout=cancelled`,
      shipping_address_collection: {
        allowed_countries: ["US", "CA", "GB", "AU", "DE", "FR", "JP", "HK"],
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session." },
      { status: 500 },
    );
  }
}
