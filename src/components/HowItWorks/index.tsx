import React from 'react';
import StepCard from './StepCard';
import { steps } from './steps';
import { motion } from 'framer-motion';

const HowItWorks: React.FC = () => {
  return (
    <section id="howItWorks" className="py-24 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-orange-50 text-orange-600 rounded-full text-sm font-medium mb-4">
              How It Works
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Your journey to success in
              <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent"> four simple steps</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our streamlined process makes it easy for startups and investors to connect and grow together
            </p>
          </motion.div>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="absolute top-1/2 left-0 right-0 hidden lg:block">
            <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-orange-200 to-transparent transform -translate-y-1/2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <StepCard
                  index={index}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="mt-16 flex justify-center">
          <div className="w-20 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;