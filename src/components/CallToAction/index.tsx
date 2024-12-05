import React from 'react';
import { Rocket, ArrowRight, Star, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-900 to-blue-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] opacity-30">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 blur-3xl animate-pulse" />
        </div>
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] opacity-20">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 blur-3xl animate-pulse" 
               style={{ animationDelay: '1s' }} />
        </div>
        
        {/* Mesh Grid */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center px-3 py-1.5 bg-blue-500/10 backdrop-blur-xl rounded-full border border-blue-500/20 mb-6">
              <Rocket className="h-4 w-4 text-[#FF6B00] mr-2" />
              <span className="text-blue-200 text-sm font-medium">Join India's Fastest Growing Startup Network</span>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FF8533]">100+ Investors</span> and{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FF8533]">200+ Startups</span>{' '}
              Already Growing with Us!
            </h2>
            
            <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Connect with the right partners, access funding opportunities, and take your startup to the next level.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-gradient-to-r from-[#FF6B00] to-[#FF8533] hover:from-[#FF8533] hover:to-[#FF9966] text-white px-6 py-3 rounded-xl text-base font-semibold shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center group"
              >
                Sign Up Now
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white px-6 py-3 rounded-xl text-base font-semibold backdrop-blur-xl transition-all"
              >
                Explore Opportunities
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10"
              >
                <div className="flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#FF6B00]" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">100+</div>
                <div className="text-gray-400">Active Investors</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10"
              >
                <div className="flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">200+</div>
                <div className="text-gray-400">Growing Startups</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10"
              >
                <div className="flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-green-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">₹100Cr+</div>
                <div className="text-gray-400">Funds Raised</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;