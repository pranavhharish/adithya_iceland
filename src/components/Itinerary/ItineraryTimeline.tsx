'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Camera, 
  Clock, 
  Plane,
  Car,
  Mountain,
  Home,
  Sunrise,
  Sunset,
  Star,
  Snowflake
} from 'lucide-react';

interface ItineraryDay {
  day: number;
  date: string;
  title: string;
  location: string;
  highlights: string[];
  activities: Activity[];
  accommodation: string;
  meals: string[];
  travelTime: string;
  photoOpportunities: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  weather: string;
}

interface Activity {
  time: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  duration: string;
}

const itineraryData: ItineraryDay[] = [
  {
    day: 1,
    date: "March 20, 2024",
    title: "Arrival & Reykjavik Exploration",
    location: "Reykjavik",
    highlights: ["Arrival at Keflavik Airport", "City Walking Tour", "Hallgrímskirkja Church"],
    activities: [
      { time: "09:00", title: "Airport Pickup", description: "Meet at Keflavik International Airport", icon: Plane, duration: "1h" },
      { time: "11:00", title: "Hotel Check-in", description: "Settle into accommodation in Reykjavik", icon: Home, duration: "1h" },
      { time: "14:00", title: "City Walking Tour", description: "Explore downtown Reykjavik and major landmarks", icon: MapPin, duration: "3h" },
      { time: "18:00", title: "Welcome Dinner", description: "Traditional Icelandic cuisine introduction", icon: Sunset, duration: "2h" }
    ],
    accommodation: "Hotel Reykjavik Centrum",
    meals: ["Welcome Dinner"],
    travelTime: "1 hour from airport",
    photoOpportunities: ["Hallgrímskirkja Architecture", "Colorful Houses", "Harbor Views"],
    difficulty: "Easy",
    weather: "Cool, possibly windy"
  },
  {
    day: 2,
    date: "March 21, 2024",
    title: "Golden Circle Classic",
    location: "Thingvellir • Geysir • Gullfoss",
    highlights: ["Thingvellir National Park", "Strokkur Geyser", "Gullfoss Waterfall"],
    activities: [
      { time: "08:00", title: "Departure", description: "Leave Reykjavik for Golden Circle tour", icon: Car, duration: "45m" },
      { time: "09:00", title: "Thingvellir National Park", description: "UNESCO World Heritage site and tectonic plates", icon: Mountain, duration: "2h" },
      { time: "12:00", title: "Geysir Geothermal Area", description: "Witness Strokkur geyser eruptions every 5-10 minutes", icon: Star, duration: "1.5h" },
      { time: "15:00", title: "Gullfoss Waterfall", description: "Iceland's most famous two-tiered waterfall", icon: Camera, duration: "2h" },
      { time: "18:00", title: "Return to Reykjavik", description: "Drive back to accommodation", icon: Car, duration: "1.5h" }
    ],
    accommodation: "Hotel Reykjavik Centrum",
    meals: ["Breakfast", "Lunch at Geysir"],
    travelTime: "300km total driving",
    photoOpportunities: ["Geyser Eruptions", "Gullfoss Rainbow", "Thingvellir Rift"],
    difficulty: "Easy",
    weather: "Variable, dress in layers"
  },
  {
    day: 3,
    date: "March 22, 2024",
    title: "South Coast Waterfalls",
    location: "Seljalandsfoss • Skógafoss • Vík",
    highlights: ["Walk behind Seljalandsfoss", "Climb Skógafoss stairs", "Black sand beaches"],
    activities: [
      { time: "08:00", title: "Early Departure", description: "Drive along the scenic Ring Road", icon: Sunrise, duration: "1.5h" },
      { time: "10:00", title: "Seljalandsfoss", description: "Walk behind the 60m high waterfall", icon: Camera, duration: "1.5h" },
      { time: "12:00", title: "Gljúfrabúi Hidden Falls", description: "Secret waterfall hidden in a canyon", icon: Mountain, duration: "1h" },
      { time: "14:00", title: "Skógafoss Waterfall", description: "Climb 527 steps for spectacular views", icon: Star, duration: "2h" },
      { time: "17:00", title: "Reynisfjara Black Beach", description: "Dramatic basalt columns and caves", icon: MapPin, duration: "1.5h" }
    ],
    accommodation: "Hotel Kría, Vík",
    meals: ["Breakfast", "Lunch pack", "Dinner in Vík"],
    travelTime: "250km of coastal driving",
    photoOpportunities: ["Waterfall Backdrops", "Puffin Colonies", "Sea Stacks"],
    difficulty: "Medium",
    weather: "Coastal winds, waterproof gear needed"
  },
  {
    day: 4,
    date: "March 23, 2024",
    title: "Glacier Lagoon & Diamond Beach",
    location: "Jökulsárlón • Diamond Beach",
    highlights: ["Glacier Lagoon boat tour", "Ice photography", "Seal watching"],
    activities: [
      { time: "08:00", title: "Drive to Jökulsárlón", description: "Journey through Vatnajökull National Park", icon: Car, duration: "2.5h" },
      { time: "11:00", title: "Glacier Lagoon Tour", description: "Boat tour among floating icebergs", icon: Snowflake, duration: "2h" },
      { time: "14:00", title: "Diamond Beach", description: "Ice chunks on black volcanic sand", icon: Camera, duration: "2h" },
      { time: "16:30", title: "Photography Session", description: "Golden hour ice formations", icon: Sunset, duration: "1.5h" },
      { time: "18:30", title: "Return to Vík", description: "Drive back along the coast", icon: Car, duration: "2.5h" }
    ],
    accommodation: "Hotel Kría, Vík",
    meals: ["Breakfast", "Lunch at lagoon", "Late dinner"],
    travelTime: "500km round trip",
    photoOpportunities: ["Ice Formations", "Seal Wildlife", "Mountain Reflections"],
    difficulty: "Medium",
    weather: "Cold, bring warm layers"
  },
  {
    day: 5,
    date: "March 24, 2024",
    title: "DC-3 Plane Wreck & Ice Cave",
    location: "Sólheimasandur • Katla Ice Cave",
    highlights: ["Iconic plane wreck", "Blue ice cave exploration", "Glacier hiking"],
    activities: [
      { time: "08:00", title: "DC-3 Plane Wreck Hike", description: "4km hike to famous crash site", icon: Plane, duration: "3h" },
      { time: "12:00", title: "Lunch Break", description: "Rest and refuel", icon: Clock, duration: "1h" },
      { time: "13:30", title: "Katla Ice Cave", description: "Explore natural glacier ice cave", icon: Snowflake, duration: "3h" },
      { time: "17:00", title: "Photography Workshop", description: "Ice cave photography techniques", icon: Camera, duration: "2h" },
      { time: "19:00", title: "Return to Hotel", description: "Relax and dinner", icon: Home, duration: "1h" }
    ],
    accommodation: "Hotel Kría, Vík",
    meals: ["Early breakfast", "Packed lunch", "Dinner"],
    travelTime: "Minimal driving, mostly hiking",
    photoOpportunities: ["Plane Wreck Silhouettes", "Blue Ice Textures", "Cave Formations"],
    difficulty: "Hard",
    weather: "Challenging conditions, full gear required"
  },
  {
    day: 6,
    date: "March 25, 2024",
    title: "Reykjanes Peninsula",
    location: "Blue Lagoon • Reykjanes",
    highlights: ["Geothermal spa", "Volcanic landscapes", "Lighthouse views"],
    activities: [
      { time: "09:00", title: "Drive to Reykjanes", description: "Explore volcanic peninsula", icon: Car, duration: "2h" },
      { time: "11:00", title: "Reykjanesviti Lighthouse", description: "Oldest lighthouse in Iceland", icon: MapPin, duration: "1h" },
      { time: "13:00", title: "Blue Lagoon", description: "Relax in geothermal waters", icon: Star, duration: "3h" },
      { time: "16:30", title: "Geothermal Photography", description: "Capture steaming landscapes", icon: Camera, duration: "1.5h" },
      { time: "18:30", title: "Return to Reykjavik", description: "Check into city hotel", icon: Home, duration: "1h" }
    ],
    accommodation: "Hotel Reykjavik Centrum",
    meals: ["Breakfast", "Lunch at Blue Lagoon", "Dinner in city"],
    travelTime: "200km peninsula loop",
    photoOpportunities: ["Geothermal Steam", "Volcanic Textures", "Lighthouse Compositions"],
    difficulty: "Easy",
    weather: "Geothermal warmth despite cold air"
  },
  {
    day: 7,
    date: "March 26, 2024",
    title: "Snæfellsnes Peninsula",
    location: "Kirkjufell • Snæfellsjökull",
    highlights: ["Most photographed mountain", "Glacier national park", "Coastal cliffs"],
    activities: [
      { time: "07:00", title: "Early Departure", description: "Drive to Snæfellsnes Peninsula", icon: Sunrise, duration: "2h" },
      { time: "09:30", title: "Kirkjufell Mountain", description: "Iceland's most photographed mountain", icon: Mountain, duration: "2h" },
      { time: "12:00", title: "Snæfellsjökull Glacier", description: "Explore the glacier national park", icon: Snowflake, duration: "3h" },
      { time: "16:00", title: "Arnarstapi Cliffs", description: "Dramatic coastal rock formations", icon: Camera, duration: "2h" },
      { time: "18:30", title: "Return to Reykjavik", description: "Drive back to city", icon: Car, duration: "2h" }
    ],
    accommodation: "Hotel Reykjavik Centrum",
    meals: ["Early breakfast", "Lunch pack", "Late dinner"],
    travelTime: "400km peninsula circuit",
    photoOpportunities: ["Kirkjufell Reflections", "Glacier Landscapes", "Sea Cliffs"],
    difficulty: "Medium",
    weather: "Mountain weather, be prepared"
  },
  {
    day: 8,
    date: "March 27, 2024",
    title: "Northern Lights Hunt",
    location: "Dark Sky Locations",
    highlights: ["Aurora photography", "Night driving", "Hot chocolate breaks"],
    activities: [
      { time: "10:00", title: "Free Morning", description: "Rest, edit photos, explore city", icon: Camera, duration: "4h" },
      { time: "15:00", title: "Aurora Workshop", description: "Learn night photography techniques", icon: Star, duration: "2h" },
      { time: "18:00", title: "Early Dinner", description: "Fuel up for night adventure", icon: Sunset, duration: "1h" },
      { time: "20:00", title: "Northern Lights Chase", description: "Hunt for Aurora Borealis", icon: Car, duration: "6h" },
      { time: "02:00", title: "Return to Hotel", description: "Late night return", icon: Home, duration: "1h" }
    ],
    accommodation: "Hotel Reykjavik Centrum",
    meals: ["Late breakfast", "Early dinner", "Midnight snacks"],
    travelTime: "Variable based on weather conditions",
    photoOpportunities: ["Aurora Borealis", "Star Photography", "Night Landscapes"],
    difficulty: "Medium",
    weather: "Clear skies needed for best aurora viewing"
  },
  {
    day: 9,
    date: "March 28, 2024",
    title: "Westman Islands",
    location: "Heimaey Island",
    highlights: ["Ferry to islands", "Puffin colonies", "Volcanic landscapes"],
    activities: [
      { time: "08:00", title: "Ferry to Westman Islands", description: "Scenic boat ride to Heimaey", icon: Car, duration: "1h" },
      { time: "10:00", title: "Eldfell Volcano Hike", description: "Hike the 1973 eruption site", icon: Mountain, duration: "3h" },
      { time: "14:00", title: "Puffin Watching", description: "Visit Europe's largest puffin colony", icon: Camera, duration: "2h" },
      { time: "16:30", title: "Island Photography", description: "Capture unique landscapes", icon: Star, duration: "2h" },
      { time: "19:00", title: "Return Ferry", description: "Evening ferry back to mainland", icon: Sunset, duration: "1h" }
    ],
    accommodation: "Hotel Reykjavik Centrum",
    meals: ["Breakfast", "Island lunch", "Dinner on mainland"],
    travelTime: "Ferry rides and island exploration",
    photoOpportunities: ["Puffin Portraits", "Volcanic Landscapes", "Island Views"],
    difficulty: "Medium",
    weather: "Island weather can be unpredictable"
  },
  {
    day: 10,
    date: "March 29, 2024",
    title: "Photography Masterclass",
    location: "Reykjavik & Surroundings",
    highlights: ["Edit previous photos", "Final shooting locations", "Portfolio review"],
    activities: [
      { time: "09:00", title: "Photo Editing Workshop", description: "Process and edit your best shots", icon: Camera, duration: "3h" },
      { time: "13:00", title: "Final Shooting", description: "Revisit favorite locations", icon: MapPin, duration: "4h" },
      { time: "17:00", title: "Portfolio Review", description: "Review and select best images", icon: Star, duration: "2h" },
      { time: "19:30", title: "Farewell Dinner", description: "Celebrate the adventure", icon: Sunset, duration: "2.5h" },
      { time: "22:00", title: "Free Time", description: "Last evening in Iceland", icon: Home, duration: "2h" }
    ],
    accommodation: "Hotel Reykjavik Centrum",
    meals: ["Breakfast", "Lunch", "Farewell dinner"],
    travelTime: "Local Reykjavik area",
    photoOpportunities: ["Portfolio Refinement", "Final Compositions", "Group Photos"],
    difficulty: "Easy",
    weather: "Flexible indoor/outdoor activities"
  },
  {
    day: 11,
    date: "March 30, 2024",
    title: "Departure",
    location: "Keflavik Airport",
    highlights: ["Final breakfast", "Airport transfer", "Journey home"],
    activities: [
      { time: "08:00", title: "Final Breakfast", description: "Last meal together in Iceland", icon: Sunrise, duration: "1h" },
      { time: "09:30", title: "Check-out", description: "Pack and prepare for departure", icon: Home, duration: "30m" },
      { time: "10:30", title: "Airport Transfer", description: "Drive to Keflavik International", icon: Car, duration: "1h" },
      { time: "12:00", title: "Departure", description: "Flight departures begin", icon: Plane, duration: "2h" }
    ],
    accommodation: "N/A",
    meals: ["Breakfast"],
    travelTime: "45 minutes to airport",
    photoOpportunities: ["Final Iceland shots", "Group departure photo"],
    difficulty: "Easy",
    weather: "N/A"
  }
];

