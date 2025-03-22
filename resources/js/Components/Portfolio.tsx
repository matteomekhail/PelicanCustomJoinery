import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, ArrowRight } from 'lucide-react';
import { Link } from '@inertiajs/react';
import AnchorLink from '@/Components/AnchorLink';

const portfolioProjects = [
  {
    id: 1,
    title: '16 Sherwood Avenue, Yowie Bay',
    category: 'Residential',
    description: 'Complete kitchen and living space transformation featuring custom cabinets with integrated appliances, a statement island, and bespoke entertainment unit.',
    features: [
      'Custom kitchen cabinetry',
      'Walk-in pantry with timber shelving',
      'Entertainment unit with hidden storage',
      'Floating timber shelves'
    ],
    primaryImage: 'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/b2bd0fbd-4885-49fa-2a8f-d1c9eae09500/public', // 0O2A0703-HDR.jpg
    galleryImages: [
      'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/b1f96557-1248-4d5f-2f47-b701af994400/public', // 0O2A0697-HDR.jpg
      'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/c8088c41-7547-4212-de39-0307fe38b400/public', // 0O2A0700-HDR.jpg
      'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/9cc57e06-d2c4-4b91-b14c-f57bfae8c700/public'  // 0O2A0712-HDR.jpg
    ],
    route: '/projects/yowie-bay'
  },
  {
    id: 2,
    title: '70 Edward Street, Sylvania',
    category: 'Residential',
    description: 'Contemporary bathroom renovation and custom bedroom cabinetry featuring clean lines, premium finishes, and innovative storage solutions.',
    features: [
      'Vanity with stone countertop',
      'Built-in wardrobe system',
      'Custom bedside tables',
      'Floating bathroom shelving'
    ],
    primaryImage: 'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/839c1776-ef5b-4328-d792-86c118752500/public', // 0O2A0825-HDR.jpg
    galleryImages: [
      'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/5ee3dd20-ee8e-442a-56fc-2ef08be02100/public', // 0O2A0834-HDR.jpg
      'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/1154a4f2-26a1-491e-75d7-bee23d01f200/public', // 0O2A0837-HDR.jpg
      'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/d131fe06-7b13-43fc-77a5-9966950fef00/public'  // 0O2A0831-HDR.jpg
    ],
    route: '/projects/sylvania'
  }
];

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-[#f9f7f4] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-80 h-80 rounded-full border border-primary/5 z-0"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full border border-secondary/5 z-0"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 max-w-3xl mx-auto text-center"
        >
          <div className="flex items-center justify-center space-x-5 mb-8">
            <div className="h-[1px] w-20 bg-secondary"></div>
            <div className="px-6 py-2.5 bg-secondary/10 rounded-full backdrop-blur-sm">
              <span className="text-secondary uppercase tracking-widest text-sm font-medium">Our Projects</span>
            </div>
            <div className="h-[1px] w-20 bg-secondary"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-primary mb-8 leading-tight">
            <span className="block">Exceptional</span>
            <span className="block relative">
              <span className="relative z-10">Crafts<span className="text-secondary">manship</span></span>
              <svg className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-48 h-3 text-secondary/30 z-0" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.5C67 -0.5 134 -0.5 199 5.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          
          <p className="text-lg text-gray-custom max-w-3xl mx-auto text-center mt-6 leading-relaxed">
            Explore our featured projects showcasing the quality, precision, and beauty of our custom joinery work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {portfolioProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div 
                className="relative aspect-[16/9] overflow-hidden"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <img 
                  src={project.primaryImage} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className={`absolute inset-0 bg-primary/60 flex items-center justify-center transition-opacity duration-300 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}`}>
                  <Link
                    href={project.route}
                    className="bg-white text-primary rounded-full p-3 hover:bg-secondary hover:text-white transition-colors duration-300"
                  >
                    <Eye className="w-6 h-6" />
                  </Link>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center mb-3">
                  <span className="text-xs uppercase tracking-wider text-secondary font-medium bg-secondary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-heading text-primary mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-custom mb-6">
                  {project.description}
                </p>
                
                <ul className="mb-8">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start mb-2">
                      <span className="text-secondary mr-2">•</span>
                      <span className="text-gray-custom">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={project.route}
                  className="inline-flex items-center text-secondary font-medium transition-all duration-300 hover:text-primary group"
                >
                  View Project Details
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link 
            href="/portfolio" 
            className="inline-flex items-center justify-center px-8 py-3.5 bg-primary hover:bg-primary/90 text-white rounded-full transition-all duration-300 font-medium group"
          >
            View All Projects
            <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;