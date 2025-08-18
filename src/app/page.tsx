import React from 'react';
import Navigation from '@/components/Navigation/Navigation';
import HeroSection from '@/components/Hero/HeroSection';

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <section id="hero" className="w-full">
        <HeroSection />
      </section>
    </main>
  );
}
