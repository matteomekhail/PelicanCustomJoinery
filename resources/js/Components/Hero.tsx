import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?q=80&w=2070&auto=format&fit=crop"
          alt="Woodworking Workshop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="text-white max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-4 sm:mb-6">
            Crafting Excellence in Every Detail
          </h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-200">
            Bespoke joinery and custom woodwork that transforms your space into a masterpiece
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#1B2B5B] text-white px-6 sm:px-8 py-3 rounded-md flex items-center justify-center hover:bg-[#2a407c] transition-colors text-base sm:text-lg">
              Request Free Quote
              <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-md hover:bg-white hover:text-[#1B2B5B] transition-colors text-base sm:text-lg">
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;