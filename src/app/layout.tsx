import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aditya Adventure - Iceland | Epic Photography Expedition",
  description: "Join Adithya Subramaniam on an unforgettable 11-day Iceland photography adventure. March 20-30, 2024. Northern Lights, Ice Caves, Waterfalls & More. Epic Pictures Guaranteed.",
  keywords: "Iceland photography tour, Northern Lights, Adventure travel, Photography expedition, Iceland tour, Aurora Borealis",
  authors: [{ name: "Adithya Subramaniam" }],
  openGraph: {
    title: "Aditya Adventure - Iceland Photography Expedition",
    description: "Epic 11-day Iceland photography adventure with guaranteed Northern Lights shots and professional guidance.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} font-sans antialiased bg-iceland-dark text-white w-full min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
