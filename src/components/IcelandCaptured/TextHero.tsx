'use client';

import React from 'react';
import { motion } from 'framer-motion';

const TextHero: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-br from-iceland-dark via-gray-900 to-black py-1 md:py-3 lg:py-6">
      <div className="flex justify-center items-center min-h-[20vh] md:min-h-[30vh]">
        <div className="w-[92%] md:w-full max-w-7xl md:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="flex flex-col items-center justify-center text-center space-y-1 sm:space-y-4 md:space-y-6 lg:space-y-8 bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-md py-2 px-3 sm:px-4 md:py-6 md:px-6 lg:py-8 lg:px-8 rounded-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-saturate-[180%]">
            {/* Line 1: MARCH 20TH to 30TH */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full flex justify-center"
            >
              <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-sans font-light text-white tracking-wider text-center">
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
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-sans font-bold text-white tracking-tight text-center">
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
              <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-sans font-light text-gray-200 tracking-wide leading-relaxed max-w-4xl xl:max-w-5xl 2xl:max-w-6xl text-center">
                EVERY TRAVELER. EVERY MOMENT. EVERY STORY.
              </h3>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextHero;
