import React from 'react';
import { Award, Users, Star, Medal } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1B2B5B] mb-6 sm:mb-8 leading-tight">Crafting Excellence <br/>Since 1985</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 leading-relaxed">
              For over three decades, Pelican Joinery has been at the forefront of bespoke woodworking, 
              delivering exceptional craftsmanship to homes and businesses across the region.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="group">
                <div className="flex items-start mb-2">
                  <div className="p-2 sm:p-3 bg-white/80 rounded-lg group-hover:bg-[#1B2B5B] transition-colors duration-300">
                    <Award className="w-6 h-6 sm:w-8 sm:h-8 text-[#1B2B5B] group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="font-serif text-lg sm:text-xl mb-2">Award Winning</h3>
                <p className="text-sm sm:text-base text-gray-600">Multiple industry awards for excellence</p>
              </div>
              <div className="group">
                <div className="flex items-start mb-2">
                  <div className="p-2 sm:p-3 bg-white/80 rounded-lg group-hover:bg-[#1B2B5B] transition-colors duration-300">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-[#1B2B5B] group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="font-serif text-lg sm:text-xl mb-2">Expert Team</h3>
                <p className="text-sm sm:text-base text-gray-600">Skilled craftsmen with decades of experience</p>
              </div>
              <div className="group">
                <div className="flex items-start mb-2">
                  <div className="p-2 sm:p-3 bg-white/80 rounded-lg group-hover:bg-[#1B2B5B] transition-colors duration-300">
                    <Star className="w-6 h-6 sm:w-8 sm:h-8 text-[#1B2B5B] group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="font-serif text-lg sm:text-xl mb-2">Quality First</h3>
                <p className="text-sm sm:text-base text-gray-600">Premium materials and finishes</p>
              </div>
              <div className="group">
                <div className="flex items-start mb-2">
                  <div className="p-2 sm:p-3 bg-white/80 rounded-lg group-hover:bg-[#1B2B5B] transition-colors duration-300">
                    <Medal className="w-6 h-6 sm:w-8 sm:h-8 text-[#1B2B5B] group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="font-serif text-lg sm:text-xl mb-2">Certified</h3>
                <p className="text-sm sm:text-base text-gray-600">Industry certified professionals</p>
              </div>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80"
              alt="Master craftsman working on wooden furniture"
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-xl">
              <div className="text-4xl sm:text-5xl font-serif text-[#1B2B5B] mb-2">35+</div>
              <div className="text-base sm:text-lg text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;