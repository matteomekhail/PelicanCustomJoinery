import React from 'react';
import { Head } from '@inertiajs/react';
import ServicesComponent from '@/Components/Services';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import { Home, Building2, Building, Warehouse, ChevronRight, Clock, CheckCircle, Wrench } from 'lucide-react';

const Services = () => {
  return (
    <>
      <Head title="Services - Pelican Joinery" />
      <div className="min-h-screen">
        <Navbar />
        <div className="content-container">
          {/* Hero Section */}
          <section className="content-section bg-[#1B2B5B] text-white">
            <div className="flex items-center justify-center h-full">
              <div className="text-center max-w-4xl mx-auto px-4">
                <h1 className="text-5xl md:text-6xl font-serif mb-6">Our Services</h1>
                <p className="text-xl md:text-2xl text-gray-300">
                  Bespoke Joinery Solutions for Every Space
                </p>
              </div>
            </div>
          </section>

          {/* Main Services Section */}
          <section className="content-section">
            <div className="section-content">
              <ServicesComponent />
            </div>
          </section>

          {/* Service Categories */}
          <section className="content-section bg-gray-50">
            <div className="section-content">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-4xl font-serif text-[#1B2B5B] text-center mb-12">Our Expertise</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      icon: <Home className="w-12 h-12" />,
                      title: 'Residential',
                      items: ['Custom Kitchens', 'Built-in Wardrobes', 'Entertainment Units', 'Home Office']
                    },
                    {
                      icon: <Building2 className="w-12 h-12" />,
                      title: 'Commercial',
                      items: ['Office Fitouts', 'Reception Desks', 'Retail Displays', 'Restaurant Furniture']
                    },
                    {
                      icon: <Building className="w-12 h-12" />,
                      title: 'Multi-Residential',
                      items: ['Apartment Fitouts', 'Common Areas', 'Storage Solutions', 'Built-in Features']
                    },
                    {
                      icon: <Warehouse className="w-12 h-12" />,
                      title: 'Industrial',
                      items: ['Custom Workstations', 'Storage Systems', 'Display Units', 'Specialized Furniture']
                    }
                  ].map((category, index) => (
                    <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                      <div className="text-[#1B2B5B] mb-6">{category.icon}</div>
                      <h3 className="text-xl font-serif text-[#1B2B5B] mb-4">{category.title}</h3>
                      <ul className="space-y-2">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <ChevronRight className="w-4 h-4 mr-2 text-[#1B2B5B]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Process Overview */}
          <section className="content-section bg-white">
            <div className="section-content">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-4xl font-serif text-[#1B2B5B] text-center mb-12">Our Service Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <Clock className="w-16 h-16" />,
                      title: 'Initial Consultation',
                      description: 'We meet to discuss your needs, style preferences, and project requirements.'
                    },
                    {
                      icon: <CheckCircle className="w-16 h-16" />,
                      title: 'Design & Quote',
                      description: 'Our team creates detailed designs and provides a comprehensive quote.'
                    },
                    {
                      icon: <Wrench className="w-16 h-16" />,
                      title: 'Expert Execution',
                      description: 'Our skilled craftsmen bring your project to life with precision and care.'
                    }
                  ].map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="flex justify-center mb-6 text-[#1B2B5B]">{step.icon}</div>
                      <h3 className="text-xl font-serif text-[#1B2B5B] mb-4">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="content-section bg-[#1B2B5B]">
            <div className="section-content">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center text-white">
                <h2 className="text-4xl font-serif mb-6">Ready to Start Your Project?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let's create something extraordinary together. Contact us for a free consultation.
                </p>
                <button className="bg-white text-[#1B2B5B] px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Services; 