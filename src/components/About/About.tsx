'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="relative w-screen overflow-hidden flex justify-center">
      {/* Background Image - Full Width, No Cropping, Centered */}
        <div className="relative w-screen h-screen flex justify-center">
          <Image
            src="/images/aboutme/test1.jpg"
            alt="Black church Iceland background"
            fill
            className="object-cover object-center"
            sizes="100vw"
            quality={90}
            priority={false}
          />
        
        {/* Content Overlaid on Image */}
        <div className="absolute inset-0">
          {/* Content */}
          <div className="relative z-20 w-full py-20 lg:py-32 min-h-screen flex items-center justify-center">
            {/* Wrapper div to center the entire content on larger screens */}
            <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-center justify-center lg:justify-between">
                
                {/* Profile Image */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 flex justify-center"
                >
                  <div className="relative">
                    <div className="w-32 h-32 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                      <Image
                        src="/images/aboutme/profile.jpg"
                        alt="Aditya Subramanian - Adventure Photographer"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Text Content */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex-1 w-full text-center lg:text-left min-h-0"
                >
                  {/* Liquid Glass Effect Container */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl">
                     {/* Inner Text Container with Professional Spacing */}
                     <div className="p-8 sm:p-12 lg:p-16 max-h-[60vh] sm:max-h-none overflow-y-auto sm:overflow-visible">
                       {/* Title */}
                       <motion.h1 
                         initial={{ opacity: 0, y: 30 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8, delay: 0.3 }}
                         viewport={{ once: true }}
                         className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 tracking-wider text-center"
                       >
                         <span className="text-gray-300">ABOUT</span>{' '}
                         <span className="text-white">ME</span>
                       </motion.h1>

                       {/* Story Paragraphs with Individual Containers */}
                       <div className="flex justify-center">
                         <div className="w-[90%] space-y-6">
                           {/* Story Paragraph 1 */}
                           <motion.div 
                             initial={{ opacity: 0, y: 20 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             transition={{ duration: 0.6, delay: 0.4 }}
                             viewport={{ once: true }}
                             className="bg-transparent rounded-xl p-6 sm:p-8"
                           >
                             <p className="text-gray-300 leading-relaxed text-base sm:text-lg lg:text-xl">
                               What began as a simple dream—a road trip across Iceland with my wife and friends—soon grew into something far greater. As a travel and nature photographer, I set out to capture the raw beauty of the land of fire and ice. Sharing those moments on Instagram sparked unexpected interest, and soon adventure seekers, couples, and fellow photographers began reaching out to experience Iceland the way I had—up close, personal, and beyond the ordinary.
                             </p>
                           </motion.div>

                           {/* Story Paragraph 2 */}
                           <motion.div 
                             initial={{ opacity: 0, y: 20 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             transition={{ duration: 0.6, delay: 0.5 }}
                             viewport={{ once: true }}
                             className="bg-transparent rounded-xl p-6 sm:p-8"
                           >
                             <p className="text-gray-300 leading-relaxed text-base sm:text-lg lg:text-xl">
                               Since then, what started as one personal journey has evolved into multiple successful group expeditions over the past three years. Each trip is more than travel; it's about connection—with landscapes, with people, and with yourself. I design every expedition with a photographer's eye and a traveler's heart, ensuring that whether you're behind the lens or simply living the moment, Iceland leaves its mark on you forever.
                             </p>
                           </motion.div>

                           {/* Story Paragraph 3 */}
                           <motion.div 
                             initial={{ opacity: 0, y: 20 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             transition={{ duration: 0.6, delay: 0.6 }}
                             viewport={{ once: true }}
                             className="bg-transparent rounded-xl p-6 sm:p-8"
                           >
                             <p className="text-gray-300 leading-relaxed text-base sm:text-lg lg:text-xl font-medium">
                               Now, I invite you to be part of this story—to chase the Northern Lights, drive along endless roads, explore ice caves, and return home with memories—beautifully framed for a lifetime.
                             </p>
                           </motion.div>
                         </div>
                       </div>
                     </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse" />
          <div className="absolute top-40 right-20 w-3 h-3 bg-emerald-400 rounded-full opacity-40 animate-pulse delay-1000" />
          <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-white rounded-full opacity-80 animate-pulse delay-2000" />
        </div>
      </div>
    </section>
  );
};

export default About;