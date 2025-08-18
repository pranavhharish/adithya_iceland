'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Check, 
  X, 
  Phone, 
  Calendar, 
  Users, 
  CreditCard,
  Shield,
  Clock,
  MessageCircle,
  AlertCircle,
  Star,
  Gift,
  Plane,
  Camera,
  Mountain,
  Coffee
} from 'lucide-react';

interface PricingTier {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  currency: string;
  description: string;
  features: string[];
  notIncluded: string[];
  popular: boolean;
  urgency?: string;
}

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  travelers: number;
  experience: 'beginner' | 'intermediate' | 'advanced';
  interests: string[];
  specialRequests: string;
}

const pricingTiers: PricingTier[] = [
  {
    id: 'standard',
    name: 'Standard Adventure',
    price: 249000,
    originalPrice: 299000,
    currency: '₹',
    description: 'Complete 11-day Iceland photography expedition with all essentials included.',
    popular: true,
    urgency: 'Only 3 spots left!',
    features: [
      '11 days / 10 nights accommodation',
      'Professional photography guidance',
      'All transportation in Iceland',
      'Entrance to all attractions',
      'Small group (max 12 travelers)',
      'Airport transfers',
      'Photography workshops',
      'Post-processing tutorials',
      'Northern Lights hunting (weather permitting)',
      'Ice cave exploration',
      'Golden Circle tour',
      'South Coast waterfalls',
      'Jökulsárlón glacier lagoon',
      'Group photo editing sessions',
      '24/7 support during trip'
    ],
    notIncluded: [
      'International flights to/from Iceland',
      'Travel insurance',
      'Personal expenses',
      'Alcoholic beverages',
      'Photography equipment rental',
      'Extra activities not in itinerary'
    ]
  }
];

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    text: 'Absolutely incredible experience! Adithya\'s guidance helped me capture the Northern Lights perfectly. Worth every rupee!',
    trip: 'October 2023'
  },
  {
    name: 'Rajesh Kumar',
    location: 'Bangalore',
    rating: 5,
    text: 'Best photography trip ever! The ice caves were magical and the group was fantastic. Already planning to book again.',
    trip: 'December 2023'
  },
  {
    name: 'Sneha Patel',
    location: 'Delhi',
    rating: 5,
    text: 'From a complete beginner to capturing award-winning shots - this trip transformed my photography skills.',
    trip: 'February 2024'
  }
];

