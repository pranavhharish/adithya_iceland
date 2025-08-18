'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  MapPin, 
  Camera, 
  Mountain, 
  Waves, 
  Plane, 
  Snowflake,
  Thermometer,
  Zap
} from 'lucide-react';

interface Highlight {
  id: string;
  title: string;
  description: string;
  location: string;
  icon: React.ComponentType<any>;
  image: string;
  features: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  duration: string;
  bestTime: string;
}

const highlights: Highlight[] = [
  {
    id: 'golden-circle',
    title: 'Golden Circle',
    description: 'Experience Iceland\'s most famous tourist route featuring three spectacular natural wonders.',
    location: 'Southwestern Iceland',
    icon: Mountain,
    image: '/images/highlights/golden-circle.svg',
    features: ['Gullfoss Waterfall', 'Geysir Geothermal Area', 'Þingvellir National Park'],
    difficulty: 'Easy',
    duration: '8 hours',
    bestTime: 'Year-round'
  },
  {
    id: 'waterfalls',
    title: 'Chasing Waterfalls',
    description: 'Discover Iceland\'s most powerful and photogenic waterfalls in dramatic landscapes.',
    location: 'South Coast',
    icon: Waves,
    image: '/images/highlights/waterfalls.svg',
    features: ['Skógafoss', 'Seljalandsfoss', 'Gljúfrabúi Hidden Falls'],
    difficulty: 'Medium',
    duration: '6 hours',
    bestTime: 'Spring-Fall'
  },
  {
    id: 'black-sand-beach',
    title: 'Black Sand & Diamond Beach',
    description: 'Marvel at the otherworldly beauty of volcanic black sand beaches with crystal ice formations.',
    location: 'Jökulsárlón',
    icon: Camera,
    image: '/images/highlights/diamond-beach.svg',
    features: ['Reynisfjara Beach', 'Basalt Columns', 'Glacier Lagoon Icebergs'],
    difficulty: 'Easy',
    duration: '4 hours',
    bestTime: 'Winter'
  },
  {
    id: 'dc3-plane-wreck',
    title: 'DC-3 Plane Wreck',
    description: 'Photograph the iconic abandoned US Navy plane on Sólheimasandur black sand beach.',
    location: 'Sólheimasandur',
    icon: Plane,
    image: '/images/highlights/dc3-wreck.svg',
    features: ['Historic Wreckage', 'Dramatic Landscape', 'Unique Photo Opportunity'],
    difficulty: 'Medium',
    duration: '3 hours',
    bestTime: 'Year-round'
  },
  {
    id: 'ice-cave',
    title: 'Ice Cave Adventure',
    description: 'Explore crystal blue ice caves formed within ancient glaciers - a truly magical experience.',
    location: 'Vatnajökull Glacier',
    icon: Snowflake,
    image: '/images/highlights/ice-cave.svg',
    features: ['Crystal Ice Formations', 'Blue Light Photography', 'Glacier Exploration'],
    difficulty: 'Hard',
    duration: '5 hours',
    bestTime: 'Winter Only'
  },
  {
    id: 'geothermal',
    title: 'Geothermal Areas',
    description: 'Witness the raw power of Earth with bubbling hot springs, geysers, and volcanic activity.',
    location: 'Reykjanes & Haukadalur',
    icon: Thermometer,
    image: '/images/highlights/geothermal.svg',
    features: ['Blue Lagoon', 'Strokkur Geyser', 'Hot Spring Photography'],
    difficulty: 'Easy',
    duration: '4 hours',
    bestTime: 'Year-round'
  },
  {
    id: 'northern-lights',
    title: 'Northern Lights',
    description: 'Hunt for the Aurora Borealis dancing across Iceland\'s dark winter skies.',
    location: 'Dark Sky Areas',
    icon: Zap,
    image: '/images/highlights/northern-lights.svg',
    features: ['Aurora Photography', 'Night Sky Compositions', 'Professional Guidance'],
    difficulty: 'Medium',
    duration: 'All Night',
    bestTime: 'September-March'
  }
];

