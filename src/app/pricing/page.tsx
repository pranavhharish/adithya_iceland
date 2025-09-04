import React from 'react';
import Navigation from '@/components/Navigation/Navigation';
import PricingPage from '@/components/Pricing/PricingPage';

export const metadata = {
  title: 'Pricing - Iceland Photography Expedition | Aditya Adventure',
  description: 'Join the ultimate Icelandic expedition for ₹2,49,000. Professional photography guidance, Northern Lights hunting, ice caves, and more. Limited spots available.',
  keywords: 'Iceland tour pricing, photography expedition cost, Northern Lights tour price, Iceland adventure booking',
};

export default function Pricing() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <PricingPage />
    </main>
  );
}