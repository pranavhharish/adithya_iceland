import React from 'react';
import Navigation from '@/components/Navigation/Navigation';
import HeroSection from '@/components/Hero/HeroSection';
import IcelandCaptured from '@/components/IcelandCaptured/IcelandCaptured';

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <section id="hero" className="w-full">
        <HeroSection />
      </section>
      <section id="iceland-captured" className="w-full">
        <IcelandCaptured />
      </section>
    </main>
  );
}
