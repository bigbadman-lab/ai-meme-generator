import "./globals.css";
import type { Metadata } from "next";
import { Courier_Prime, Fraunces, Inter } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-courier-prime",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Meme Builder",
  description: "AI meme generator",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${courierPrime.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
