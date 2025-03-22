import React, { useState } from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import { motion } from 'framer-motion';
import { Head, Link } from '@inertiajs/react';
import { Check, ArrowRight, Search, Camera, Wrench, PaintBucket } from 'lucide-react';
import AnchorLink from '@/Components/AnchorLink';

export default function Restoration() {
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
    'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/ef4eb51b-8b50-4727-3097-be936e05f800/public',
    'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/0ce70f01-059f-464f-e4b6-9f03a9f1c400/public',
    'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/3396ce18-1bc8-4baf-eea0-ca012dc0cd00/public',
    'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/3b789467-67a8-440c-b6b1-95cd9b511e00/public',
  ];

  // Features list
  const features = [
    'Expert restoration of antique and heirloom furniture',
    'Meticulous attention to historical details and techniques',
    'Sympathetic repairs that preserve original character',
    'Careful matching of woods, finishes, and patinas',
    'Full structural repairs to ensure lasting durability',
    'Conservation-grade materials and processes',
  ];

  // Process steps with before-after data
  const processSteps = [
    {
      step: "Assessment",
      description: "We carefully evaluate each piece, identifying original materials, construction methods, and areas needing attention.",
      icon: <Search className="w-5 h-5 text-white" />,
      details: [
        "Thorough examination of the piece's history and provenance",
        "Identification of wood types and original construction techniques",
        "Assessment of damage, wear, and previous restoration attempts",
        "Structural integrity evaluation"
      ]
    },
    {
      step: "Documentation",
      description: "We document the current condition and develop a detailed restoration plan that respects the piece's history.",
      icon: <Camera className="w-5 h-5 text-white" />,
      details: [
        "Detailed photography of current condition",
        "Creation of restoration blueprint with historical references",
        "Recording of original finishes, hardware, and unique features",
        "Client consultation and agreement on restoration approach"
      ]
    },
    {
      step: "Restoration",
      description: "Our master craftsmen apply traditional techniques and appropriate materials to restore structural integrity and appearance.",
      icon: <Wrench className="w-5 h-5 text-white" />,
      details: [
        "Careful disassembly when necessary",
        "Repair of damaged components using period-appropriate techniques",
        "Replacement of missing elements with historically accurate materials",
        "Reconstruction of weakened joints and structural elements"
      ]
    },
    {
      step: "Finishing",
      description: "We apply historically accurate finishes that protect while enhancing the beauty and character of your antique piece.",
      icon: <PaintBucket className="w-5 h-5 text-white" />,
      details: [
        "Hand application of traditional finishes (shellac, wax, oil, etc.)",
        "Color matching to original or desired patina",
        "Multiple layering techniques for depth and protection",
        "Final buffing and detailing for an authentic appearance"
      ]
    }
  ];

  return (
    <>
      <Head title="Antique Restoration | Pelican Custom Joinery" />
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
                      Heritage Craft
                    </span>
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-primary mb-6 leading-tight">
                    Antique <span className="text-secondary">Restoration</span><br />
                    Preserving History
                  </h1>
                  
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Breathe new life into cherished wooden heirlooms and antique furniture with our expert restoration services that honor traditional craftsmanship.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/#contact" 
                      className="btn btn-secondary group flex items-center justify-center"
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
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                    <img 
                      src="https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/ef4eb51b-8b50-4727-3097-be936e05f800/public" 
                      alt="Antique furniture restoration by Pelican Custom Joinery" 
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
                  Our Restoration Expertise
                </h2>
                <p className="text-lg text-gray-700">
                  Our skilled restoration team combines traditional techniques with modern conservation practices to preserve and revitalize your cherished wooden pieces.
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
          
          {/* Process Section - Redesigned with interactive timeline */}
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
                  Our Restoration Process
                </h2>
                <p className="text-lg text-gray-700">
                  Each restoration project follows a careful process to preserve historical integrity while ensuring lasting quality.
                </p>
              </motion.div>
              
              {/* Process step buttons */}
              <div className="mb-12 flex flex-wrap justify-center gap-3">
                {processSteps.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveProcessStep(index)}
                    className={`px-5 py-3 rounded-full text-base font-medium transition-all duration-300 flex items-center ${
                      activeProcessStep === index
                        ? 'bg-secondary text-white shadow-md scale-105'
                        : 'bg-white border border-secondary/30 text-primary hover:bg-secondary/10'
                    }`}
                  >
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                      activeProcessStep === index 
                        ? 'bg-white/20' 
                        : 'bg-secondary/10'
                    }`}>
                      {index + 1}
                    </span>
                    {step.step}
                  </button>
                ))}
              </div>
              
              {/* Visual timeline */}
              <div className="relative mb-12 hidden md:block">
                {/* Horizontal timeline line */}
                <div className="absolute left-0 top-1/2 w-full h-[3px] bg-gray-200 z-0 transform -translate-y-1/2"></div>
                
                {/* Timeline steps */}
                <div className="relative z-10 flex justify-between items-center">
                  {processSteps.map((_, index) => {
                    // Determine active status
                    const isActive = index <= activeProcessStep;
                    const isCurrentlyActive = index === activeProcessStep;
                    
                    return (
                      <div key={index} className="flex flex-col items-center">
                        {/* Step dot */}
                        <div 
                          className={`w-6 h-6 rounded-full transition-all duration-500 ${
                            isActive ? 'bg-secondary' : 'bg-gray-300'
                          } ${isCurrentlyActive ? 'scale-150 shadow-md' : ''}`}
                          onClick={() => setActiveProcessStep(index)}
                        ></div>
                        
                        {/* Progress line - shown conditionally based on active state */}
                        {index < processSteps.length - 1 && (
                          <div className="absolute h-[3px] transition-all duration-500 bg-secondary"
                            style={{
                              left: `${(index) * (100 / (processSteps.length - 1))}%`,
                              width: isActive && index < activeProcessStep ? 
                                `${100 / (processSteps.length - 1)}%` : '0%'
                            }}
                          ></div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Active process step content */}
              <motion.div
                key={activeProcessStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="flex items-start gap-6 mb-8">
                    {/* Large icon */}
                    <div className="bg-secondary rounded-xl p-5 hidden sm:block">
                      <div className="w-14 h-14 flex items-center justify-center">
                        {React.cloneElement(processSteps[activeProcessStep].icon, {
                          className: "w-10 h-10 text-white"
                        })}
                      </div>
                    </div>
                    
                    {/* Step title and description */}
                    <div>
                      <div className="flex items-center sm:items-start">
                        <div className="bg-secondary rounded-lg p-2 sm:hidden mr-3">
                          {processSteps[activeProcessStep].icon}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-heading text-primary">
                          {activeProcessStep + 1}. {processSteps[activeProcessStep].step}
                        </h3>
                      </div>
                      <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                        {processSteps[activeProcessStep].description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Detailed process info */}
                  <div className="border-t border-gray-100 pt-6">
                    <h4 className="text-lg font-medium text-primary mb-4">Key Components:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {processSteps[activeProcessStep].details.map((detail, idx) => (
                        <div key={idx} className="flex items-start bg-gray-50 p-4 rounded-lg">
                          <div className="mr-3 mt-1">
                            <Check className="w-5 h-5 text-secondary" />
                          </div>
                          <p className="text-gray-800">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Illustrated timeline step visual (decorative) */}
                  <div className="border-t border-gray-100 mt-8 pt-8 text-center">
                    <div className="inline-block relative">
                      <div className={`text-5xl md:text-7xl font-bold text-primary/5`}>
                        STEP {activeProcessStep + 1}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-secondary/10 rounded-lg p-3">
                          {React.cloneElement(processSteps[activeProcessStep].icon, {
                            className: "w-8 h-8 text-secondary"
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Navigation buttons */}
                <div className="flex justify-center gap-4 mt-8">
                  <button 
                    onClick={() => setActiveProcessStep((activeProcessStep - 1 + processSteps.length) % processSteps.length)}
                    className="px-5 py-2.5 flex items-center text-primary hover:text-secondary border border-primary/20 rounded-full hover:border-secondary/30 transition-colors duration-300"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                    Previous Step
                  </button>
                  
                  <button 
                    onClick={() => setActiveProcessStep((activeProcessStep + 1) % processSteps.length)}
                    className="px-5 py-2.5 flex items-center text-primary hover:text-secondary border border-primary/20 rounded-full hover:border-secondary/30 transition-colors duration-300"
                  >
                    Next Step
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </motion.div>
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
                  Restoration Portfolio
                </h2>
                <p className="text-lg text-gray-700">
                  Explore our recent restoration projects that have given new life to treasured pieces
                </p>
              </motion.div>
              
              {/* Layout migliorato della galleria */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Prima riga: 1 immagine grande (6 colonne) e 2 immagini più piccole in colonna (6 colonne) */}
                <div className="md:col-span-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-xl h-full"
                  >
                    <div className="aspect-square"> {/* Aspetto quadrato per l'immagine principale */}
                      <img 
                        src={galleryImages[0]} 
                        alt="Restoration project 1" 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-6">
                          <h3 className="text-white text-xl font-heading">Antique Dresser</h3>
                          <p className="text-white/80">Complete restoration of 19th century piece</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                <div className="md:col-span-6 grid grid-cols-1 gap-6">
                  <div className="grid grid-cols-2 gap-6">
                    {galleryImages.slice(1, 3).map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-xl"
                      >
                        <div className="aspect-[4/3]">
                          <img 
                            src={image} 
                            alt={`Restoration project ${index + 2}`} 
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="p-6">
                              <h3 className="text-white text-xl font-heading">
                                {index === 0 ? "Vintage Cabinet" : "Colonial Table"}
                              </h3>
                              <p className="text-white/80">
                                {index === 0 ? "Surface repair" : "Complete refinishing"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Immagine larga in basso a destra */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-xl"
                  >
                    <div className="aspect-[21/9]">
                      <img 
                        src={galleryImages[3]} 
                        alt="Restoration project 4" 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-6">
                          <h3 className="text-white text-xl font-heading">Heritage Collection</h3>
                          <p className="text-white/80">Full service restoration expertise</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
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
                  Breathe New Life Into Your Antiques
                </h2>
                <p className="text-xl text-white/80 mb-10">
                  Contact us today to discuss how we can help preserve and revitalize your valuable wooden heirlooms.
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