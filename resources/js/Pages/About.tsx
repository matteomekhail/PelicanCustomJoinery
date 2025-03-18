import React from 'react';
import { Head } from '@inertiajs/react';
import AboutComponent from '@/Components/About';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import { Award, Users, Clock, Wrench, Star } from 'lucide-react';

const About = () => {
  return (
    <>
      <Head title="About - Pelican Joinery" />
      <div className="min-h-screen">
        <Navbar />
        <div className="content-container">
          {/* Hero Section */}
          <section className="content-section bg-[#1B2B5B] text-white">
            <div className="flex items-center justify-center h-full">
              <div className="text-center max-w-4xl mx-auto px-4">
                <h1 className="text-5xl md:text-6xl font-serif mb-6">Our Story</h1>
                <p className="text-xl md:text-2xl text-gray-300">
                  Crafting Excellence in Custom Joinery Since 1988
                </p>
              </div>
            </div>
          </section>

          {/* Main About Section */}
          <section className="content-section">
            <div className="section-content">
              <AboutComponent />
            </div>
          </section>

          {/* Team Section */}
          <section className="content-section bg-white">
            <div className="section-content">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-4xl font-serif text-[#1B2B5B] text-center mb-12">Our Expert Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      name: 'John Smith',
                      role: 'Master Craftsman',
                      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
                      experience: '25+ years experience'
                    },
                    {
                      name: 'Sarah Johnson',
                      role: 'Design Director',
                      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
                      experience: '15+ years experience'
                    },
                    {
                      name: 'Michael Brown',
                      role: 'Project Manager',
                      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
                      experience: '20+ years experience'
                    }
                  ].map((member, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                      <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                      <div className="p-6">
                        <h3 className="text-xl font-serif text-[#1B2B5B] mb-2">{member.name}</h3>
                        <p className="text-gray-600 mb-2">{member.role}</p>
                        <p className="text-sm text-gray-500">{member.experience}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="content-section bg-[#1B2B5B]">
            <div className="section-content">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
                  {[
                    { icon: <Clock className="w-8 h-8" />, number: '35+', label: 'Years Experience' },
                    { icon: <Users className="w-8 h-8" />, number: '1000+', label: 'Happy Clients' },
                    { icon: <Wrench className="w-8 h-8" />, number: '2500+', label: 'Projects Completed' },
                    { icon: <Star className="w-8 h-8" />, number: '50+', label: 'Industry Awards' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="flex justify-center mb-4">{stat.icon}</div>
                      <div className="text-4xl font-serif mb-2">{stat.number}</div>
                      <div className="text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="content-section bg-gray-50">
            <div className="section-content">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-4xl font-serif text-[#1B2B5B] text-center mb-12">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <Award className="w-12 h-12 text-[#1B2B5B]" />,
                      title: 'Excellence',
                      description: 'We strive for perfection in every piece we create, ensuring the highest quality craftsmanship.'
                    },
                    {
                      icon: <Users className="w-12 h-12 text-[#1B2B5B]" />,
                      title: 'Collaboration',
                      description: 'Working closely with our clients to bring their vision to life through expert craftsmanship.'
                    },
                    {
                      icon: <Wrench className="w-12 h-12 text-[#1B2B5B]" />,
                      title: 'Innovation',
                      description: 'Combining traditional techniques with modern technology to create unique solutions.'
                    }
                  ].map((value, index) => (
                    <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                      <div className="flex justify-center mb-6">{value.icon}</div>
                      <h3 className="text-xl font-serif text-[#1B2B5B] mb-4">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
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

export default About; 