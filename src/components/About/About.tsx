'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Reusable content components
const AboutTitle: React.FC<{ className?: string }> = ({ className = "" }) => (
  <motion.h1 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className={`text-2xl font-sans font-bold mb-2 md:mb-6 tracking-wider text-center ${className}`}
  >
    <span className="text-gray-300">ABOUT</span>{' '}
    <span className="text-white">ME</span>
  </motion.h1>
);

const AboutContent: React.FC<{ textSizeClass?: string }> = ({ textSizeClass = "text-sm" }) => (
  <div className="flex justify-center">
    <div className="w-[90%] space-y-3 sm:space-y-3 md:space-y-6">
      <motion.div 
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="bg-transparent rounded-xl p-3 md:p-8"
      >
        <p className={`text-gray-300 leading-relaxed ${textSizeClass} font-sans`}>
          A road tour of Iceland with my wife and friends, quickly became so much more. As a travel and nature photographer, I set out on a mission to capture the raw beauty of land of fire and ice. Sharing those adventures on Instagram generated interest beyond my dreams, and before too long, adventure tourists, couples, and other photographers began reaching out to share Iceland as I had intimately, personally, and outside the box.
          <br /><br />
        </p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="bg-transparent rounded-xl p-3 md:p-8"
      >
        <p className={`text-gray-300 leading-relaxed ${textSizeClass} font-sans`}>
          Since then, one such adventure has turned into multiple successful group explorations in the past three years. Every trip is less about traveling; it&apos;s about connecting—to the landscapes, to other people, and to yourself. I design every expedition as a photographer sees and a traveler feels so that if you are behind the lens or simply living the experience, Iceland finds its way into your heart for good.
        </p>
      </motion.div>
    </div>
  </div>
);

const About: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Component is ready immediately
  }, []);

  return (
    <section id="about" className="relative w-screen overflow-hidden flex justify-center">
      {/* Background Image - Full Width, No Cropping, Centered */}
        <div className="relative w-screen h-screen flex justify-center">
          <Image
            src="/images/firemeetsice.jpg"
            alt="Black church Iceland background"
            fill
            className="object-cover object-center"
            sizes="100vw"
            quality={90}
            priority={true}
            onError={() => setImageError(true)}
          />
        
        {/* Content Overlaid on Image - Responsive for mobile orientations */}
        <div className="absolute inset-0 flex lg:block items-center justify-center">
          {/* Mobile (portrait + landscape): equal panes, constrained wrapper */}
          <div className="relative z-20 about-outer lg:hidden flex items-center justify-center">
            <div className="about-inner">
              {/* Image Pane */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="about-pane about-image-wrapper"
              >
                <div className="relative about-image-size rounded-xl overflow-hidden border-4 border-white/20 shadow-2xl">
                  <Image
                    src="/images/aboutme/aditya1.jpg"
                    alt="Aditya Subramanian - Adventure Photographer"
                    fill
                    className="object-cover"
                    sizes="90vw"
                    quality={85}
                    priority={true}
                    onError={() => setImageError(true)}
                  />
                </div>
              </motion.div>

              {/* Text Pane */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="about-pane"
              >
                <div className="about-text-scroll bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl">
                  <div className="p-6 sm:p-8 md:p-12">
                    <AboutTitle />
                    <AboutContent />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Tablet/Desktop: preserve original layout */}
          <div className="relative z-20 w-full py-8 sm:py-12 md:py-20 lg:py-32 min-h-screen items-center justify-center hidden lg:flex">
            <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 about-desktop-container">
              <div className="flex flex-col sm:flex-row lg:flex-row gap-2 sm:gap-2 md:gap-12 lg:gap-16 items-center justify-center sm:justify-between lg:justify-between" style={{ minHeight: 'auto' }}>
                {/* Profile Image */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex-shrink-0 flex justify-center"
                >
                  <div className="relative">
                    <div className="w-16 h-16 sm:w-16 sm:h-16 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                      <Image
                        src="/images/aboutme/aditya1.jpg"
                        alt="Aditya Subramanian - Adventure Photographer"
                        fill
                        className="object-cover"
                        priority={true}
                        onError={() => setImageError(true)}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Text Content */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex-1 w-full text-center sm:text-left lg:text-left min-h-0"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl">
                    <div className="p-4 sm:p-4 md:p-12 lg:p-16 sm:max-h-none md:max-h-none sm:overflow-visible md:overflow-visible">
                      <AboutTitle className="text-2xl sm:text-lg md:text-5xl lg:text-4xl xl:text-5xl mb-2 sm:mb-1 md:mb-6 lg:mb-8 text-center sm:text-left lg:text-left" />
                      <AboutContent textSizeClass="text-sm sm:text-xs md:text-lg lg:text-lg xl:text-base" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          
         
        </div>
      </div>
    </section>
  );
};

export default About;