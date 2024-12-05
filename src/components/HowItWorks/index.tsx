import React from 'react';
import { motion } from 'framer-motion';
import StepCard from './StepCard';
import { steps } from './steps';

const HowItWorks: React.FC = () => {
  return (
    <section id="howItWorks" className="relative py-32 bg-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-full blur-3xl opacity-50 transform rotate-12" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-50 to-purple-100 rounded-full blur-3xl opacity-50 transform -rotate-12" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Your Journey to
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              Successful Funding
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A simple, streamlined process to connect startups with the right investors
            and close successful funding rounds
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              index={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;