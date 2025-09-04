'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { 
  Check, 
  X, 
  Phone, 
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Star,
  Calendar,
  Users,
  Camera,
  Mountain,
  Snowflake,
  AlertCircle
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Do I need professional photography experience?",
    answer: "Not at all! Our expedition welcomes photographers of all levels. Adithya provides hands-on guidance, workshops, and personalized instruction to help you capture stunning shots regardless of your experience level."
  },
  {
    question: "What's the ideal group size?",
    answer: "We maintain small groups of maximum 12 travelers to ensure personalized attention, better photography opportunities, and a more intimate experience with Iceland's landscapes."
  },
  {
    question: "What vehicles will we use for transportation?",
    answer: "We use comfortable 4x4 vehicles that can handle Iceland's diverse terrain, including F-roads to reach remote locations. All fuel, tolls, and parking fees are included."
  },
  {
    question: "Who is the trip leader?",
    answer: "Adithya Subramaniam, a professional adventure photographer and travel expert, leads every expedition. With years of Iceland experience, he knows the best spots and optimal timing for incredible shots."
  },
  {
    question: "Do I need driving experience in Iceland?",
    answer: "No driving required! Our professional drivers handle all transportation, allowing you to focus entirely on photography and enjoying the stunning landscapes."
  },
  {
    question: "What exactly is included in the package?",
    answer: "Twin-shared accommodations, all transportation, national park entries, geothermal spa visits, ice cave adventures, Northern Lights hunting, professional photography guidance, and airport transfers."
  },
  {
    question: "What's not included in the pricing?",
    answer: "International flights, visa charges, meals, personal expenses, travel insurance, and photography equipment rental are not included. We can help arrange these separately."
  },
  {
    question: "Are Northern Lights guaranteed?",
    answer: "While we can't control nature, we maximize your chances with optimal timing, location scouting, and multiple hunting sessions. March offers excellent Northern Lights visibility in Iceland."
  },
  {
    question: "How should I prepare for Iceland's weather?",
    answer: "We'll provide a detailed packing list including waterproof layers, warm clothing, and proper footwear. Iceland's weather can be unpredictable, so preparation is key for comfort and safety."
  }
];

const inclusions = [
  "Twin-shared accommodations",
  "4x4 car rentals, fuel & tolls",
  "National park entries",
  "Geothermal spa visits",
  "Shuttle to DC-3 plane wreck",
  "Ice cave adventure",
  "Northern Lights hunting",
  "Professional photography package",
  "Airport transfers",
  "Photography workshops",
  "Group photo editing sessions",
  "24/7 support during trip"
];

const exclusions = [
  "International flight tickets",
  "Visa charges",
  "Meals & personal expenses",
  "Travel insurance",
  "Photography equipment rental",
  "Alcoholic beverages"
];

