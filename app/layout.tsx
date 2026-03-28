import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Shack — Live Commerce & Collectibles",
  description:
    "A portfolio of live commerce brands specializing in coins, currency, trading cards, and collectibles — streamed daily on Whatnot and eBay Live.",
  keywords: [
    "live commerce",
    "coin auctions",
    "trading card breaks",
    "Whatnot",
    "eBay Live",
    "collectibles",
    "The Shack",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} antialiased bg-bg-primary text-white`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
