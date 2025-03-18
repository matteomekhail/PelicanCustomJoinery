import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import PortfolioComponent from '@/Components/Portfolio';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import { Search, Filter, Star } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Residential', 'Commercial', 'Multi-Residential', 'Industrial'];

  const testimonials = [
    {
      name: 'Emma Thompson',
      role: 'Homeowner',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      content: 'The attention to detail and craftsmanship is outstanding. Our kitchen is now the heart of our home.',
      rating: 5
    },
    {
      name: 'David Chen',
      role: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      content: 'Professional service from start to finish. The office fitout exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      role: 'Interior Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
      content: 'A pleasure to work with. Their expertise and attention to detail make them my go-to joinery company.',
      rating: 5
    }
  ];

  return (
    <>
      <Head title="Portfolio - Pelican Joinery" />
      <div className="min-h-screen">
        <Navbar />
        <div className="content-container">
          {/* Hero Section */}
          <section className="content-section bg-[#1B2B5B] text-white">
            <div className="flex items-center justify-center h-full">
              <div className="text-center max-w-4xl mx-auto px-4">
                <h1 className="text-5xl md:text-6xl font-serif mb-6">Our Portfolio</h1>
                <p className="text-xl md:text-2xl text-gray-300">
                  Showcasing Excellence in Custom Joinery
                </p>
              </div>
            </div>
          </section>

          {/* Filter Section */}
          <section className="content-section bg-gray-50">
            <div className="section-content">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                  <h2 className="text-4xl font-serif text-[#1B2B5B] mb-6 md:mb-0">Featured Projects</h2>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search projects..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1B2B5B] focus:border-transparent"
                      />
                      <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Filter className="w-5 h-5 text-[#1B2B5B]" />
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1B2B5B] focus:border-transparent"
                      >
                        {categories.map((category) => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <PortfolioComponent />
              </div>
            </div>
          </section>

          {/* Featured Project */}
          <section className="content-section bg-white">
            <div className="section-content">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-4xl font-serif text-[#1B2B5B] text-center mb-12">Project Spotlight</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
                      alt="Featured Project"
                      className="rounded-lg shadow-xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl font-serif text-[#1B2B5B] mb-4">Luxury Home Renovation</h3>
                    <p className="text-gray-600 mb-6">
                      A complete home transformation featuring custom kitchen cabinetry, built-in wardrobes, 
                      and bespoke entertainment units. This project showcases our ability to blend 
                      functionality with elegant design.
                    </p>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start">
                        <span className="bg-[#1B2B5B] p-1 rounded-full text-white mr-3 mt-1">✓</span>
                        <span>Custom kitchen with premium materials</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-[#1B2B5B] p-1 rounded-full text-white mr-3 mt-1">✓</span>
                        <span>Integrated storage solutions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-[#1B2B5B] p-1 rounded-full text-white mr-3 mt-1">✓</span>
                        <span>Bespoke entertainment center</span>
                      </li>
                    </ul>
                    <button className="bg-[#1B2B5B] text-white px-6 py-3 rounded-md hover:bg-[#2a407c] transition-colors">
                      View Project Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="content-section bg-gray-50">
            <div className="section-content">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-4xl font-serif text-[#1B2B5B] text-center mb-12">Client Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                      <div className="flex items-center mb-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h3 className="font-serif text-[#1B2B5B]">{testimonial.name}</h3>
                          <p className="text-gray-600 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{testimonial.content}</p>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Portfolio; 