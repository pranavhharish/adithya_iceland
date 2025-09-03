import React from 'react';
import Navigation from '@/components/Navigation/Navigation';
import MasonryGallery from '@/components/Gallery/MasonryGallery';

export const metadata = {
  title: "Gallery - Aditya Adventure Iceland",
  description: "Browse our stunning collection of Iceland photography from previous adventures. Northern Lights, waterfalls, glaciers and more epic landscapes.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-iceland-dark">
      <Navigation />
      <MasonryGallery />
    </main>
  );
}