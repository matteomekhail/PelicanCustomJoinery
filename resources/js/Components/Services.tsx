import React from 'react';
import { Hammer, Home, Settings, History, Building2 } from 'lucide-react';

const services = [
  {
    icon: <Hammer className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: 'Custom Furniture',
    description: 'Unique pieces crafted to your exact specifications and style preferences.',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80'
  },
  {
    icon: <Home className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: 'Bespoke Kitchens',
    description: 'Stunning kitchen designs that combine functionality with exceptional craftsmanship.',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80'
  },
  {
    icon: <Settings className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: 'Interior Joinery',
    description: 'Expert interior woodwork from doors to staircases and built-in storage.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80'
  },
  {
    icon: <History className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: 'Antique Restoration',
    description: 'Careful restoration of period pieces to preserve their historic value.',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80'
  },
  {
    icon: <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: 'Commercial Projects',
    description: 'High-quality joinery solutions for commercial and retail spaces.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1B2B5B] mb-4">Our Services</h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of joinery services, each delivered with the highest level of craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-6">
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/80 text-[#1B2B5B] rounded-lg mb-3 sm:mb-4 group-hover:bg-[#1B2B5B] group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-serif text-[#1B2B5B] mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;