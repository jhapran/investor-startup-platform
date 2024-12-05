import React, { useState } from 'react';
import { Rocket, TrendingUp, Users, ArrowRight } from 'lucide-react';
import StartupForm from './StartupForm';
import { motion } from 'framer-motion';
import heroImage from '../assets/oil-lamp-concept-illustration_114360-7627.svg';

const Hero: React.FC = () => {
  const [showStartupForm, setShowStartupForm] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen bg-gray-50 overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-orange-50 to-orange-100 rounded-full blur-3xl opacity-50 transform rotate-12" />
          <div className="absolute bottom-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-full blur-3xl opacity-50 transform -rotate-12" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto h-full px-4 py-8">
          <div className="max-w-7xl mx-auto h-full">
            {/* Stats Section - Circular Design with New Colors */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
              <motion.div
                className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white w-24 h-24 rounded-full text-center shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center relative group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/20 rounded-full p-1.5 w-8 h-8 mb-0.5 backdrop-blur-sm flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold leading-none">500+</h3>
                <h4 className="text-xs font-medium leading-tight">Startups</h4>
                <div className="absolute inset-0 rounded-full bg-indigo-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-xs text-white/90 px-2">Active innovative</p>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-purple-500 to-purple-600 text-white w-24 h-24 rounded-full text-center shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center relative group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/20 rounded-full p-1.5 w-8 h-8 mb-0.5 backdrop-blur-sm flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold leading-none">200+</h3>
                <h4 className="text-xs font-medium leading-tight">Investors</h4>
                <div className="absolute inset-0 rounded-full bg-purple-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-xs text-white/90 px-2">Active partners</p>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-orange-500 to-orange-600 text-white w-24 h-24 rounded-full text-center shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center relative group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/20 rounded-full p-1.5 w-8 h-8 mb-0.5 backdrop-blur-sm flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold leading-none">₹100Cr+</h3>
                <h4 className="text-xs font-medium leading-tight">Funded</h4>
                <div className="absolute inset-0 rounded-full bg-orange-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-xs text-white/90 px-2">Total raised</p>
                </div>
              </motion.div>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 h-full items-center">
              {/* Right Column - Hero Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative flex flex-col space-y-8"
              >
                {/* Image Container */}
                <div className="relative w-full max-w-[500px] -mt-8">
                  {/* Cloud Shape Background */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 500 400"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="100%" stopColor="#F3F4F6" />
                      </linearGradient>
                      <filter id="cloudShadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="15" />
                        <feOffset dx="2" dy="4" result="offsetblur" />
                        <feComponentTransfer>
                          <feFuncA type="linear" slope="0.3" />
                        </feComponentTransfer>
                        <feMerge>
                          <feMergeNode />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    
                    {/* Main Cloud Shape */}
                    <path
                      d="
                        M 180,120 
                        Q 140,120 120,150 
                        Q 100,180 120,210 
                        Q 140,240 180,240 
                        L 320,240 
                        Q 360,240 380,210 
                        Q 400,180 380,150 
                        Q 360,120 320,120 
                        L 180,120 
                        Z
                      "
                      fill="url(#cloudGradient)"
                      stroke="#E5E7EB"
                      strokeWidth="2"
                      filter="url(#cloudShadow)"
                      className="transform-gpu"
                    />
                    
                    {/* Additional Cloud Bumps */}
                    <circle cx="180" cy="120" r="30" fill="url(#cloudGradient)" stroke="#E5E7EB" strokeWidth="2" />
                    <circle cx="240" cy="110" r="35" fill="url(#cloudGradient)" stroke="#E5E7EB" strokeWidth="2" />
                    <circle cx="300" cy="120" r="30" fill="url(#cloudGradient)" stroke="#E5E7EB" strokeWidth="2" />
                  </svg>

                  {/* Blur Effects */}
                  <div className="absolute -top-10 right-10 w-40 h-40 bg-orange-100/30 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-10 left-10 w-40 h-40 bg-indigo-100/30 rounded-full blur-3xl"></div>
                  
                  {/* Hero Image */}
                  <motion.img
                    src={heroImage}
                    alt="Innovation Lamp"
                    className="relative w-full h-full object-contain p-16 z-10"
                    initial={{ scale: 0.8, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3,
                      type: "spring",
                      stiffness: 100
                    }}
                  />
                </div>
              </motion.div>

              {/* Left Column - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-left space-y-6"
              >
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-medium">
                  <span className="mr-2">🚀</span>
                  Transforming Startup Investment
                </div>

                {/* Headline */}
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="block mb-2">Empowering Startups</span>
                  <span className="block mb-2">
                    <span className="text-orange-500">Connecting</span> Investors
                  </span>
                  <span className="block">
                    Driving <span className="text-orange-500">Growth</span>
                  </span>
                </h1>

                {/* Subheadline */}
                <p className="text-xl text-gray-600 leading-relaxed">
                  Discover the perfect match for your vision — where innovation meets funding, and dreams transform into reality.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <button
                    onClick={() => setShowStartupForm(true)}
                    className="inline-flex items-center px-8 py-4 bg-orange-500 text-white rounded-full text-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    List Your Startup
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <button className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-orange-500 transition-all duration-300 transform hover:scale-105">
                    Invest Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {showStartupForm && (
          <StartupForm onClose={() => setShowStartupForm(false)} />
        )}
      </div>
    </section>
  );
};

export default Hero;
