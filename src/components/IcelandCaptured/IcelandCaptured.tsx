'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const IcelandCaptured: React.FC = () => {
  return (
    <section className="relative w-full">
      {/* Text Section */}
      <div className="w-full bg-gradient-to-br from-iceland-dark via-gray-900 to-black" style={{ paddingTop: '10vh', paddingBottom: '10vh' }}>
        <div className="w-full flex justify-center">
          <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 ">
            <div className="flex flex-col items-center justify-center text-center space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16 xl:space-y-20">
            
            {/* Line 1: MARCH 20TH to 30TH */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full flex justify-center"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-light text-white tracking-wider text-center">
                MARCH 20<sup className="text-sm sm:text-base md:text-lg lg:text-xl">TH</sup> to 30<sup className="text-sm sm:text-base md:text-lg lg:text-xl">TH</sup>
              </h2>
            </motion.div>

            {/* Line 2: ICELAND, CAPTURED. */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="w-full flex justify-center"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-display font-bold text-white tracking-tight text-center">
                ICELAND, <span className="text-iceland-green">CAPTURED.</span>
              </h1>
            </motion.div>

            {/* Line 3: EVERY TRAVELER. EVERY MOMENT. EVERY STORY. */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
              className="w-full flex justify-center"
            >
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-light text-gray-200 tracking-wide leading-relaxed max-w-4xl xl:max-w-5xl 2xl:max-w-6xl text-center">
                EVERY TRAVELER. EVERY MOMENT. EVERY STORY.
              </h3>
            </motion.div>

            </div>
          </div>
        </div>
      </div>

      {/* Full Width Image Section */}
      <div className="relative w-screen overflow-hidden">
        <div className="relative w-screen">
          <Image
            src="/images/photo2.jpg"
            alt="Iceland landscape"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
            sizes="100vw"
            priority={false}
            quality={90}
          />
          
          {/* Content Overlay */}
          <div className="absolute inset-0">
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute inset-0 w-full h-full"
            >
          
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60" />
          
              {/* First Paragraph - Repositioned for larger screens */}
              <div className="absolute top-4 md:top-8 lg:top-1/4 xl:top-1/3 left-0 right-0 px-3 sm:px-4 md:px-6 lg:px-8 z-10 flex justify-center">
                <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl w-full text-center">
                  <motion.p
                    className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl text-white leading-relaxed font-light tracking-wide text-center mx-auto"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    Discover the land of fire and ice in all its glory as we chase the ethereal dance of the Northern Lights & 
                    bask in the breathtaking landscapes. On this journey, each group member will receive a{' '}
                    <span className="font-semibold text-iceland-green">professional photography package</span>—because 
                    the memories are yours to live, and the images are yours to keep. Whether you're behind the lens or simply 
                    soaking it all in, this expedition is designed for everyone.
                  </motion.p>
                </div>
              </div>

              {/* Center Content - Main Headline and Second Paragraph */}
              <div className="absolute inset-0 flex flex-col justify-center lg:justify-center items-center text-center px-3 sm:px-4 md:px-6 lg:px-8 z-10">
                <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto space-y-8 md:space-y-12 lg:space-y-16 xl:space-y-20 lg:mt-16 xl:mt-20 2xl:mt-24">
                  
                  {/* Main Headline */}
                  <motion.div
                    className="space-y-3 md:space-y-6 lg:space-y-8"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-display font-bold text-white tracking-tight">
                      MORE THAN A ROAD TRIP
                    </h2>
                    <div className="flex items-center justify-center gap-2 md:gap-3 lg:gap-4 pb-4 md:pb-8 lg:pb-12">
                      <span className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-iceland-green">#</span>
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white tracking-wider">
                        EPIC PICTURES GUARANTEED
                      </h3>
                    </div>
                  </motion.div>

                  {/* Second Paragraph */}
                  <motion.p
                    className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl text-white leading-relaxed font-light tracking-wide pt-4 md:pt-8 lg:pt-16 xl:pt-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    viewport={{ once: true }}
                  >
                    As part of this journey, I offer a{' '}
                    <span className="font-semibold text-iceland-green">professional photography package</span>, ensuring you take 
                    home stunning, high-quality images of your adventure—whether it's beneath the Northern lights, driving through 
                    rugged landscapes, or standing at the edge of powerful waterfalls.
                  </motion.p>

                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IcelandCaptured;