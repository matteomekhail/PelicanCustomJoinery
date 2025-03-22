import React, { useState } from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import { motion } from 'framer-motion';
import { Head, Link } from '@inertiajs/react';
import { Check, ArrowRight, Layers, Edit, Settings, Package } from 'lucide-react';
import AnchorLink from '@/Components/AnchorLink';

export default function Joinery() {
  // Add state for active process step
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
    'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/3b789467-67a8-440c-b6b1-95cd9b511e00/public',
    'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/4a03fbb4-9e3c-4cd0-d836-5047e61f0500/public',
    'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/f1deecc6-d26a-401a-54cd-cf406070ba00/public',
    'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/1ac9973e-2842-4065-0702-1cb7bc29fe00/public',
  ];

  // Features list
  const features = [
    'Custom built-ins that maximize your space',
    'Premium materials for lasting quality',
    'Architectural joinery that enhances your interiors',
    'Precise craftsmanship for perfect fit and finish',
    'Personalized designs that reflect your style',
    'Seamless integration with existing architectural elements',
  ];

  // Process steps with enhanced data
  const processSteps = [
    {
      title: 'Space Analysis',
      description: 'We assess your space, identify opportunities, and understand how you want to use your custom joinery.',
      details: 'During our initial consultation, we\'ll explore your requirements, measure your space, and discuss how the joinery will enhance your lifestyle. We\'ll consider aesthetic preferences, functional needs, and spatial constraints.',
      icon: <Layers className="w-6 h-6 text-white" />,
      color: 'bg-blue-500',
      image: 'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/4a03fbb4-9e3c-4cd0-d836-5047e61f0500/public'
    },
    {
      title: 'Detailed Design',
      description: 'Our designers create detailed plans that balance aesthetics, functionality, and architectural context.',
      details: 'We\'ll create concept drawings and 3D visualizations to help you see how the joinery will look in your space. We\'ll refine these designs based on your feedback until you\'re completely satisfied.',
      icon: <Edit className="w-6 h-6 text-white" />,
      color: 'bg-amber-500',
      image: 'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/bee5cb92-736b-4c22-1451-13692c43c300/public'
    },
    {
      title: 'Precise Crafting',
      description: 'Our master craftsmen build your joinery with precision, using the finest materials and techniques.',
      details: 'We select the highest quality materials for your project and use traditional craftsmanship combined with modern techniques to ensure a perfect result. Every piece is carefully constructed in our workshop.',
      icon: <Settings className="w-6 h-6 text-white" />,
      color: 'bg-emerald-500',
      image: 'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/ef4eb51b-8b50-4727-3097-be936e05f800/public'
    },
    {
      title: 'Expert Installation',
      description: 'Our installation team ensures your custom joinery fits perfectly and functions flawlessly.',
      details: 'Our experienced installers will carefully fit your joinery, ensuring it integrates perfectly with your space. We\'ll check every detail to make sure everything works as intended and that you\'re completely satisfied.',
      icon: <Package className="w-6 h-6 text-white" />,
      color: 'bg-purple-500',
      image: 'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/f1deecc6-d26a-401a-54cd-cf406070ba00/public'
    }
  ];

  return (
    <>
      <Head title="Interior Joinery | Pelican Custom Joinery" />
      <div className="min-h-screen">
        <Navbar />
        
        <div>
          {/* Hero Section */}
          <section className="relative pt-32 py-20 lg:py-28 overflow-hidden bg-[#f9f7f4]">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-80"></div>
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border border-secondary/10 opacity-30"></div>
            <div className="absolute bottom-10 left-20 w-96 h-96 rounded-full border border-primary/10 opacity-20"></div>
            
            <div className="container-custom relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="h-[1px] w-10 bg-secondary"></div>
                    <span className="text-secondary uppercase tracking-widest text-sm font-medium">
                      Bespoke Solutions
                    </span>
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-primary mb-6 leading-tight">
                    Interior <span className="text-secondary">Joinery</span><br />
                    Elevate Your Space
                  </h1>
                  
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Transform your interior spaces with custom joinery that combines functionality and aesthetics, designed specifically for your unique requirements.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/#contact" 
                      className="btn btn-secondary group flex items-center justify-center"
                    >
                      Request a Quote
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
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                    <img 
                      src="https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/4a03fbb4-9e3c-4cd0-d836-5047e61f0500/public" 
                      alt="Custom interior joinery by Pelican Custom Joinery" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Features Section */}
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
                  Our Interior Joinery Advantage
                </h2>
                <p className="text-lg text-gray-700">
                  Our custom joinery solutions elevate your interiors while providing practical storage and display options that enhance how you use your space.
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
                    className="bg-gray-50 rounded-xl p-6 flex items-start"
                  >
                    <div className="bg-secondary/10 p-2 rounded-full mr-4">
                      <Check className="w-5 h-5 text-secondary" />
                    </div>
                    <p className="text-gray-800">{feature}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
          
          {/* Process Section - Redesigned with interactive steps */}
          <section className="py-20 bg-[#f9f7f4]">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center mb-16"
              >
                <h2 className="text-3xl sm:text-4xl font-heading text-primary mb-6">
                  Our Joinery Design Process
                </h2>
                <p className="text-lg text-gray-700">
                  From initial concept to final installation, every step of our process is focused on creating perfectly tailored joinery for your space.
                </p>
              </motion.div>
              
              {/* Step selectors */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => setActiveProcessStep(index)}
                    className={`${
                      activeProcessStep === index 
                        ? 'border-2 border-secondary shadow-lg'
                        : 'border border-gray-200 hover:border-secondary/50'
                    } bg-white rounded-xl p-5 cursor-pointer transition-all duration-300 transform ${
                      activeProcessStep === index ? 'scale-105' : 'hover:scale-102'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`${step.color} w-10 h-10 rounded-full flex items-center justify-center shrink-0 mr-4`}>
                        {step.icon}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-primary bg-primary/10 text-sm font-medium px-2 py-1 rounded-full">
                            Step {index + 1}
                          </span>
                          {activeProcessStep === index && (
                            <span className="text-secondary text-xs font-medium">Active</span>
                          )}
                        </div>
                        <h3 className="text-lg font-heading text-primary mt-1">{step.title}</h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Active step content - Completamente ridisegnato per uniformità */}
              <motion.div
                key={activeProcessStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Colonna dell'immagine visibile per prima su mobile per migliore UX */}
                  <div className="lg:col-span-6 lg:order-last relative">
                    {/* Contenitore con rapporto di aspetto fisso 4:3 */}
                    <div className="relative w-full h-0 pt-[75%] bg-gray-100 lg:h-full lg:min-h-[400px] lg:pt-0 overflow-hidden">
                      {/* L'immagine stessa con effetto di transizione migliorato */}
                      <motion.img 
                        key={activeProcessStep}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                        src={processSteps[activeProcessStep].image} 
                        alt={processSteps[activeProcessStep].title} 
                        className="absolute inset-0 w-full h-full object-cover object-center"
                      />
                      
                      {/* Sottile overlay per migliorare la leggibilità e l'estetica */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent lg:bg-gradient-to-r lg:from-primary/10 lg:to-transparent pointer-events-none"></div>
                    </div>
                  </div>
                  
                  {/* Colonna del testo */}
                  <div className="lg:col-span-6 lg:order-first p-8 lg:p-10 flex flex-col justify-center">
                    <div className="inline-flex items-center space-x-2 mb-3">
                      <div className={`${processSteps[activeProcessStep].color} w-8 h-8 rounded-full flex items-center justify-center`}>
                        {processSteps[activeProcessStep].icon}
                      </div>
                      <span className="font-medium text-gray-600">Step {activeProcessStep + 1}</span>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-heading text-primary mb-4">
                      {processSteps[activeProcessStep].title}
                    </h3>
                    
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {processSteps[activeProcessStep].details}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mt-auto">
                      <Link 
                        href="/#contact" 
                        className="btn btn-secondary inline-flex items-center group"
                      >
                        Start Your Project
                        <ArrowRight className="ml-2 w-5 h-5 transition-all duration-300 group-hover:translate-x-1" />
                      </Link>
                      
                      <button 
                        onClick={() => setActiveProcessStep((activeProcessStep + 1) % processSteps.length)}
                        className="btn btn-white inline-flex items-center group"
                      >
                        Next Step
                        <ArrowRight className="ml-2 w-5 h-5 transition-all duration-300 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Navigation dots for mobile */}
              <div className="flex justify-center mt-8 space-x-2 lg:hidden">
                {processSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveProcessStep(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      activeProcessStep === index ? 'bg-secondary' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to step ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </section>
          
          {/* Gallery Section */}
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
                  Interior Joinery Portfolio
                </h2>
                <p className="text-lg text-gray-700">
                  Explore our recent interior joinery projects that have transformed homes and commercial spaces
                </p>
              </motion.div>
              
              {/* Layout migliorato con grid più compatto */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                {/* Immagine principale verticale (occupa 5 colonne) */}
                <div className="md:col-span-5">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-xl h-full"
                  >
                    <div className="aspect-[3/4] h-full"> {/* Formato verticale per la prima immagine */}
                      <img 
                        src={galleryImages[0]} 
                        alt="Interior joinery project 1" 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-6">
                          <h3 className="text-white text-xl font-heading">Built-in Wardrobes</h3>
                          <p className="text-white/80">Maximizing storage with style</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Layout a 4 celle per le immagini rimanenti (occupa 7 colonne) */}
                <div className="md:col-span-7">
                  <div className="grid grid-cols-2 gap-3 h-full">
                    {/* Prima riga - due immagini */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="relative overflow-hidden rounded-xl"
                    >
                      <div className="aspect-[4/3]"> {/* Formato orizzontale */}
                        <img 
                          src={galleryImages[1]} 
                          alt="Interior joinery project 2" 
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4">
                            <h3 className="text-white text-lg font-heading">Home Office</h3>
                            <p className="text-white/80 text-sm">Functional workspace</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="relative overflow-hidden rounded-xl"
                    >
                      <div className="aspect-[4/3]"> {/* Formato orizzontale */}
                        <img 
                          src={galleryImages[2]} 
                          alt="Interior joinery project 3" 
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4">
                            <h3 className="text-white text-lg font-heading">Custom Shelving</h3>
                            <p className="text-white/80 text-sm">Storage solutions</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Seconda riga - immagine panoramica che occupa l'intera larghezza */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="relative overflow-hidden rounded-xl col-span-2"
                    >
                      <div className="aspect-[16/9]"> {/* Formato panoramico */}
                        <img 
                          src={galleryImages[3]} 
                          alt="Interior joinery project 4" 
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-6">
                            <h3 className="text-white text-xl font-heading">Entertainment Unit</h3>
                            <p className="text-white/80">Complete media integration solution</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <AnchorLink
                  href="/#portfolio"
                  className="btn btn-secondary inline-flex items-center group"
                >
                  View Full Portfolio
                  <ArrowRight className="ml-2 w-5 h-5 transition-all duration-300 group-hover:translate-x-1" />
                </AnchorLink>
              </motion.div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="py-20 bg-primary">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center"
              >
                <h2 className="text-3xl sm:text-4xl font-heading text-white mb-6">
                  Ready to Transform Your Space?
                </h2>
                <p className="text-xl text-white/80 mb-10">
                  Contact us today to discuss your interior joinery needs and begin the journey to beautifully crafted spaces.
                </p>
                <Link
                  href="/#contact"
                  className="btn btn-secondary inline-flex items-center group"
                >
                  Get Started
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