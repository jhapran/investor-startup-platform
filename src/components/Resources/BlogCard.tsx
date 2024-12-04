import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, category, title, excerpt, readTime }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={image} 
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-indigo-600">{category}</span>
          <span className="text-sm text-gray-500">{readTime} min read</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <button className="text-indigo-600 font-medium inline-flex items-center hover:text-indigo-500">
          Read More
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;