const ItineraryTimeline: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'activities' | 'photos'>('overview');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500/20 text-green-400';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'Hard': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-gray-900 to-iceland-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
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
            11-Day Journey
          </motion.span>
          
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Complete
            <span className="block text-iceland-green">Itinerary</span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            March 20-30, 2024 • Every day planned for maximum photography opportunities 
            and unforgettable experiences across Iceland's most spectacular locations.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-iceland-green via-blue-500 to-iceland-green transform md:-translate-x-px" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {itineraryData.map((day, index) => (
              <motion.div
                key={day.day}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-iceland-green rounded-full border-4 border-iceland-dark transform md:-translate-x-1/2 z-10">
                  <motion.div
                    className="absolute inset-0 bg-iceland-green rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />
                </div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 cursor-pointer hover:bg-white/10 transition-all duration-300"
                    onClick={() => setSelectedDay(selectedDay === day.day ? null : day.day)}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    {/* Day Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-iceland-green/20 text-iceland-green rounded-lg flex items-center justify-center font-bold text-sm">
                          {day.day}
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-white text-lg">
                            {day.title}
                          </h3>
                          <div className="flex items-center space-x-2 text-gray-400 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>{day.date}</span>
                          </div>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(day.difficulty)}`}>
                        {day.difficulty}
                      </span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center space-x-2 text-iceland-green mb-3">
                      <MapPin className="w-4 h-4" />
                      <span className="font-medium">{day.location}</span>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2 mb-4">
                      {day.highlights.slice(0, 3).map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-iceland-green rounded-full flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Quick Stats */}
                    <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-white/10">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{day.activities.length} activities</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Camera className="w-3 h-3" />
                          <span>{day.photoOpportunities.length} photo ops</span>
                        </div>
                      </div>
                      <span className="text-iceland-green">
                        {selectedDay === day.day ? 'Click to close' : 'Click for details'}
                      </span>
                    </div>
                  </motion.div>

                  {/* Expanded Content */}
                  <motion.div
                    className="mt-4 overflow-hidden"
                    initial={false}
                    animate={{
                      height: selectedDay === day.day ? 'auto' : 0,
                      opacity: selectedDay === day.day ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
                      {/* Tabs */}
                      <div className="flex space-x-4 mb-6 border-b border-white/10">
                        {(['overview', 'activities', 'photos'] as const).map((tab) => (
                          <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-2 px-1 text-sm font-medium capitalize transition-colors ${
                              activeTab === tab
                                ? 'text-iceland-green border-b-2 border-iceland-green'
                                : 'text-gray-400 hover:text-white'
                            }`}
                          >
                            {tab}
                          </button>
                        ))}
                      </div>

                      {/* Tab Content */}
                      {activeTab === 'overview' && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold text-white mb-2">Accommodation</h4>
                              <p className="text-gray-300 text-sm">{day.accommodation}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-white mb-2">Travel Distance</h4>
                              <p className="text-gray-300 text-sm">{day.travelTime}</p>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-2">Meals Included</h4>
                            <div className="flex flex-wrap gap-2">
                              {day.meals.map((meal, idx) => (
                                <span key={idx} className="px-2 py-1 bg-iceland-green/20 text-iceland-green rounded text-xs">
                                  {meal}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-2">Weather & Preparation</h4>
                            <p className="text-gray-300 text-sm">{day.weather}</p>
                          </div>
                        </div>
                      )}

                      {activeTab === 'activities' && (
                        <div className="space-y-4">
                          {day.activities.map((activity, idx) => {
                            const IconComponent = activity.icon;
                            return (
                              <div key={idx} className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg">
                                <div className="flex-shrink-0 w-8 h-8 bg-iceland-green/20 text-iceland-green rounded-lg flex items-center justify-center">
                                  <IconComponent className="w-4 h-4" />
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center justify-between mb-1">
                                    <h5 className="font-medium text-white">{activity.title}</h5>
                                    <div className="flex items-center space-x-2 text-xs text-gray-400">
                                      <span>{activity.time}</span>
                                      <span>•</span>
                                      <span>{activity.duration}</span>
                                    </div>
                                  </div>
                                  <p className="text-gray-300 text-sm">{activity.description}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {activeTab === 'photos' && (
                        <div>
                          <h4 className="font-semibold text-white mb-3">Photography Opportunities</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {day.photoOpportunities.map((opportunity, idx) => (
                              <div key={idx} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                                <Camera className="w-4 h-4 text-iceland-green flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{opportunity}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { label: 'Total Days', value: '11', icon: Calendar },
            { label: 'Locations', value: '15+', icon: MapPin },
            { label: 'Photo Spots', value: '50+', icon: Camera },
            { label: 'Memories', value: '∞', icon: Star }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl">
                <IconComponent className="w-8 h-8 text-iceland-green mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ItineraryTimeline;