const TripHighlights: React.FC = () => {
  const [selectedHighlight, setSelectedHighlight] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400 bg-green-400/20';
      case 'Medium': return 'text-yellow-400 bg-yellow-400/20';
      case 'Hard': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-iceland-dark to-gray-900 relative overflow-hidden w-full flex justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-iceland-green/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
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
            Adventure Highlights
          </motion.span>
          
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Iceland's Epic
            <span className="block text-iceland-green">Destinations</span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            From thundering waterfalls to crystal ice caves, every location offers 
            breathtaking photography opportunities and unforgettable memories.
          </motion.p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            
            return (
              <motion.div
                key={highlight.id}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredCard(highlight.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setSelectedHighlight(
                  selectedHighlight === highlight.id ? null : highlight.id
                )}
              >
                {/* Card Container */}
                <div className="relative h-full cursor-pointer">
                  {/* Background Image */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="w-full h-80 bg-gradient-to-br from-iceland-blue/20 to-gray-800 flex items-center justify-center">
                      <IconComponent className="w-16 h-16 text-iceland-green/50" />
                    </div>
                    
                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                      animate={{
                        opacity: hoveredCard === highlight.id ? 1 : 0.7
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Glass Morphism Overlay */}
                    <motion.div
                      className="absolute inset-0 backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl"
                      animate={{
                        opacity: hoveredCard === highlight.id ? 1 : 0,
                        scale: hoveredCard === highlight.id ? 1.02 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6 h-80 flex flex-col justify-end">
                    {/* Icon */}
                    <motion.div
                      className="absolute top-6 left-6 p-3 bg-iceland-green/20 backdrop-blur-md border border-iceland-green/30 rounded-xl"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <IconComponent className="w-6 h-6 text-iceland-green" />
                    </motion.div>

                    {/* Difficulty Badge */}
                    <div className="absolute top-6 right-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(highlight.difficulty)}`}>
                        {highlight.difficulty}
                      </span>
                    </div>

                    {/* Text Content */}
                    <div>
                      <div className="flex items-center space-x-2 text-gray-400 text-sm mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>{highlight.location}</span>
                        <span>•</span>
                        <span>{highlight.duration}</span>
                      </div>
                      
                      <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-iceland-green transition-colors">
                        {highlight.title}
                      </h3>
                      
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {highlight.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-1">
                        {highlight.features.slice(0, 2).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-xs text-gray-400">
                            <div className="w-1 h-1 bg-iceland-green rounded-full" />
                            <span>{feature}</span>
                          </div>
                        ))}
                        {highlight.features.length > 2 && (
                          <div className="text-xs text-iceland-green">
                            +{highlight.features.length - 2} more
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expand Indicator */}
                  <motion.div
                    className="absolute bottom-4 right-4 w-8 h-8 bg-iceland-green/20 backdrop-blur-md border border-iceland-green/30 rounded-full flex items-center justify-center"
                    animate={{
                      scale: hoveredCard === highlight.id ? 1.1 : 1,
                      rotate: selectedHighlight === highlight.id ? 45 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-2 h-2 bg-iceland-green rounded-full" />
                  </motion.div>
                </div>

                {/* Expanded Content */}
                <motion.div
                  className="mt-4 overflow-hidden"
                  initial={false}
                  animate={{
                    height: selectedHighlight === highlight.id ? 'auto' : 0,
                    opacity: selectedHighlight === highlight.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl">
                    <h4 className="font-semibold text-white mb-3">Complete Feature List:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {highlight.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3 text-sm text-gray-300">
                          <div className="w-2 h-2 bg-iceland-green rounded-full flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Best Time:</span>
                        <span className="text-iceland-green font-medium">{highlight.bestTime}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="group px-8 py-4 bg-gradient-to-r from-iceland-green to-teal-400 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-iceland-green/25 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Explore Full Itinerary</span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-iceland-green opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          </motion.button>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TripHighlights;