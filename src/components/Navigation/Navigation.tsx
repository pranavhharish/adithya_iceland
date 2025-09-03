'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Instagram, MapPin } from 'lucide-react';
import Image from 'next/image';

interface NavItem {
  label: string;
  href: string;
  id: string;
}

// Left side navigation items
const leftNavItems: NavItem[] = [
  { label: 'Adventure', href: '#hero', id: 'hero' },
  { label: 'Itinerary', href: '#itinerary', id: 'itinerary' },
  { label: 'Gallery', href: '#gallery', id: 'gallery' },
];

// Right side navigation items
const rightNavItems: NavItem[] = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Pricing', href: '#pricing', id: 'pricing' },
];

// All items for mobile menu
const allNavItems: NavItem[] = [...leftNavItems, ...rightNavItems];

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleSectionChange = () => {
      const sections = allNavItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionChange);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleWhatsAppContact = () => {
    window.open('https://wa.me/917373076000', '_blank');
  };

  const renderNavItem = (item: NavItem) => (
    <button
      key={item.id}
      onClick={() => scrollToSection(item.id)}
      className={`relative px-4 py-2 text-base xl:text-lg font-medium transition-all duration-300 group ${
        activeSection === item.id
          ? 'text-iceland-green'
          : 'text-white hover:text-iceland-green'
      }`}
    >
      <span className="relative z-10">{item.label}</span>
      
      {/* Elegant underline indicator */}
      <motion.div
        className={`absolute bottom-0 left-1/2 h-0.5 bg-iceland-green transition-all duration-300 ${
          activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
        style={{ transform: 'translateX(-50%)' }}
      />
      
      {/* Subtle background on hover */}
      <motion.div
        className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    </button>
  );

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'backdrop-blur-md bg-iceland-dark/80 border-b border-white/10 shadow-lg' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 container-desktop nav-container-fix">
          <div className="relative lg:flex lg:justify-between items-center h-20 lg:h-24 w-full max-w-none">
            
            {/* Left Navigation Items */}
            <div className="hidden lg:flex items-center justify-start gap-6 xl:gap-8">
              {leftNavItems.map(renderNavItem)}
            </div>

            {/* Centered Logo - Made Much Bigger */}
            <motion.div
              className="flex items-center justify-center group cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <Image
                  src="/images/ags_logo_white.jpeg"
                  alt="AGS Logo"
                  width={220}
                  height={80}
                  className="h-18 lg:h-20 xl:h-24 2xl:h-28 w-auto transition-all duration-300 group-hover:brightness-110"
                  priority
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
                <div className="hidden text-white font-display font-bold text-3xl xl:text-4xl tracking-wide">
                  AGS <span className="text-iceland-green">Adventure</span>
                </div>
              </div>
            </motion.div>

            {/* Right Navigation Items + Social Icons */}
            <div className="hidden lg:flex items-center justify-end gap-6 xl:gap-8 nav-right-section">
              {rightNavItems.map(renderNavItem)}
              
              {/* Social Icons */}
              <div className="flex items-center gap-3 xl:gap-4 ml-6">
                <motion.button
                  onClick={handleWhatsAppContact}
                  className="group p-3 text-white hover:text-green-400 transition-all duration-300 relative rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  title="Contact via WhatsApp"
                >
                  <Phone className="w-5 h-5 xl:w-6 xl:h-6 transition-colors duration-300" />
                  <motion.div
                    className="absolute inset-0 bg-green-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.button>
                
                <motion.a
                  href="https://instagram.com/adithya_subramaniam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 text-white hover:text-pink-400 transition-all duration-300 relative rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  title="Follow on Instagram"
                >
                  <Instagram className="w-5 h-5 xl:w-6 xl:h-6 transition-colors duration-300" />
                  <motion.div
                    className="absolute inset-0 bg-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden absolute top-1/2 right-[5px] transform -translate-y-1/2 p-2 text-white hover:text-iceland-green transition-colors duration-300"
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="absolute top-0 right-0 h-full w-80 max-w-[90vw] bg-black/95 backdrop-blur-xl border-l border-white/10 shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
                            <div className="h-full flex flex-col">
                {/* Header Section */}
                <div className="pt-28 pb-12 px-12 border-b border-white/20">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                  >
                    <h2 className="text-3xl font-bold text-white tracking-wide">
                      Menu
                    </h2>
                  </motion.div>
                </div>

                {/* Navigation Tabs */}
                <div className="flex-1 py-20 px-10">
                  <nav className="space-y-6">
                    {allNavItems.map((item, index) => (
                      <motion.button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`group relative w-full text-left px-8 py-8 my-3 transition-all duration-300 rounded-xl ${
                          activeSection === item.id
                            ? 'bg-white text-black border-l-4 border-iceland-green shadow-lg'
                            : 'text-white hover:bg-white hover:text-black border-l-4 border-transparent hover:border-iceland-green hover:shadow-md'
                        }`}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index + 0.4 }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-xl tracking-wide">
                            {item.label}
                          </span>
                          {activeSection === item.id && (
                            <motion.div
                              className="w-3 h-3 rounded-full bg-iceland-green"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: 'spring', stiffness: 500 }}
                            />
                          )}
                        </div>
                      </motion.button>
                    ))}
                  </nav>
                </div>

                {/* Divider */}
                <div className="mx-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                {/* Contact Section */}
                <div className="px-12 py-12 bg-gradient-to-b from-black/20 to-black/40">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="space-y-6"
                  >
                    <h3 className="text-base font-bold text-white uppercase tracking-widest text-center mb-8">
                      Connect
                    </h3>
                    
                    <motion.button
                      onClick={handleWhatsAppContact}
                      className="flex items-center space-x-5 w-full px-6 py-5 text-white hover:bg-white hover:text-black rounded-xl transition-all duration-300 group border border-white/20 hover:border-white hover:shadow-lg"
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="p-4 bg-green-600 group-hover:bg-green-700 rounded-xl transition-colors duration-300 shadow-md">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="font-bold text-lg">WhatsApp</p>
                        <p className="text-sm text-gray-400 group-hover:text-gray-600 mt-1">Quick Contact</p>
                      </div>
                    </motion.button>
                    
                    <motion.a
                      href="https://instagram.com/adithya_subramaniam"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-5 w-full px-6 py-5 text-white hover:bg-white hover:text-black rounded-xl transition-all duration-300 group border border-white/20 hover:border-white hover:shadow-lg"
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="p-4 bg-pink-600 group-hover:bg-pink-700 rounded-xl transition-colors duration-300 shadow-md">
                        <Instagram className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="font-bold text-lg">Instagram</p>
                        <p className="text-sm text-gray-400 group-hover:text-gray-600 mt-1">Follow Journey</p>
                      </div>
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;