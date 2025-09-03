'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

interface HeroImage {
  src: string;
  alt: string;
  title: string;
  location: string;
}

const heroImages: HeroImage[] = [
  {
    src: '/images/hero/hero1.jpg',
    alt: 'Northern Lights Aurora over Iceland landscape',
    title: 'Aurora Borealis',
    location: 'Reykjavik'
  },
  {
    src: '/images/hero/hero2.jpg',
    alt: 'Dramatic waterfall in Iceland with rainbow',
    title: 'Gullfoss Falls',
    location: 'Golden Circle'
  },
  {
    src: '/images/hero/hero3.jpg',
    alt: 'Black sand beach with ice chunks in Iceland',
    title: 'Diamond Beach',
    location: 'Jökulsárlón'
  },
  {
    src: '/images/hero/hero4.jpg',
    alt: 'Blue ice cave formations in Iceland glacier',
    title: 'Crystal Ice Cave',
    location: 'Vatnajökull'
  },
  {
    src: '/images/hero/hero5.jpg',
    alt: 'Dramatic basalt columns and waterfalls',
    title: 'Svartifoss',
    location: 'Skaftafell'
  }
];

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying && !isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % heroImages.length
        );
      }, 4000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, isHovered]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-iceland-dark flex items-center justify-center desktop-centered">
      {/* Background Images with Parallax */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="relative h-full w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src={heroImages[currentImageIndex].src}
              alt={heroImages[currentImageIndex].alt}
              fill
              priority={currentImageIndex < 3}
              className="object-cover transition-transform duration-[8s] ease-out hover:scale-105"
              sizes="100vw"
            />
            
            {/* Liquid Glass Hover Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-[2px] opacity-0 transition-opacity duration-500"
              whileHover={{ opacity: 1 }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Aurora Animation Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-gradient-radial from-iceland-green/20 via-transparent to-transparent rounded-full animate-aurora blur-xl" />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-blue-400/15 via-transparent to-transparent rounded-full animate-aurora blur-xl" style={{ animationDelay: '7s' }} />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
      </div>

      {/* Main Content - Bottom Right Corner */}
      <div className="absolute bottom-8 right-4 sm:right-8 text-right z-10 max-w-2xl">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6"
        >
          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white mb-3 tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          >
            Where Fire Meets Ice
          </motion.h1>
          <motion.div
            className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-display text-iceland-green mb-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Endless Adventures. Infinite Stories
          </motion.div>
          <motion.p
            className="text-base sm:text-lg lg:text-xl font-light text-gray-200 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            March 20th to 30th.
          </motion.p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 font-light"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          Epic Pictures Guaranteed
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-end mb-8 sm:mb-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2.4 }}
        >
          <motion.button
            className="group relative px-6 py-3 bg-gradient-to-r from-iceland-green to-teal-400 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-iceland-green/25"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Join Adventure ₹2,49,000</span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-iceland-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>

        {/* Mobile Navigation Controls - Below CTA Buttons */}
        <div className="sm:hidden flex flex-col items-end space-y-4">
          {/* Image Navigation Dots */}
          <motion.div
            className="flex space-x-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.8 }}
          >
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => handleImageClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'bg-iceland-green scale-125'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </motion.div>

          {/* Play/Pause Control */}
          <motion.button
            onClick={handlePlayPause}
            className="group flex items-center space-x-2 px-4 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
            whileHover={{ scale: 1.05 }}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4" />
            )}
            <span className="text-sm font-medium">
              {isPlaying ? 'Pause' : 'Play'}
            </span>
          </motion.button>
        </div>
      </div>

      {/* Image Information Card - Keep in bottom left */}
      <motion.div
        className="absolute bottom-8 left-4 sm:left-8 p-4 rounded-2xl text-white max-w-xs"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 3.2 }}
      >
        <h3 className="font-semibold text-lg mb-1">
          {heroImages[currentImageIndex].title}
        </h3>
        <p className="text-gray-300 text-sm">
          {heroImages[currentImageIndex].location}
        </p>
      </motion.div>

      {/* Navigation Controls - Centered Bottom, Stacked Above Scroll Indicator (Desktop Only) */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center space-y-4 z-10">
        
        {/* Image Navigation Dots */}
        <motion.div
          className="flex space-x-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.8 }}
        >
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => handleImageClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-iceland-green scale-125'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </motion.div>

        {/* Play/Pause Control */}
        <motion.button
          onClick={handlePlayPause}
          className="group flex items-center space-x-2 px-4 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          whileHover={{ scale: 1.05 }}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4" />
          )}
          <span className="text-sm font-medium">
            {isPlaying ? 'Pause' : 'Play'}
          </span>
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          className="flex flex-col items-center text-white/70"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.6 }}
        >
          <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-white/70 to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;