const PricingPage: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const contentInView = useInView(contentRef, { once: true });
  const faqInView = useInView(faqRef, { once: true });
  const ctaInView = useInView(ctaRef, { once: true });

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in the Iceland Photography Expedition (March 20-30). Can you provide more details?");
    window.open(`https://wa.me/917373076000?text=${message}`, '_blank');
  };

  const handleBookNowClick = () => {
    const message = encodeURIComponent("I want to book the Iceland Photography Expedition for March 20-30, 2025. Please confirm availability and next steps.");
    window.open(`https://wa.me/917373076000?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/price/pricebg.jpg"
            alt="Iceland landscape"
            fill
            className="object-cover object-center"
            style={{ objectPosition: 'center center' }}
            priority
          />
          <div className="absolute inset-0 bg-stone-900/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-stone-900/10" />
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 font-playfair leading-tight"
          >
            JOIN THE ULTIMATE
            <span className="block bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent">
              ICELANDIC EXPEDITION
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-amber-600 mb-2">
              ₹2,49,000
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl text-stone-200 mb-2">
              ($2999)
            </div>
            <div className="text-lg sm:text-xl text-stone-300">
              + GST & TCS
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl sm:text-2xl lg:text-3xl font-light mb-12 text-stone-200 tracking-wide"
          >
            DESIGNED FOR EXPLORERS, PHOTOGRAPHERS, AND DREAMERS
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={handleBookNowClick}
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              BOOK NOW - LIMITED SPOTS
            </button>
            <div className="flex items-center gap-2 text-stone-200">
              <Calendar className="w-5 h-5 text-amber-500" />
              <span>March 20th - 30th, 2025</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-stone-200/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-3 bg-stone-200/70 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>


      {/* Combined Content Section - Following Template Pattern */}
      <section ref={contentRef} className="py-20 lg:py-32 bg-gradient-to-b from-gray-900 to-iceland-dark relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/backgrounds/stokesness.jpg"
            alt="Iceland landscape background"
            fill
            sizes="100vw"
            className="object-cover object-center"
            style={{ objectPosition: 'center center' }}
            priority={false}
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30" />
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-none w-full relative z-10 flex flex-col items-center desktop-centered">
          <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 container-desktop">
            {/* Section Header - What's Included */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                What's <span className="text-iceland-green">Included</span>
                <span className="block">& What's Not</span>
              </motion.h2>
              
              <motion.p
                className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={contentInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Everything you need for an epic Iceland photography adventure
              </motion.p>
            </motion.div>

            {/* Inclusions & Exclusions Grid */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
              {/* Inclusions */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-iceland-green p-3 rounded-full">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-iceland-green">What's Included</h3>
                </div>
                
                <div className="space-y-4">
                  {inclusions.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-3 group"
                    >
                      <Check className="w-5 h-5 text-iceland-green mt-1 flex-shrink-0" />
                      <span className="text-gray-200 group-hover:text-white transition-colors text-lg">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Exclusions */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-red-500 p-3 rounded-full">
                    <X className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-red-400">What's Not Included</h3>
                </div>
                
                <div className="space-y-4">
                  {exclusions.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-3 group"
                    >
                      <X className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-200 group-hover:text-white transition-colors text-lg">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <p className="text-gray-200 text-sm">
                    <strong>Need help with flights or visas?</strong> We can connect you with our travel partners for competitive rates.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* FAQ Section Header */}
            <motion.div
              ref={faqRef}
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                className="inline-block px-4 py-2 bg-iceland-green/20 text-iceland-green rounded-full text-sm font-medium mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={faqInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Your Questions Answered
              </motion.span>
              
              <motion.h2
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                FAQ
              </motion.h2>
              
              <motion.p
                className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={faqInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Everything you need to know about your Iceland adventure
              </motion.p>
            </motion.div>

            {/* FAQ Content - Following Itinerary Pattern */}
            <div className="w-full flex flex-col items-center">
              {/* FAQ Content - Desktop Layout (Stacked Question/Answer) */}
              <div className="hidden lg:block w-full max-w-5xl">
                {/* FAQ Header Box */}
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 h-20 flex items-center mb-5">
                  <div className="text-center w-full">
                    <h2 className="text-2xl xl:text-3xl font-bold text-white tracking-wider">
                      FREQUENTLY ASKED QUESTIONS
                    </h2>
                  </div>
                </div>

                {/* FAQ Boxes */}
                <div>
                  {faqData.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:scale-102 min-h-[120px] flex items-center"
                      style={{ 
                        backgroundColor: `rgba(255, 255, 255, ${0.1 + (index * 0.01)})`,
                        marginBottom: '20px'
                      }}
                    >
                      <div className="text-center w-full">
                        <div className="text-lg xl:text-xl font-bold text-white mb-3 tracking-wide">
                          {faq.question}
                        </div>
                        <div className="text-base xl:text-lg text-gray-200 leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* FAQ Content - Mobile Layout (Dropdown Style) */}
              <div className="lg:hidden w-full max-w-lg mx-auto">
                {/* Mobile Header Box */}
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center mb-5">
                  <h2 className="text-2xl font-bold text-white tracking-wider">
                    FREQUENTLY ASKED QUESTIONS
                  </h2>
                </div>

                {/* Mobile Dropdown Cards */}
                <div className="space-y-4">
                  {faqData.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white/15 backdrop-blur-sm rounded-2xl overflow-hidden"
                      style={{ marginBottom: '20px' }}
                    >
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                      >
                        <h3 className="text-lg font-bold text-white pr-4 tracking-wide">
                          {faq.question}
                        </h3>
                        {openFAQ === index ? (
                          <ChevronUp className="w-6 h-6 text-iceland-green flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                      
                      <motion.div
                        initial={false}
                        animate={{
                          height: openFAQ === index ? 'auto' : 0,
                          opacity: openFAQ === index ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <p className="text-gray-200 leading-relaxed text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section ref={ctaRef} className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
        <div className="max-w-none w-full relative z-10 flex flex-col items-center desktop-centered">
          <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 container-desktop">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 font-playfair text-stone-800">
                JOIN THE <span className="text-amber-600">ADVENTURE</span>
              </h2>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                <div className="flex items-center gap-2 text-xl sm:text-2xl text-stone-700">
                  <Calendar className="w-6 h-6 text-amber-600" />
                  <span>March 20th - 30th, 2025</span>
                </div>
                <div className="flex items-center gap-2 text-xl sm:text-2xl text-stone-700">
                  <Users className="w-6 h-6 text-amber-600" />
                  <span>Max 12 Adventurers</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button
                  onClick={handleBookNowClick}
                  className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  SECURE YOUR SPOT NOW
                </button>
                
                <div className="text-center">
                  <div className="text-stone-600 text-sm mb-2">Questions? Call us</div>
                  <a 
                    href="tel:+917373076000"
                    className="text-amber-600 hover:text-amber-700 text-lg font-semibold transition-colors"
                  >
                    +91 73730 76000
                  </a>
                </div>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <Camera className="w-8 h-8 text-amber-600 mb-2" />
                  <span className="text-stone-600">Professional Photography</span>
                </div>
                <div className="flex flex-col items-center">
                  <Mountain className="w-8 h-8 text-amber-600 mb-2" />
                  <span className="text-stone-600">Epic Landscapes</span>
                </div>
                <div className="flex flex-col items-center">
                  <Snowflake className="w-8 h-8 text-amber-600 mb-2" />
                  <span className="text-stone-600">Northern Lights</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition-all duration-300 transform hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

export default PricingPage;