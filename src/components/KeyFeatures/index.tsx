import React from 'react';
import FeatureCard from './FeatureCard';
import { features } from './features';
import { motion } from 'framer-motion';

const KeyFeatures: React.FC = () => {
  return (
    <section id="keyFeatures" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              Powerful Features
            </span>
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Everything you need to connect startups with investors efficiently
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
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