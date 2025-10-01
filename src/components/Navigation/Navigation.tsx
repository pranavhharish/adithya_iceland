'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface NavItem {
  label: string;
  href: string;
  id: string;
}

// Left side navigation items
const leftNavItems: NavItem[] = [
  { label: 'Adventure', href: '/', id: 'hero' },
  { label: 'Itinerary', href: '/itinerary', id: 'itinerary' },
  { label: 'Gallery', href: '/gallery', id: 'gallery' },
];

// Right side navigation items
const rightNavItems: NavItem[] = [
  { label: 'About me', href: '/about', id: 'about' },
  { label: 'Price', href: '/pricing', id: 'pricing' },
];

// All items for mobile menu
const allNavItems: NavItem[] = [...leftNavItems, ...rightNavItems];

const Navigation: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleSectionChange = () => {
      if (pathname !== '/') return;
      
      const sections = ['hero', 'itinerary', 'gallery', 'about', 'pricing'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

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
  }, [pathname]);

  const handleWhatsAppContact = () => {
    window.open('https://wa.me/917373076000', '_blank');
  };

  const handleNavigation = async (item: NavItem) => {
    setIsMobileMenuOpen(false);
    
    if (item.href === '/') {
      // For Adventure/Home, always go to home page
      await router.push('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // For all other pages, use regular navigation
      router.push(item.href);
    }
  };

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 hidden md:block ${
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
              {leftNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className={`relative px-4 py-2 text-base xl:text-lg font-sans font-medium transition-all duration-300 group ${
                    pathname === '/' && activeSection === item.id
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
              ))}
            </div>

            {/* Centered Logo - Click to go Home */}
            <motion.button
              type="button"
              aria-label="Go to home"
              onClick={async () => { await router.push('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center justify-center group cursor-pointer bg-transparent border-0 p-0"
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
                />
              </div>
            </motion.button>

            {/* Right Navigation Items + Social Icons */}
            <div className="hidden lg:flex items-center justify-end gap-6 xl:gap-8 nav-right-section">
              {rightNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className={`relative px-4 py-2 text-base xl:text-lg font-sans font-medium transition-all duration-300 group ${
                    pathname === '/' && activeSection === item.id
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
              ))}
              
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
                  href="https://www.instagram.com/adithya.ags/?hl=en"
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
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-full bg-black/20 backdrop-blur-lg border border-white/10 text-white hover:text-iceland-green transition-colors"
      >
        <Menu size={24} />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="lg:hidden fixed top-0 left-0 z-50 w-[360px] h-full bg-black/40 backdrop-blur-xl border-r border-white/10"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-8 right-8 p-3 rounded-full bg-white/5 text-white hover:text-iceland-green transition-colors"
              >
                <X size={20} />
              </button>

              {/* Menu Content */}
              <div className="flex flex-col items-center pt-36 w-full">
                {/* Glass reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                {/* Menu Items */}
                <div className="w-full flex flex-col items-center px-8">
                  <div className="w-full max-w-[300px]">
                    <div className="flex flex-col items-center gap-2.5">
                      {allNavItems.map((item, index) => (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.1 }}
                          className="w-full"
                        >
                          <button
                            onClick={() => handleNavigation(item)}
                            className="h-[68px] w-full flex items-center justify-center border border-white/10 rounded-2xl bg-white/5 transition-all duration-300 hover:bg-iceland-green hover:border-iceland-green group shadow-lg shadow-black/5 backdrop-blur-sm"
                          >
                            <span className="text-lg font-sans font-medium text-white/90">{item.label}</span>
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space div for mobile */}
                <div className="h-20" />

                {/* Social Icons Section */}
                <div className="border-t border-white/10 w-full">
                  <div className="w-full flex flex-col items-center px-8">
                    <div className="w-full max-w-[300px]">
                      <div className="border border-white/10 rounded-2xl p-4 mt-8 shadow-lg shadow-black/5 backdrop-blur-sm">
                        <div className="grid grid-cols-2 gap-4 place-items-center">
                          {/* Call Icon - Left Column */}
                          <motion.button
                            onClick={() => {
                              handleWhatsAppContact();
                              setIsMobileMenuOpen(false);
                            }}
                            className="h-[88px] w-full flex flex-col items-center justify-center border border-white/10 rounded-2xl bg-white/5 transition-all duration-300 hover:bg-green-400 hover:border-green-400 group shadow-lg shadow-black/5"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Phone size={28} className="mb-2 transition-colors duration-300 text-white" />
                            <span className="text-sm text-white/90 font-sans font-medium">Call</span>
                          </motion.button>

                          {/* Instagram Icon - Right Column */}
                          <motion.a
                            href="https://www.instagram.com/adithya.ags/?hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="h-[88px] w-full flex flex-col items-center justify-center border border-white/10 rounded-2xl bg-white/5 transition-all duration-300 hover:bg-pink-400 hover:border-pink-400 group shadow-lg shadow-black/5"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Instagram size={28} className="mb-2 transition-colors duration-300 text-white" />
                            <span className="text-sm text-white/90 font-sans font-medium">Instagram</span>
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;