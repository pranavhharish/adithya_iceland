import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import BookingModal from "@/components/Booking/BookingModal";
import Navigation from "@/components/Navigation/Navigation";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
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
    <html lang="en" className="w-full overflow-x-hidden">
      <body
        className={`${unbounded.variable} font-sans antialiased bg-iceland-dark text-white w-full min-h-screen flex flex-col overflow-x-hidden`}
      >
        <Navigation />
        <main className="flex-1 w-full">
          {children}
        </main>
        <BookingModal />
        <Footer />
      </body>
    </html>
  );
}
