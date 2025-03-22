import React, { useState } from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import { motion } from 'framer-motion';
import { Head, Link } from '@inertiajs/react';
import { Check, ArrowRight, Building2, Ruler, Hammer, CopyCheck } from 'lucide-react';
import AnchorLink from '@/Components/AnchorLink';

export default function Commercial() {
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Gallery images
  const galleryImages = [
    'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/1ac9973e-2842-4065-0702-1cb7bc29fe00/public',
    'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/bee5cb92-736b-4c22-1451-13692c43c300/public',
    'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/c43a604b-f48b-418d-fe68-f7690ba02d00/public',
    'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/68a18a13-4bf9-4b78-e37a-268a9bb64000/public',
  ];

  // Process steps data with updated icons and better images
  const processSteps = [
    {
      title: "Consultation",
      details: "We discuss your business requirements, operational needs, brand identity, and timeline to understand your project fully.",
      icon: <Building2 className="h-6 w-6 text-white" />,
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: "Design & Planning",
      details: "Our design team develops detailed plans and specifications, working with your architects or designers as needed.",
      icon: <Ruler className="h-6 w-6 text-white" />,
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: "Production",
      details: "Our skilled craftsmen manufacture your commercial joinery with precision, using commercial-grade materials for durability.",
      icon: <Hammer className="h-6 w-6 text-white" />,
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: "Installation",
      details: "Our experienced installation team ensures minimal disruption to your business operations during the fitting process.",
      icon: <CopyCheck className="h-6 w-6 text-white" />,
      image: 'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  // Features list
  const features = [
    'Custom joinery solutions for retail, hospitality, and office spaces',
    'Commercial-grade materials for high-traffic environments',
    'Project management from concept to installation',
    'Adherence to commercial building codes and regulations',
    'Practical designs that optimize operational efficiency',
    'Premium finishes that enhance your brand identity',
  ];

  // Stats data
  const stats = [
    { number: "200+", label: "Commercial Projects" },
    { number: "25+", label: "Years Experience" },
    { number: "95%", label: "Client Retention" },
    { number: "12+", label: "Industry Awards" }
  ];

  return (
    <>
      <Head title="Commercial Projects | Pelican Custom Joinery" />
      <div className="min-h-screen">
        <Navbar />
        
        <div>
          {/* Hero Section - Modern diagonal split design */}
          <section className="relative pt-32 pb-16 lg:pb-0 bg-white overflow-hidden">
            <div className="absolute top-0 right-0 -z-10 w-full h-full">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-transparent opacity-50 z-10"></div>
              <div className="absolute top-0 right-0 bottom-0 w-[75%] lg:w-[55%] bg-[#f3f0eb] -skew-x-12 origin-top-right"></div>
            </div>
            
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center relative">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="lg:pr-12 pb-8 lg:pb-32 relative z-10"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="h-[2px] w-10 bg-secondary"></div>
                    <span className="text-secondary uppercase tracking-widest text-sm font-medium">
                      Business Solutions
                    </span>
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-primary mb-6 leading-tight">
                    Commercial <span className="text-secondary">Spaces</span><br />
                    Expertly Crafted
                  </h1>
                  
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-xl">
                    Elevate your business environment with custom joinery solutions that blend functionality, durability, and distinctive design to create memorable commercial spaces.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/#contact" 
                      className="btn btn-primary group flex items-center justify-center"
                    >
                      Request a Consultation
                      <ArrowRight className="ml-2 w-5 h-5 transition-all duration-300 group-hover:translate-x-1" />
                    </Link>
                    
                    <AnchorLink 
                      href="/#portfolio" 
                      className="btn btn-primary-outline flex items-center justify-center"
                    >
                      View Portfolio
                    </AnchorLink>
                  </div>
                </motion.div>
                
                <div className="lg:col-span-1 relative">
                  <motion.div
                    initial={{ opacity: 0, clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
                    animate={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 15% 100%)' }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-[55vw] overflow-hidden"
                  >
                    <div className="h-[400px] sm:h-[500px] lg:h-full w-full">
                      <img 
                        src={galleryImages[0]} 
                        alt="Commercial joinery project by Pelican Custom Joinery" 
                        className="h-full w-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Statistics Section */}
          <section className="py-16 bg-[#f9f7f4]">
            <div className="container-custom">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-4xl md:text-5xl font-heading text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600 uppercase tracking-wide">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Features Section - Card-based layout */}
          <section className="py-20 bg-white">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center mb-16"
              >
                <h2 className="text-3xl sm:text-4xl font-heading text-primary mb-6">
                  Commercial Excellence
                </h2>
                <p className="text-lg text-gray-700">
                  Our commercial joinery solutions combine functionality, durability, and aesthetics to create spaces that enhance your business operations and brand identity.
                </p>
              </motion.div>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-[#f9f7f4] rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-800 font-medium">{feature}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
          
          {/* Process Section - Full-width visual timeline */}
          <section className="py-24 bg-[#f3f0eb] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full border border-secondary"></div>
              <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full border border-primary"></div>
            </div>
            
            <div className="container-custom relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center mb-16"
              >
                <h2 className="text-3xl sm:text-4xl font-heading text-primary mb-6">
                  Our Commercial Process
                </h2>
                <p className="text-lg text-gray-700">
                  From initial consultation to final installation, our comprehensive process ensures your commercial project meets all requirements and exceeds expectations.
                </p>
              </motion.div>
              
              {/* Desktop Process Selection */}
              <div className="hidden md:grid grid-cols-4 gap-6 mb-12">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => setActiveProcessStep(index)}
                    className={`px-6 py-4 rounded-xl cursor-pointer transition-all duration-300 border-b-2 ${
                      activeProcessStep === index 
                        ? 'bg-white shadow-md border-secondary' 
                        : 'bg-white/50 hover:bg-white border-transparent'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        activeProcessStep === index ? 'bg-secondary' : 'bg-gray-200'
                      }`}>
                        <span className="text-white font-medium">{index + 1}</span>
                      </div>
                      <h3 className="font-heading text-lg text-primary">{step.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Mobile Process Steps */}
              <div className="flex md:hidden overflow-x-auto pb-4 mb-6 space-x-4 scrollbar-hide">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveProcessStep(index)}
                    className={`flex-shrink-0 px-5 py-3 rounded-full border ${
                      activeProcessStep === index 
                        ? 'bg-secondary text-white border-secondary' 
                        : 'bg-white text-gray-700 border-gray-300'
                    } cursor-pointer transition-all duration-300`}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{index + 1}</span>
                      <span>{step.title}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Active Step Content */}
              <motion.div
                key={activeProcessStep}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="order-2 md:order-1 p-8 md:p-12 flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-6">
                        {processSteps[activeProcessStep].icon}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-heading text-primary mb-4">
                        {processSteps[activeProcessStep].title}
                      </h3>
                      <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                        {processSteps[activeProcessStep].details}
                      </p>
                    </div>
                    
                    <div className="flex space-x-4 mt-auto">
                      <button
                        onClick={() => setActiveProcessStep(Math.max(0, activeProcessStep - 1))}
                        disabled={activeProcessStep === 0}
                        className={`px-4 py-2 rounded-lg border flex items-center ${
                          activeProcessStep === 0 
                            ? 'border-gray-200 text-gray-400 cursor-not-allowed' 
                            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Previous
                      </button>
                      
                      <button
                        onClick={() => setActiveProcessStep(Math.min(processSteps.length - 1, activeProcessStep + 1))}
                        disabled={activeProcessStep === processSteps.length - 1}
                        className={`px-4 py-2 rounded-lg border flex items-center ${
                          activeProcessStep === processSteps.length - 1 
                            ? 'border-gray-200 text-gray-400 cursor-not-allowed' 
                            : 'border-secondary bg-secondary text-white hover:bg-secondary/90'
                        }`}
                      >
                        Next
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className="order-1 md:order-2 h-64 md:h-auto bg-gray-100">
                    <div className="relative pt-[66.67%]"> {/* 3:2 aspect ratio */}
                      <img 
                        src={processSteps[activeProcessStep].image} 
                        alt={processSteps[activeProcessStep].title} 
                        className="absolute inset-0 w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
          
          {/* Testimonial Section - New addition */}
          <section className="py-24 bg-[#f3f0eb] relative overflow-hidden">
            <div className="absolute top-10 right-10 text-primary/5 text-[200px] font-serif">"</div>
            <div className="container-custom relative z-10 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-1 bg-secondary mx-auto mb-10"></div>
                <blockquote className="text-xl md:text-2xl text-gray-700 italic font-light mb-8 leading-relaxed">
                  "Pelican Custom Joinery transformed our retail space with exceptional craftsmanship and attention to detail. Their team understood our brand vision and delivered custom fixtures that perfectly showcase our products while enhancing the customer experience."
                </blockquote>
                <div className="font-heading text-primary text-lg">Sarah Johnson</div>
                <div className="text-gray-600">Director, Lumiere Boutique</div>
              </motion.div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="py-24 bg-primary">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center"
              >
                <h2 className="text-3xl sm:text-4xl font-heading text-white mb-6">
                  Elevate Your Business Environment
                </h2>
                <p className="text-xl text-white/80 mb-10 leading-relaxed">
                  Contact us today to discuss how our bespoke commercial joinery solutions can help your business create functional, beautiful spaces that leave a lasting impression.
                </p>
                <Link
                  href="/#contact"
                  className="btn btn-secondary inline-flex items-center group"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 transition-all duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </section>
        </div>
        
        <Footer />
      </div>
    </>
  );
} 