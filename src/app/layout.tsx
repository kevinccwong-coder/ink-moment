import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/ui/ChatWidget";
import { CartProvider } from "@/lib/cart-context";
import { CartUIProvider } from "@/lib/cart-ui-context";
import "./globals.css";

/* ── Fonts ───────────────────────────────────────────────── */
const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

/* ── Metadata ────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: "Ink & Moment — Chinese Calligraphy",
    template: "%s — Ink & Moment",
  },
  description:
    "Contemporary Chinese calligraphy by a master brush artist. Original artworks, custom commissions, and fine art prints.",
  metadataBase: new URL("https://ink-moment.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Ink & Moment",
  },
};

/* ── Layout ───────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${inter.variable}`}
    >
      <body className="flex min-h-dvh flex-col">
        <CartProvider>
          <CartUIProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <ChatWidget />
          </CartUIProvider>
        </CartProvider>
      </body>
    </html>
  );
}
