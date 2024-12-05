import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Handshake, TrendingUp, LineChart, PieChart, Users, ClipboardCheck } from 'lucide-react';

const Benefits: React.FC = () => {
  const startupBenefits = [
    { 
      icon: Rocket, 
      title: 'Faster Fundraising',
      description: 'Streamline your fundraising process and connect with investors quickly'
    },
    { 
      icon: Target, 
      title: 'Perfect Match',
      description: 'Find investors that align with your industry and growth stage'
    },
    { 
      icon: Handshake, 
      title: 'Strategic Partners',
      description: 'Connect with investors who bring more than just capital'
    },
    { 
      icon: TrendingUp, 
      title: 'Growth Support',
      description: 'Access resources and mentorship to accelerate your growth'
    }
  ];

  const investorBenefits = [
    { 
      icon: LineChart, 
      title: 'Deal Flow',
      description: 'Access a curated pipeline of promising investment opportunities'
    },
    { 
      icon: PieChart, 
      title: 'Portfolio Diversification',
      description: 'Discover opportunities across various sectors and stages'
    },
    { 
      icon: Users, 
      title: 'Quality Connections',
      description: 'Connect with vetted startups that match your investment thesis'
    },
    { 
      icon: ClipboardCheck, 
      title: 'Due Diligence',
      description: 'Comprehensive data and insights for informed decisions'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="benefits" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Platform Benefits
            </span>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
              Empowering both
              <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent"> startups and investors</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform provides unique advantages for both startups seeking funding and investors looking for opportunities
            </p>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Startup Benefits */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">For Startups</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {startupBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  variants={itemVariants}
                  className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-b from-orange-50 to-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-orange-50/0 to-orange-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Investor Benefits */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
                <LineChart className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">For Investors</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {investorBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  variants={itemVariants}
                  className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-b from-orange-50 to-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-orange-50/0 to-orange-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              ))}
            </div>
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

export default Benefits;