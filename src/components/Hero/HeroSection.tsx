'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
// Removed unused Play, Pause imports

// Reusable components
interface HeroImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ 
  src, 
  alt, 
  priority = false, 
  className = "md:object-cover object-contain object-center transition-transform duration-[8s] ease-out hover:scale-105"
}) => (
  <Image
    src={src}
    alt={alt}
    fill
    priority={priority}
    className={className}
    sizes="100vw"
  />
);

interface NavigationDotsProps {
  images: HeroImage[];
  currentIndex: number;
  onImageClick: (index: number) => void;
  className?: string;
}

const NavigationDots: React.FC<NavigationDotsProps> = ({ 
  images, 
  currentIndex, 
  onImageClick, 
  className = "flex space-x-3" 
}) => (
  <div className={className}>
    {images.map((_, index) => (
      <button
        key={index}
        onClick={() => onImageClick(index)}
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          index === currentIndex
            ? 'bg-white scale-125'
            : 'bg-white/50 hover:bg-white/80'
        }`}
      />
    ))}
  </div>
);

interface HeroContentProps {
  title: string;
  subtitle: string;
  description: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  descriptionClassName?: string;
}

const HeroContent: React.FC<HeroContentProps> = ({ 
  title, 
  subtitle, 
  description, 
  className = "",
  titleClassName = "text-xl sm:text-2xl font-sans font-bold text-white mb-2 tracking-tight",
  subtitleClassName = "text-base sm:text-lg font-sans text-iceland-green mb-2",
  descriptionClassName = "text-sm font-sans font-medium text-gray-200 leading-relaxed"
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
    viewport={{ once: true }}
    className={`mb-6 ${className}`}
  >
    <motion.h1 
      className={titleClassName}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.8 }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h1>
    
    <motion.div
      className={subtitleClassName}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 1.2 }}
      viewport={{ once: true }}
    >
      {subtitle}
    </motion.div>
    <motion.p
      className={descriptionClassName}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.6 }}
      viewport={{ once: true }}
    >
      {description}
    </motion.p>
  </motion.div>
);

interface CTAButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  delay?: number;
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  text, 
  onClick, 
  className = "group relative px-6 py-3 bg-gradient-to-r from-iceland-green to-teal-400 text-white text-base font-sans font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-iceland-green/25",
  delay = 2.4
}) => (
  <motion.button
    className={className}
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.98 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay }}
    viewport={{ once: true }}
    onClick={onClick}
  >
    <span className="relative z-10">{text}</span>
    <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-iceland-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </motion.button>
);

interface ImageInfoCardProps {
  title: string;
  location: string;
  className?: string;
}

const ImageInfoCard: React.FC<ImageInfoCardProps> = ({ 
  title, 
  location, 
  className = "absolute bottom-3 md:bottom-8 left-3 md:left-4 sm:left-8 p-2 md:p-4 rounded-xl md:rounded-2xl text-white max-w-[40%] lg:max-w-xs md:max-w-[35%] hero-tablet-info"
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, delay: 3.2 }}
  >
    <h3 className="font-sans font-semibold text-sm md:text-lg xl:text-base mb-0.5 md:mb-1">
      {title}
    </h3>
    <p className="text-gray-300 text-xs md:text-sm xl:text-xs font-sans">
      {location}
    </p>
  </motion.div>
);

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

  // Removed unused handlePlayPause function

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      {/* Mobile Portrait Layout - Images Only */}
      <section className="md:hidden relative w-full overflow-hidden bg-iceland-dark flex items-center justify-center">
        {/* Background Images with Parallax - Same as original */}
        <div className="relative md:absolute md:inset-0 w-full aspect-video md:aspect-auto bg-black">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="relative w-full h-full"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <HeroImage
                src={heroImages[currentImageIndex].src}
                alt={heroImages[currentImageIndex].alt}
                priority={currentImageIndex < 3}
              />
              
              {/* Liquid Glass Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-[2px] opacity-0 transition-opacity duration-500"
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />

          {/* Mobile Image Navigation Dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <NavigationDots
              images={heroImages}
              currentIndex={currentImageIndex}
              onImageClick={handleImageClick}
            />
          </div>
        </div>
      </section>

      {/* Mobile Portrait Content Section - Below Images */}
      <div className="md:hidden w-full relative py-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/firemeetsice.jpg"
            alt="Ice cave background"
            fill
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center px-6">
          <div className="w-[90%] h-[90%] text-center space-y-4 p-6 flex flex-col justify-center">
            <HeroContent
              title="Where Fire Meets Ice"
              subtitle="Endless Adventures. Infinite Stories"
              description="Epic Pictures Guaranteed"
            />

            <CTAButton
              text="Join Adventure ₹2,49,000"
              onClick={() => window.dispatchEvent(new CustomEvent('open-booking', { detail: { source: 'hero-mobile' } }))}
            />
          </div>
        </div>
      </div>

      {/* Mobile Landscape & Desktop Layout - Original Overlay Approach */}
      <section className="hidden md:block relative h-screen w-full overflow-hidden bg-iceland-dark flex items-center justify-center desktop-centered max-w-full hero-tablet-container">
      {/* Background Images with Parallax */}
      <div className="relative md:absolute md:inset-0 w-full aspect-video md:aspect-auto bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="relative w-full h-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <HeroImage
              src={heroImages[currentImageIndex].src}
              alt={heroImages[currentImageIndex].alt}
              priority={currentImageIndex < 3}
            />
            
            {/* Liquid Glass Hover Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-[2px] opacity-0 transition-opacity duration-500"
              whileHover={{ opacity: 1 }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Aurora Animation Overlay
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-gradient-radial from-iceland-green/20 via-transparent to-transparent rounded-full animate-aurora blur-xl" />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-blue-400/15 via-transparent to-transparent rounded-full animate-aurora blur-xl" style={{ animationDelay: '7s' }} />
        </div> */}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60 pointer-events-none" />
      </div>

      {/* Main Content - Bottom Right Corner */}
      <div className="absolute bottom-3 md:bottom-8 right-3 md:right-4 sm:right-8 text-right z-[60] max-w-[85%] lg:max-w-2xl md:max-w-[60%] hero-tablet-content pointer-events-auto">
        <HeroContent
          title="Where Fire Meets Ice"
          subtitle="Endless Adventures. Infinite Stories"
          description="March 20th to 30th."
          className="mb-6"
          titleClassName="text-xl sm:text-4xl lg:text-5xl xl:text-4xl font-sans font-bold text-white mb-1.5 md:mb-3 tracking-tight"
          subtitleClassName="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-sans text-iceland-green mb-1 md:mb-2"
          descriptionClassName="text-xs sm:text-lg lg:text-xl xl:text-lg font-sans font-medium text-gray-200 leading-relaxed"
        />

        {/* Subtitle */}
        <motion.p
          className="text-sm sm:text-base lg:text-lg xl:text-base text-gray-300 mb-6 font-sans font-normal"
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
          <CTAButton
            text="Join Adventure ₹2,49,000"
            onClick={() => window.dispatchEvent(new CustomEvent('open-booking', { detail: { source: 'hero-desktop' } }))}
            className="group relative z-[70] px-3 md:px-6 py-1.5 md:py-3 bg-gradient-to-r from-iceland-green to-teal-400 text-white text-xs md:text-base xl:text-sm font-sans font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-iceland-green/25 pointer-events-auto"
          />
        </motion.div>

        {/* Mobile Navigation Controls - Hidden on Mobile */}
        <div className="hidden">
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

          
        </div>
      </div>

      {/* Image Information Card - Keep in bottom left */}
      <ImageInfoCard
        title={heroImages[currentImageIndex].title}
        location={heroImages[currentImageIndex].location}
      />

        {/* Navigation Controls - Centered Bottom, Only on Desktop/Tablet */}
        <div className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center space-y-4 z-10">
          
          {/* Image Navigation Dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.8 }}
          >
            <NavigationDots
              images={heroImages}
              currentIndex={currentImageIndex}
              onImageClick={handleImageClick}
            />
          </motion.div>

 

        {/* Scroll Indicator */}
        <motion.div
          className="flex flex-col items-center text-white/70"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.6 }}
        >
          <span className="text-xs xl:text-[10px] uppercase tracking-widest mb-2 font-sans">Scroll</span>
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-white/70 to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>
      </section>
    </>
  );
};

export default HeroSection;