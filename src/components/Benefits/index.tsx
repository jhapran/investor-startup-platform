import React from 'react';
import { motion } from 'framer-motion';
import BenefitCard from './BenefitCard';
import { startupBenefits, investorBenefits } from './benefits';

const Benefits: React.FC = () => {
  return (
    <section className="relative py-32 bg-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-indigo-50 to-emerald-50 rounded-full blur-3xl opacity-50 transform rotate-12" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-emerald-50 to-indigo-50 rounded-full blur-3xl opacity-50 transform -rotate-12" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="space-y-32">
          {/* Startup Benefits */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h3 className="text-4xl font-bold mb-6">
                For <span className="text-indigo-600">Startups</span>
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Accelerate your growth with powerful tools and meaningful connections
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {startupBenefits.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  index={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  userType="startup"
                />
              ))}
            </div>
          </div>

          {/* Investor Benefits */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h3 className="text-4xl font-bold mb-6">
                For <span className="text-emerald-600">Investors</span>
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover and support promising opportunities with confidence
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {investorBenefits.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  index={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  userType="investor"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;