import React from 'react';
import ResourceCard from './ResourceCard';
import { articles } from './articles';
import { motion } from 'framer-motion';

const Resources: React.FC = () => {
  return (
    <section className="relative py-32 bg-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full blur-3xl opacity-50 transform rotate-12" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-full blur-3xl opacity-50 transform -rotate-12" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Expert Knowledge to
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              Power Your Growth
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover actionable insights, industry trends, and expert advice to help you make informed decisions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {articles.map((article, index) => (
            <ResourceCard
              key={article.id}
              index={index}
              image={article.image}
              category={article.category}
              title={article.title}
              excerpt={article.excerpt}
              readTime={article.readTime}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;