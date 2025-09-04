'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation/Navigation';

// Itinerary data
const itineraryData = [
  {
    date: 'MARCH 20 - SAT',
    activities: 'REACH ICELAND | TRIP BRIEF | DINNER & REST'
  },
  {
    date: 'MARCH 21 - SUN',
    activities: 'GOLDEN CIRCLE: THINGVELLIR & SILFRA | GULLFOSS | GEYSIR | KERID CARTER'
  },
  {
    date: 'MARCH 22 - MON',
    activities: 'CHASING WATERFALLS | DC CRASH SITE | BLACK SAND BEACH'
  },
  {
    date: 'MARCH 23 - TUE',
    activities: 'CLIFFS | CAVES | CANYONS | GLACIERS'
  },
  {
    date: 'MARCH 24 - WED',
    activities: 'ICE CAVE ADVENTURE | GLACIER LAGOON BOAT RIDE | DIAMOND BEACH'
  },
  {
    date: 'MARCH 25 - THU',
    activities: 'VESTAHORN | DRIVE TO EGILSSTADIR | DINNER & REST'
  },
  {
    date: 'MARCH 26 - FRI',
    activities: 'STUDLAGIL CANYON | EXPLORE MARS-LIKE LANDSCAPES OF MYVATN | ENJOY A GEOTHERMAL BATH'
  },
  {
    date: 'MARCH 27 - SAT',
    activities: 'EXPLORE MYVATN GEOTHERMAL AREA & HEAD TO AKUREYRI - THE NORTHERN CAPITAL CITY'
  },
  {
    date: 'MARCH 28 - SUN',
    activities: 'DRIVE TO ONE OF THE MOST PHOTOGRAPHED MOUNTAINS IN THE WORLD'
  },
  {
    date: 'MARCH 29 - MON',
    activities: 'EXPLORE VOLCANOES & COASTAL TOWN OF ARNARSTAPI | NORTHERN LIGHTS AT THE BLACK CHURCH'
  },
  {
    date: 'MARCH 30 - TUE',
    activities: 'EXPLORE REYKJAVIK DOWNTOWN & DEPART AS PER FLIGHT SCHEDULE (EVE FLIGHT)'
  }
];

// Trip highlights data
const tripHighlights = [
  {
    title: 'GOLDEN CIRCLE',
    description: 'Discover the Golden Circle—Iceland\'s most iconic route. Walk between continents at Thingvellir National Park, feel the heat and erupt at Geysir, and stand in awe of the mighty Gullfoss waterfall.'
  },
  {
    title: 'CHASING WATERFALLS',
    description: 'Stand in awe of Iceland\'s iconic waterfalls—Skógafoss and Seljalandsfoss, where you can walk behind the curtain of water for a magical perspective. Visit Skógafoss, whose sheer power you\'ll feel deep in your chest.'
  },
  {
    title: 'BLACK SAND BEACH & THE DIAMOND BEACH',
    description: 'Wander along Iceland\'s cinematic shoreline—where towering basalt columns meet roaring Atlantic waves at Black Sand Beach, and glittering icebergs wash ashore like scattered jewels at the breathtaking Diamond Beach.'
  },
  {
    title: 'DC-3 PLANE WRECK ON SOLHEIMASANDUR',
    description: 'Ride a super jeep across black sand deserts to the haunting remains of a U.S. Navy aircraft, now an otherworldly photo spot.'
  },
  {
    title: 'GLACIER HIKE & ICE CAVE ADVENTURE',
    description: 'For the truly adventurous, step onto a glacier or descend into a crystal-blue ice cave for an unforgettable experience.'
  },
  {
    title: 'MYVATN GEOTHERMAL AREA',
    description: 'Step into a surreal landscape of steaming vents, bubbling mud pools, and volcanic craters—where Iceland\'s raw geothermal power shapes otherworldly beauty.'
  },
  {
    title: 'SNÆFELLSNES PENINSULA',
    description: 'Often called "Iceland in Miniature," this stunning peninsula boasts glaciers, volcanoes, lava fields, black and golden beaches, and the iconic Kirkjufell mountain into one unforgettable region.'
  },
  {
    title: 'CHARMING ICELANDIC VILLAGES',
    description: 'Discover local culture and warm hospitality in postcard-perfect towns like Vík and Höfn.'
  }
];