const PricingBooking: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<string>('standard');
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    travelers: 1,
    experience: 'beginner',
    interests: [],
    specialRequests: ''
  });
  const [showBookingForm, setShowBookingForm] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const interestOptions = [
    'Northern Lights Photography',
    'Landscape Photography',
    'Waterfall Photography',
    'Ice Cave Exploration',
    'Wildlife Photography',
    'Portrait Photography',
    'Night Sky Photography',
    'Drone Photography'
  ];

  const handleInputChange = (field: keyof BookingFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleWhatsAppBooking = () => {
    const tier = pricingTiers.find(t => t.id === selectedTier);
    const message = `Hi! I'm interested in booking the "${tier?.name}" Iceland photography expedition for ${formData.travelers} traveler(s). 

My details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Photography Experience: ${formData.experience}
- Interests: ${formData.interests.join(', ')}
${formData.specialRequests ? `- Special Requests: ${formData.specialRequests}` : ''}

Please send me more details and booking information. Thanks!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/917373076000?text=${encodedMessage}`, '_blank');
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN').format(price);
  };

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-gray-900 to-iceland-dark relative overflow-hidden w-full flex justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-iceland-green/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity }}
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
            Limited Spots Available
          </motion.span>
          
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Secure Your
            <span className="block text-iceland-green">Adventure</span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            March 20-30, 2024 • Only 12 spots available • Epic pictures guaranteed or full refund
          </motion.p>
        </motion.div>

        {/* Urgency Banner */}
        <motion.div
          className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-xl p-4 mb-12 max-w-4xl mx-auto w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center justify-center space-x-3 text-center">
            <AlertCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
            <div>
              <span className="text-orange-400 font-semibold">Early Bird Offer Ending Soon!</span>
              <span className="text-gray-300 ml-2">Save ₹50,000 - Only 3 spots left at this price</span>
            </div>
          </div>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          className="max-w-6xl mx-auto mb-16 w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative bg-white/5 backdrop-blur-md border-2 rounded-3xl p-8 transition-all duration-300 ${
                tier.popular 
                  ? 'border-iceland-green shadow-2xl shadow-iceland-green/20 scale-105' 
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-iceland-green to-teal-400 px-6 py-2 rounded-full text-white font-semibold text-sm">
                    Most Popular Choice
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
                {/* Pricing Info */}
                <div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-gray-300 mb-6">{tier.description}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-4xl font-bold text-iceland-green">
                        {tier.currency}{formatPrice(tier.price)}
                      </span>
                      {tier.originalPrice && (
                        <span className="text-xl text-gray-400 line-through">
                          {tier.currency}{formatPrice(tier.originalPrice)}
                        </span>
                      )}
                    </div>
                    <div className="text-gray-400 text-sm mt-1">
                      Per person • All inclusive except flights
                    </div>
                    {tier.urgency && (
                      <div className="text-orange-400 text-sm font-medium mt-2">
                        {tier.urgency}
                      </div>
                    )}
                  </div>

                  {/* Payment Options */}
                  <div className="bg-white/5 rounded-xl p-4 mb-6">
                    <h4 className="font-semibold text-white mb-3">Payment Options</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <CreditCard className="w-4 h-4 text-iceland-green" />
                        <span className="text-gray-300">Pay ₹50,000 now, balance 30 days before travel</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Shield className="w-4 h-4 text-iceland-green" />
                        <span className="text-gray-300">100% refund if Northern Lights not visible</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-iceland-green" />
                        <span className="text-gray-300">Free cancellation up to 45 days before</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <motion.button
                      onClick={() => setShowBookingForm(true)}
                      className="w-full py-4 bg-gradient-to-r from-iceland-green to-teal-400 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-iceland-green/25 transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Book Your Adventure
                    </motion.button>
                    
                    <motion.button
                      onClick={() => window.open('https://wa.me/917373076000', '_blank')}
                      className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Phone className="w-4 h-4" />
                      <span>WhatsApp +91 7373076000</span>
                    </motion.button>
                  </div>
                </div>

                {/* Features List */}
                <div>
                  <h4 className="font-semibold text-white mb-4 flex items-center">
                    <Gift className="w-5 h-5 text-iceland-green mr-2" />
                    What's Included
                  </h4>
                  <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                    {tier.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Check className="w-4 h-4 text-iceland-green flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <h4 className="font-semibold text-white mb-4 flex items-center">
                    <AlertCircle className="w-5 h-5 text-orange-400 mr-2" />
                    Not Included
                  </h4>
                  <div className="space-y-3">
                    {tier.notIncluded.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-400 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-3xl font-display font-bold text-white text-center mb-12">
            What Our Travelers Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-xs">{testimonial.location}</div>
                  </div>
                  <div className="text-iceland-green text-xs">{testimonial.trip}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <h3 className="text-2xl font-display font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "What if we don't see the Northern Lights?",
                a: "We guarantee Northern Lights visibility or provide a full refund. We have a 95% success rate and multiple nights dedicated to aurora hunting."
              },
              {
                q: "What photography skill level is required?",
                a: "All levels welcome! From complete beginners to advanced photographers. We provide personalized guidance for everyone."
              },
              {
                q: "Are camera equipment rentals available?",
                a: "Yes, we can arrange high-quality camera and lens rentals. Contact us for equipment options and pricing."
              },
              {
                q: "What's the group size?",
                a: "Maximum 12 travelers to ensure personalized attention and access to exclusive photography spots."
              },
              {
                q: "Is travel insurance required?",
                a: "Yes, comprehensive travel insurance is mandatory. We can recommend trusted providers if needed."
              },
              {
                q: "What happens in bad weather?",
                a: "Iceland weather is unpredictable, but we have backup plans and indoor activities. Many dramatic shots happen in challenging weather!"
              }
            ].map((faq, index) => (
              <div key={index} className="space-y-2">
                <h4 className="font-semibold text-white">{faq.q}</h4>
                <p className="text-gray-300 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
        </div>
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setShowBookingForm(false)}
        >
          <motion.div
            className="bg-iceland-dark border border-white/10 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-display font-bold text-white">Book Your Adventure</h3>
              <button
                onClick={() => setShowBookingForm(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-iceland-green focus:outline-none"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-iceland-green focus:outline-none"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-iceland-green focus:outline-none"
                    placeholder="+91 9876543210"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Number of Travelers</label>
                  <select
                    value={formData.travelers}
                    onChange={(e) => handleInputChange('travelers', parseInt(e.target.value))}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-iceland-green focus:outline-none"
                  >
                    {[1,2,3,4,5,6].map(num => (
                      <option key={num} value={num} className="bg-iceland-dark">{num}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Photography Experience</label>
                <div className="grid grid-cols-3 gap-3">
                  {(['beginner', 'intermediate', 'advanced'] as const).map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => handleInputChange('experience', level)}
                      className={`py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                        formData.experience === level
                          ? 'bg-iceland-green text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      {level.charAt(0).toUpperCase() + level.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-3">Photography Interests (select all that apply)</label>
                <div className="grid grid-cols-2 gap-3">
                  {interestOptions.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => handleInterestToggle(interest)}
                      className={`py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                        formData.interests.includes(interest)
                          ? 'bg-iceland-green text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Special Requests or Questions</label>
                <textarea
                  value={formData.specialRequests}
                  onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-iceland-green focus:outline-none h-24 resize-none"
                  placeholder="Any dietary restrictions, accessibility needs, or special requests..."
                />
              </div>

              <motion.button
                type="button"
                onClick={handleWhatsAppBooking}
                className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send Booking Request via WhatsApp</span>
              </motion.button>

              <p className="text-gray-400 text-sm text-center">
                We'll respond within 2 hours with payment details and next steps.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default PricingBooking;