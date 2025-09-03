'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

// Gallery images data
const galleryImages = [
  { url: "/images/hero/hero1.jpg", caption: "Majestic Iceland Landscape" },
  { url: "/images/hero/hero2.jpg", caption: "Northern Lights Aurora" },
  { url: "/images/hero/hero3.jpg", caption: "Glacial Adventure" },
  { url: "/images/hero/hero4.jpg", caption: "Volcanic Terrain" },
  { url: "/images/hero/hero5.jpg", caption: "Pristine Wilderness" },
  { url: "/images/photo1.jpg", caption: "Mountain Sunset" },
  { url: "/images/photo2.jpg", caption: "Coastal Beauty" },
  { url: "/images/adv1.jpg", caption: "Adventure Awaits" },
  { url: "/images/gallery/aurora-1.svg", caption: "Aurora Over Mountains" },
  { url: "/images/gallery/aurora-2.svg", caption: "Dancing Northern Lights" },
  { url: "/images/gallery/waterfall-1.svg", caption: "Powerful Waterfall" },
  { url: "/images/gallery/waterfall-2.svg", caption: "Misty Falls" },
  { url: "/images/gallery/glacier-1.svg", caption: "Ice Cave Wonder" },
];

interface LightboxProps {
  isOpen: boolean;
  currentIndex: number;
  images: typeof galleryImages;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  currentIndex,
  images,
  onClose,
  onNext,
  onPrev,
}) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrev();
          break;
        case 'ArrowRight':
          onNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, onClose, onNext, onPrev]);

  // Handle touch gestures for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      onNext();
    } else if (isRightSwipe) {
      onPrev();
    }
  };

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Close button */}
        <motion.button
          className="absolute top-4 right-4 z-60 p-2 text-white hover:text-iceland-green transition-colors duration-300 bg-black/50 rounded-full backdrop-blur-sm"
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="w-6 h-6" />
        </motion.button>

        {/* Previous button */}
        <motion.button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-60 p-3 text-white hover:text-iceland-green transition-colors duration-300 bg-black/50 rounded-full backdrop-blur-sm hidden sm:block"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        {/* Next button */}
        <motion.button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-60 p-3 text-white hover:text-iceland-green transition-colors duration-300 bg-black/50 rounded-full backdrop-blur-sm hidden sm:block"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>

        {/* Image container */}
        <motion.div
          className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={currentImage.url}
            alt={currentImage.caption}
            width={1200}
            height={800}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            priority
          />
          
          {/* Caption */}
          {currentImage.caption && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm text-white p-4 rounded-b-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-center text-lg font-medium">{currentImage.caption}</p>
              <p className="text-center text-sm text-gray-300 mt-1">
                {currentIndex + 1} of {images.length}
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Mobile navigation indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 sm:hidden">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-iceland-green' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const MasonryGallery: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  }, []);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => 
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  }, []);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  }, []);

  // Clean up body overflow on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <section id="gallery" className="min-h-screen w-full bg-gradient-to-b from-iceland-dark to-black">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Section Header - Ensuring no overlap with fixed navigation */}
        <motion.div
          className="text-center gallery-safe-top"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-4xl lg:text-6xl font-bold text-white" 
            style={{ marginBottom: '2rem' }}
          >
            Gallery
          </h2>
        </motion.div>

        {/* Spacer for clear separation */}
        <div className="h-8 lg:h-12 xl:h-14"></div>

        {/* Masonry Grid - Full width with perfect centering */}
        <motion.div
          className="gallery-centered"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="gallery-container">
            <div className="columns-2 lg:columns-3 masonry-gallery">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => openLightbox(index)}
                >
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src={image.url}
                    alt={image.caption}
                    width={400}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end">
                    <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="font-medium text-sm">{image.caption}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        currentIndex={currentImageIndex}
        images={galleryImages}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </section>
  );
};

export default MasonryGallery;