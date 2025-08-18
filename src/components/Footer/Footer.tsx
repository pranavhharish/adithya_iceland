'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Twitter,
  Heart,
  Camera,
  Mountain,
  Calendar,
  Shield,
  Award
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/adithya_subramaniam', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  const quickLinks = [
    { label: 'Adventure Overview', href: '#hero' },
    { label: 'Trip Highlights', href: '#highlights' },
    { label: 'Complete Itinerary', href: '#itinerary' },
    { label: 'Photo Gallery', href: '#gallery' },
    { label: 'About Guide', href: '#about' },
    { label: 'Pricing & Booking', href: '#pricing' }
  ];

  const features = [
    { icon: Camera, text: 'Professional Photography Guidance' },
    { icon: Mountain, text: '11 Days of Epic Adventures' },
    { icon: Calendar, text: 'March 20-30, 2024' },
    { icon: Shield, text: 'Northern Lights Guarantee' },
    { icon: Award, text: 'Small Group Experience' }
  ];

  return (
    <footer className="bg-gradient-to-b from-iceland-dark to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-iceland-green/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <div className="max-w-none w-full relative z-10 flex flex-col items-center desktop-centered">
        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 container-desktop">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                Aditya Adventure
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Epic Iceland photography expeditions with guaranteed Northern Lights and 
                professional guidance every step of the way.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-iceland-green/20 hover:border-iceland-green/30 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-400 hover:text-iceland-green transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-iceland-green flex-shrink-0" />
                <div>
                  <p className="text-gray-400">WhatsApp</p>
                  <a 
                    href="https://wa.me/917373076000" 
                    className="text-white hover:text-iceland-green transition-colors"
                  >
                    +91 7373076000
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-iceland-green flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <a 
                    href="mailto:adithya@adventure.com" 
                    className="text-white hover:text-iceland-green transition-colors"
                  >
                    adithya@adventure.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-iceland-green flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Based in</p>
                  <p className="text-white">India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Highlight */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-white mb-4">Why Choose Us</h4>
            <div className="space-y-3">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <IconComponent className="w-4 h-4 text-iceland-green flex-shrink-0" />
                    <span className="text-gray-400 text-sm">{feature.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="py-6 border-t border-white/10">
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-6">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-red-400 flex-shrink-0" />
              <div>
                <p className="text-red-400 font-semibold">24/7 Emergency Contact</p>
                <p className="text-gray-300 text-sm">Available during the expedition for any urgent assistance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="py-6 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-iceland-green">150+</div>
              <div className="text-gray-400 text-sm">Happy Travelers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-iceland-green">95%</div>
              <div className="text-gray-400 text-sm">Aurora Success Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-iceland-green">12</div>
              <div className="text-gray-400 text-sm">Max Group Size</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-iceland-green">3+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>© {currentYear} Aditya Adventure Iceland. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>for photography enthusiasts.</span>
          </div>
          
          <div className="flex space-x-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cancellation Policy</a>
          </div>
        </div>

        {/* Final CTA */}
        <div className="py-8 text-center">
          <div className="bg-gradient-to-r from-iceland-green/20 to-teal-400/20 border border-iceland-green/30 rounded-2xl p-6">
            <h3 className="text-xl font-display font-bold text-white mb-2">
              Ready for Your Iceland Adventure?
            </h3>
            <p className="text-gray-300 mb-4">
              Limited spots available for March 2024. Book now to secure your place!
            </p>
            <motion.a
              href="https://wa.me/917373076000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-iceland-green to-teal-400 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-iceland-green/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-4 h-4" />
              <span>Book via WhatsApp</span>
            </motion.a>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;