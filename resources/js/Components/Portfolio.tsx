import React, { useState } from 'react';

const categories = ['All', 'Commercial', 'Residential', 'Multi Residential'];

const projects = [
  {
    id: 1,
    title: 'Modern Apartment Complex',
    category: 'Multi Residential',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80',
    description: 'Custom joinery for 200+ apartment development'
  },
  {
    id: 2,
    title: 'Luxury Home',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80',
    description: 'Complete home joinery package including kitchen and wardrobes'
  },
  {
    id: 3,
    title: 'Corporate Office',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
    description: 'Full office fitout with custom desks and storage solutions'
  },
  {
    id: 4,
    title: 'Boutique Hotel',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80',
    description: 'Custom joinery for luxury hotel rooms and common areas'
  },
  {
    id: 5,
    title: 'Contemporary Villa',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80',
    description: 'Bespoke kitchen and built-in cabinetry throughout'
  },
  {
    id: 6,
    title: 'Residential Complex',
    category: 'Multi Residential',
    image: 'https://images.unsplash.com/photo-1577047809294-e25d31365d04?auto=format&fit=crop&q=80',
    description: 'Standardized high-quality joinery for residential development'
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-[#1B2B5B] mb-4">Our Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of bespoke projects, each crafted with precision and care.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 px-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? 'bg-[#1B2B5B] text-white shadow-lg'
                    : 'bg-white/80 text-gray-600 hover:bg-white hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 sm:h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h3 className="text-white font-serif text-lg sm:text-xl mb-2">{project.title}</h3>
                  <p className="text-gray-200 text-sm">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;