import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PricingCard from './PricingCard';
import { startupPlans } from './plans';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply opacity-10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply opacity-10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <span className="inline-block px-4 py-1.5 bg-orange-50 text-orange-600 rounded-full text-sm font-medium">
              Pricing Plans
            </span>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
              Simple, transparent
              <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent"> pricing</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan to accelerate your startup's growth. No hidden fees, no surprises.
            </p>
          </motion.div>

          {/* Billing Toggle */}
          <div className="mt-8 flex justify-center items-center space-x-3">
            <span className={`text-sm ${!isAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 bg-gray-200"
            >
              <span
                className={`${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Annual
              <span className="ml-1.5 inline-block px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {startupPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PricingCard
                name={plan.name}
                price={isAnnual ? String(Number(plan.price.replace(',', '')) * 0.8 * 12) : plan.price}
                description={plan.description}
                features={plan.features}
                isPopular={plan.isPopular}
                isAnnual={isAnnual}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <p className="text-sm text-gray-500">
              All plans include access to our platform's core features.
              <br />
              Need a custom plan? <a href="#contact" className="text-orange-600 font-medium hover:text-orange-700">Contact us</a>
            </p>
          </motion.div>
        </div>

        {/* Bottom Accent */}
        <div className="mt-16 flex justify-center">
          <div className="w-20 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Pricing;