'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import TextHero from './TextHero';

const IcelandCaptured: React.FC = () => {
  return (
    <section className="relative w-full">
      <TextHero />
      
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
          
              {/* All Content - Equally Spaced */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-2 sm:px-4 md:px-6 lg:px-8 z-10">
                <div className="w-[90%] xl:w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl pt-16 sm:pt-4 md:pt-6 lg:pt-8 xl:pt-10">
                  <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 xl:gap-20">
                    
                    {/* First Paragraph - Top */}
                    <motion.div
                      className="bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-md py-6 px-4 md:py-8 md:px-6 lg:py-10 lg:px-8 rounded-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-saturate-[180%]"
                      initial={{ opacity: 0, y: -30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      
                          <p className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl text-white leading-relaxed font-light tracking-wide text-center mx-auto">
                          Discover the land of fire and ice in all its glory as we chase the illusive dance of the Northern Lights & bask in the breathtaking landscapes. On this adventure, each participant in the group will receive a <span className="font-semibold text-iceland-green">professional photography package</span> because the memories are yours to live, and the photos are yours to own. Whether you're behind the camera or just soaking it all in, this expedition is for everyone.</p>
                    </motion.div>

                    {/* Main Headline - Center */}
                    <motion.div
                      className="py-6 px-4 md:py-8 md:px-6 lg:py-10 lg:px-8"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <div className="space-y-3 md:space-y-6 lg:space-y-8">
                        <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-sans font-bold text-white tracking-tight">
                          MORE THAN A ROAD TRIP
                        </h2>
                        <div className="flex items-center justify-center gap-2 md:gap-3 lg:gap-4 pb-4 md:pb-8 lg:pb-12">
                          <span className="text-base sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-sans font-bold text-iceland-green">#</span>
                          <h3 className="text-base sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-sans font-bold text-white tracking-wider">
                            EPIC PICTURES GUARANTEED
                          </h3>
                        </div>
                      </div>
                    </motion.div>

                    {/* Second Paragraph - Bottom */}
                    <motion.div
                      className="bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-md py-6 px-4 md:py-8 md:px-6 lg:py-10 lg:px-8 rounded-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-saturate-[180%]"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 1.2 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl text-white leading-relaxed font-sans font-light tracking-wide">
                        As part of this journey, I offer a{' '}
                        <span className="font-semibold text-iceland-green">professional photography package</span>, so you can take home stunning, 
                        high-resolution images of your experience, whether it's under the Northern lights, driving through rugged landscapes, or at the edge of powerful waterfalls.
                      </p>
                    </motion.div>

                  </div>
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