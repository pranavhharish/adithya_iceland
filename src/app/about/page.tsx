import React from 'react';
import Navigation from '@/components/Navigation/Navigation';
import About from '@/components/About/About';

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <About />
    </main>
  );
}