// Mobile Highlight Card Component with Dropdown
interface MobileHighlightCardProps {
  highlight: { title: string; description: string };
  index: number;
}

function MobileHighlightCard({ highlight, index }: MobileHighlightCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="rounded-xl backdrop-blur-sm transition-all duration-300"
      style={{ 
        backgroundColor: `rgba(255, 255, 255, ${0.12 + (index * 0.01)})`,
        marginBottom: '8px'
      }}
    >
      {/* Clickable Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 text-left flex items-center justify-between focus:outline-none"
      >
        <h3 className="text-sm sm:text-base font-bold text-white tracking-wider">
          {highlight.title}
        </h3>
        <svg
          className={`w-5 h-5 text-white transform transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {/* Expandable Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4">
          <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
            {highlight.description}
          </p>
        </div>
      </div>
    </div>
  );
}

const ItineraryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-iceland-dark">
      <Navigation />
      
      {/* Hero Section with Full Background */}
      <section className="relative w-full">
        {/* Background Image - Covers entire content area */}
        <div className="absolute inset-0 w-full h-full min-h-[200vh]">
          <Image
            src="/images/itenarary/listbg.jpg"
            alt="Iceland canyon landscape"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16 pb-32" style={{ paddingTop: '160px' }}>
          <div className="w-full flex flex-col items-center">
            <div className="text-center mb-16 lg:mb-20">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-wider">
                THE GAME PLAN
              </h1>
            </div>
            
            {/* Desktop Layout */}
            <div className="hidden lg:block w-full max-w-5xl">
              {/* Table Header Box */}
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 h-20 flex items-center" style={{ marginBottom: '20px' }}>
                <div className="grid grid-cols-2 gap-12 text-center w-full">
                  <div>
                    <h2 className="text-2xl xl:text-3xl font-bold text-white tracking-wider">
                      DATE / DAY
                    </h2>
                  </div>
                  <div>
                    <h2 className="text-2xl xl:text-3xl font-bold text-white tracking-wider">
                      WHAT WE SEE
                    </h2>
                  </div>
                </div>
              </div>

              {/* Itinerary Boxes with Clear Spacing */}
              <div>
                {itineraryData.map((item, index) => (
                  <div
                    key={index}
                    className={`rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:scale-102 h-20 flex items-center`}
                    style={{ 
                      backgroundColor: `rgba(255, 255, 255, ${0.1 + (index * 0.02)})`,
                      marginBottom: '20px'
                    }}
                  >
                    <div className="grid grid-cols-2 gap-12 items-center text-center w-full">
                      <div>
                        <div className="text-lg xl:text-xl font-bold text-white tracking-wide">
                          {item.date}
                        </div>
                      </div>
                      <div>
                        <div className="text-lg xl:text-xl text-white tracking-wide">
                          {item.activities}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden w-full max-w-lg">
              {/* Header Box */}
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center" style={{ marginBottom: '20px' }}>
                <h2 className="text-2xl font-bold text-white tracking-wider">
                  DAILY ITINERARY
                </h2>
              </div>

              {/* Mobile Cards with Clear Spacing */}
              <div>
                {itineraryData.map((item, index) => (
                  <div
                    key={index}
                    className={`rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 min-h-[120px] flex flex-col justify-center`}
                    style={{ 
                      backgroundColor: `rgba(255, 255, 255, ${0.15 + (index * 0.02)})`,
                      marginBottom: '20px'
                    }}
                  >
                    <div className="text-center">
                      <div className="text-lg font-bold text-white mb-3 tracking-wide">
                        {item.date}
                      </div>
                      <div className="text-base text-gray-200 leading-relaxed">
                        {item.activities}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative w-full">
        {/* Full Width Image Section */}
        <div className="relative w-screen overflow-hidden">
          <div className="relative w-screen">
            <Image
              src="/images/itenarary/letsjumpworlds.jpg"
              alt="Iceland glacier background"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover"
              sizes="100vw"
              quality={90}
              priority={false}
            />
          </div>
        </div>

        {/* Content Section Below Image */}
        <div className="w-full bg-gradient-to-br from-iceland-dark via-gray-900 to-black py-20 lg:py-32">
          <div className="w-full flex justify-center">
            <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center justify-center text-center space-y-12 lg:space-y-16">
                
                {/* Title */}
                <div className="w-full flex justify-center">
                  <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-wider text-center">
                    UNLEASH YOUR SPIRIT OF ADVENTURE
                  </h2>
                </div>
                
                {/* Stats */}
                <div className="w-full flex justify-center">
                  <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32">
                    <div className="text-center">
                      <div className="text-8xl lg:text-9xl font-bold text-white mb-4">
                        3
                      </div>
                      <div className="text-xl lg:text-2xl text-white font-bold tracking-wider">
                        CARS
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-8xl lg:text-9xl font-bold text-white mb-4">
                        12
                      </div>
                      <div className="text-xl lg:text-2xl text-white font-bold tracking-wider">
                        TRAVELLERS
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-8xl lg:text-9xl font-bold text-white mb-4">
                        1
                      </div>
                      <div className="text-xl lg:text-2xl text-white font-bold tracking-wider">
                        STUNNING<br/>ROAD TRIP
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="w-full flex justify-center">
                  <p className="text-lg lg:text-xl text-gray-200 max-w-5xl mx-auto leading-relaxed text-center">
                    Iceland is best explored by car, and we will be traveling the entire country along the Ring Road. Prepare to be amazed by 
                    the dramatic landscape, from volcanic waterfalls to glacial lagoons, and breathtaking scenery. Get your playlist 
                    ready for one of the most incredible drives you'll ever experience! We will be exploring the country by three 4x4 SUV's 
                    with 4 people sharing a car for maximum comfort on the road trip.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trip Highlights Section */}
      <section className="relative w-screen overflow-hidden flex justify-center">
        {/* Background Image - Full Width, No Cropping, Centered */}
        <div className="relative w-screen flex justify-center">
          <Image
            src="/images/adv1.jpg"
            alt="Iceland adventure background"
            width={1920}
            height={1080}
            className="w-full h-auto object-contain bg-gray-900"
            sizes="100vw"
            quality={90}
            priority={false}
          />
          
          {/* Content Overlaid on Image - Title at Top */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black/30" />
            
            {/* Title Section - Positioned at Top */}
            <div className="relative z-10 w-full px-2 sm:px-4 lg:px-8 pt-8 sm:pt-12 lg:pt-16 flex justify-center">
              <div className="text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white tracking-wider">
                  TRIP HIGHLIGHTS
                </h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mt-2 sm:mt-4">
                  Embark on an unforgettable journey through Iceland's most iconic and awe-inspiring landscapes.
                </p>
              </div>
            </div>

            {/* Highlights Content - Positioned in Center/Lower Area */}
            <div className="relative z-10 w-full px-2 sm:px-4 lg:px-8 flex items-center justify-center" style={{ paddingTop: '120px' }}>
              <div className="w-full flex flex-col items-center max-w-6xl">

                {/* Highlights Grid - Desktop: Grid, Mobile: Dropdown */}
                <div className="w-full max-w-4xl">
                  {/* Desktop Grid Layout */}
                  <div className="hidden lg:grid grid-cols-2 gap-6">
                    {tripHighlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="rounded-xl p-6 backdrop-blur-sm transition-all duration-300 hover:scale-102"
                        style={{ 
                          backgroundColor: `rgba(255, 255, 255, ${0.12 + (index * 0.01)})`,
                          marginBottom: '8px'
                        }}
                      >
                        <div className="text-center space-y-3">
                          <h3 className="text-lg lg:text-xl font-bold text-white tracking-wider">
                            {highlight.title}
                          </h3>
                          <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mobile Dropdown Layout */}
                  <div className="lg:hidden space-y-3">
                    {tripHighlights.map((highlight, index) => (
                      <MobileHighlightCard key={index} highlight={highlight} index={index} />
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="relative py-20 lg:py-32">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/footer/footer.jpg"
            alt="Iceland landscape footer"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

      </section>
    </div>
  );
};

export default ItineraryPage;