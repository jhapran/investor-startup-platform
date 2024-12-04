import React from 'react';
import HeroAnimation from './HeroAnimation';
import HeroContent from './HeroContent';
import HeroButtons from './HeroButtons';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-indigo-700 via-indigo-800 to-indigo-900 overflow-hidden">
      <HeroAnimation />
      <div className="relative container mx-auto px-4 py-32">
        <HeroContent />
        <HeroButtons />
      </div>
    </section>
  );
};

export default Hero;