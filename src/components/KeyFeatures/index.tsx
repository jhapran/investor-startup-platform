import React from 'react';
import FeatureCard from './FeatureCard';
import { features } from './features';
import { motion } from 'framer-motion';

const KeyFeatures: React.FC = () => {
  return (
    <section id="keyFeatures" className="relative py-32 bg-gray-50 overflow-hidden">
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
            Everything you need to
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              accelerate growth
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Powerful tools and features designed to streamline your startup-investor connections
            and help you achieve your goals faster.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;