'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Camera, 
  Play, 
  Pause, 
  ArrowLeft, 
  ArrowRight, 
  Download,
  Heart,
  Share2,
  X,
  ZoomIn,
  Award,
  Users,
  Clock,
  MapPin
} from 'lucide-react';

interface Photo {
  id: string;
  src: string;
  alt: string;
  title: string;
  location: string;
  category: 'aurora' | 'landscape' | 'waterfall' | 'glacier' | 'wildlife' | 'portrait';
  photographer: string;
  date: string;
  likes: number;
  isLiked: boolean;
  description: string;
  settings: {
    iso: string;
    aperture: string;
    shutterSpeed: string;
    focalLength: string;
  };
}

interface GallerySection {
  id: string;
  title: string;
  description: string;
  photos: Photo[];
  featured: boolean;
}

const galleryData: GallerySection[] = [
  {
    id: 'aurora',
    title: 'Aurora Borealis Mastery',
    description: 'Capturing the Northern Lights in all their glory - from subtle green curtains to explosive multi-colored displays.',
    featured: true,
    photos: [
      {
        id: 'aurora-1',
        src: '/images/gallery/aurora-1.svg',
        alt: 'Green Aurora over Kirkjufell Mountain',
        title: 'Kirkjufell Aurora',
        location: 'Snæfellsnes Peninsula',
        category: 'aurora',
        photographer: 'Previous Traveler',
        date: '2023-10-15',
        likes: 127,
        isLiked: false,
        description: 'Perfect alignment of Kirkjufell mountain with the Aurora Borealis creating one of Iceland\'s most iconic shots.',
        settings: { iso: '1600', aperture: 'f/2.8', shutterSpeed: '15s', focalLength: '24mm' }
      },
      {
        id: 'aurora-2',
        src: '/images/gallery/aurora-2.svg',
        alt: 'Purple and green Aurora reflection',
        title: 'Aurora Reflection',
        location: 'Jökulsárlón Glacier Lagoon',
        category: 'aurora',
        photographer: 'Adithya Subramaniam',
        date: '2023-11-22',
        likes: 89,
        isLiked: true,
        description: 'Stunning Aurora reflection in the still waters of Jökulsárlón, with icebergs silhouetted against the night sky.',
        settings: { iso: '3200', aperture: 'f/1.4', shutterSpeed: '20s', focalLength: '35mm' }
      }
    ]
  },
  {
    id: 'waterfalls',
    title: 'Waterfall Photography',
    description: 'Master long exposure techniques and capture the power and beauty of Iceland\'s dramatic waterfalls.',
    featured: true,
    photos: [
      {
        id: 'waterfall-1',
        src: '/images/gallery/waterfall-1.svg',
        alt: 'Skógafoss with rainbow',
        title: 'Skógafoss Rainbow',
        location: 'South Iceland',
        category: 'waterfall',
        photographer: 'Adithya Subramaniam',
        date: '2023-09-08',
        likes: 156,
        isLiked: false,
        description: 'Perfect timing captures a full rainbow arc in front of the powerful 60-meter Skógafoss waterfall.',
        settings: { iso: '100', aperture: 'f/11', shutterSpeed: '1/2s', focalLength: '28mm' }
      },
      {
        id: 'waterfall-2',
        src: '/images/gallery/waterfall-2.svg',
        alt: 'Seljalandsfoss behind view',
        title: 'Behind Seljalandsfoss',
        location: 'South Iceland',
        category: 'waterfall',
        photographer: 'Previous Traveler',
        date: '2023-07-12',
        likes: 203,
        isLiked: true,
        description: 'Unique perspective from behind Seljalandsfoss waterfall, showcasing the cave-like formation behind the falls.',
        settings: { iso: '400', aperture: 'f/8', shutterSpeed: '1/4s', focalLength: '16mm' }
      }
    ]
  },
  {
    id: 'glaciers',
    title: 'Ice & Glacier Formations',
    description: 'Explore the ethereal beauty of Iceland\'s glaciers, ice caves, and frozen landscapes.',
    featured: false,
    photos: [
      {
        id: 'glacier-1',
        src: '/images/gallery/glacier-1.svg',
        alt: 'Blue ice cave interior',
        title: 'Crystal Ice Cave',
        location: 'Vatnajökull Glacier',
        category: 'glacier',
        photographer: 'Adithya Subramaniam',
        date: '2023-12-05',
        likes: 91,
        isLiked: false,
        description: 'Inside a natural ice cave, the blue light creates an otherworldly atmosphere perfect for photography.',
        settings: { iso: '800', aperture: 'f/5.6', shutterSpeed: '1/60s', focalLength: '14mm' }
      }
    ]
  }
];

const PhotoGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const categories = [
    { id: 'all', label: 'All Photos', count: 0 },
    { id: 'aurora', label: 'Northern Lights', count: 0 },
    { id: 'waterfall', label: 'Waterfalls', count: 0 },
    { id: 'glacier', label: 'Ice & Glaciers', count: 0 },
    { id: 'landscape', label: 'Landscapes', count: 0 }
  ];

  // Calculate category counts
  categories.forEach(category => {
    if (category.id === 'all') {
      category.count = galleryData.reduce((sum, section) => sum + section.photos.length, 0);
    } else {
      category.count = galleryData.reduce((sum, section) => 
        sum + section.photos.filter(photo => photo.category === category.id).length, 0
      );
    }
  });

  const filteredSections = galleryData.filter(section => 
    selectedCategory === 'all' || section.photos.some(photo => photo.category === selectedCategory)
  );

  const openLightbox = (photo: Photo, photoIndex: number) => {
    setSelectedPhoto(photo);
    setCurrentPhotoIndex(photoIndex);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    setIsAutoPlay(false);
  };

  const navigatePhoto = (direction: 'prev' | 'next') => {
    const allPhotos = galleryData.flatMap(section => section.photos);
    const currentIndex = allPhotos.findIndex(photo => photo.id === selectedPhoto?.id);
    
    if (direction === 'prev') {
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : allPhotos.length - 1;
      setSelectedPhoto(allPhotos[prevIndex]);
      setCurrentPhotoIndex(prevIndex);
    } else {
      const nextIndex = currentIndex < allPhotos.length - 1 ? currentIndex + 1 : 0;
      setSelectedPhoto(allPhotos[nextIndex]);
      setCurrentPhotoIndex(nextIndex);
    }
  };

  const toggleLike = (photoId: string) => {
    // In a real app, this would update the backend
    console.log(`Toggled like for photo ${photoId}`);
  };

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-iceland-dark to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-iceland-green/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="max-w-none w-full relative z-10 flex flex-col items-center desktop-centered">
        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 container-desktop">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-iceland-green/20 text-iceland-green rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Photography Showcase
          </motion.span>
          
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Epic Pictures
            <span className="block text-iceland-green">Guaranteed</span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Professional photography guidance and post-processing support. 
            See what previous travelers have captured during their Iceland adventures.
          </motion.p>
        </motion.div>

        {/* Package Highlights */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { icon: Camera, title: 'Pro Guidance', desc: 'Expert photography tips' },
            { icon: Award, title: 'Guaranteed Shots', desc: 'Epic photos or refund' },
            { icon: Users, title: 'Small Groups', desc: 'Max 12 travelers' },
            { icon: Clock, title: '24/7 Support', desc: 'Always available help' }
          ].map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                className="text-center p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <IconComponent className="w-8 h-8 text-iceland-green mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-iceland-green text-white shadow-lg shadow-iceland-green/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category.label}
              <span className="ml-2 text-xs opacity-70">({category.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Gallery Sections */}
        <div className="space-y-16">
          {filteredSections.map((section, sectionIndex) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 + sectionIndex * 0.2 }}
            >
              {/* Section Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
                  {section.title}
                </h3>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  {section.description}
                </p>
              </div>

              {/* Photos Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.photos
                  .filter(photo => selectedCategory === 'all' || photo.category === selectedCategory)
                  .map((photo, photoIndex) => (
                    <motion.div
                      key={photo.id}
                      className="group relative overflow-hidden rounded-2xl bg-gray-800 aspect-[4/3] cursor-pointer"
                      onClick={() => openLightbox(photo, photoIndex)}
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Photo Background (placeholder) */}
                      <div className="absolute inset-0 bg-gradient-to-br from-iceland-blue to-gray-700 flex items-center justify-center">
                        <Camera className="w-12 h-12 text-white/50" />
                      </div>

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Hover Actions */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex space-x-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleLike(photo.id);
                            }}
                            className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
                          >
                            <Heart className={`w-4 h-4 ${photo.isLiked ? 'text-red-500 fill-current' : 'text-white'}`} />
                          </button>
                          <button className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors">
                            <Share2 className="w-4 h-4 text-white" />
                          </button>
                        </div>
                      </div>

                      {/* Photo Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                        <h4 className="font-semibold text-white mb-1">{photo.title}</h4>
                        <div className="flex items-center space-x-2 text-gray-300 text-sm mb-2">
                          <MapPin className="w-3 h-3" />
                          <span>{photo.location}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 text-xs">by {photo.photographer}</span>
                          <div className="flex items-center space-x-1 text-gray-400 text-xs">
                            <Heart className="w-3 h-3" />
                            <span>{photo.likes}</span>
                          </div>
                        </div>
                      </div>

                      {/* Zoom Icon */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="p-3 bg-iceland-green/20 backdrop-blur-md border border-iceland-green/30 rounded-full">
                          <ZoomIn className="w-6 h-6 text-iceland-green" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Ready to Create Your Own Epic Photos?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join our photography expedition and return home with stunning images that will last a lifetime. 
              Professional guidance included every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-iceland-green to-teal-400 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-iceland-green/25 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Your Adventure
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-md bg-white/10 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Download Sample Pack
              </motion.button>
            </div>
          </div>
        </motion.div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors z-10"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Buttons */}
            <button
              className="absolute left-6 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigatePhoto('prev');
              }}
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>

            <button
              className="absolute right-6 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigatePhoto('next');
              }}
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </button>

            {/* Photo Content */}
            <div className="max-w-5xl max-h-[90vh] mx-auto p-6" onClick={(e) => e.stopPropagation()}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
                {/* Photo */}
                <div className="lg:col-span-2 flex items-center justify-center">
                  <motion.div
                    className="relative max-w-full max-h-full bg-gray-800 rounded-lg overflow-hidden aspect-[4/3] w-full flex items-center justify-center"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Camera className="w-16 h-16 text-white/50" />
                  </motion.div>
                </div>

                {/* Photo Details */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{selectedPhoto.title}</h3>
                    <div className="flex items-center space-x-2 text-gray-300 text-sm mb-3">
                      <MapPin className="w-4 h-4" />
                      <span>{selectedPhoto.location}</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {selectedPhoto.description}
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-4">
                    <h4 className="font-semibold text-white mb-3">Camera Settings</h4>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-gray-400">ISO:</span>
                        <span className="text-white ml-2">{selectedPhoto.settings.iso}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Aperture:</span>
                        <span className="text-white ml-2">{selectedPhoto.settings.aperture}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Shutter:</span>
                        <span className="text-white ml-2">{selectedPhoto.settings.shutterSpeed}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Focal:</span>
                        <span className="text-white ml-2">{selectedPhoto.settings.focalLength}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Photographer:</span>
                      <span className="text-iceland-green font-medium">{selectedPhoto.photographer}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-2">
                      <span className="text-gray-400">Date:</span>
                      <span className="text-white">{selectedPhoto.date}</span>
                    </div>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <button
                      onClick={() => toggleLike(selectedPhoto.id)}
                      className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                        selectedPhoto.isLiked
                          ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                          : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                      }`}
                    >
                      <Heart className={`w-4 h-4 inline mr-2 ${selectedPhoto.isLiked ? 'fill-current' : ''}`} />
                      {selectedPhoto.likes}
                    </button>
                    <button className="flex-1 py-2 px-4 bg-iceland-green/20 text-iceland-green rounded-lg hover:bg-iceland-green/30 transition-colors border border-iceland-green/30">
                      <Download className="w-4 h-4 inline mr-2" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;