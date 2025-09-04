'use client';

import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-screen overflow-hidden">
      <div className="relative w-screen">
        <Image
          src="/images/footer/footer.jpg"
          alt="Iceland landscape footer"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
          sizes="100vw"
          priority={false}
          quality={90}
        />
      </div>
    </footer>
  );
};

export default Footer;