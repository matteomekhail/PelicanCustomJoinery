import React, { useState } from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import { motion } from 'framer-motion';
import { Head, Link } from '@inertiajs/react';
import { Check, ArrowRight } from 'lucide-react';

export default function Furniture() {
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
    'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/ef4eb51b-8b50-4727-3097-be936e05f800/public',
    'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/0ce70f01-059f-464f-e4b6-9f03a9f1c400/public',
    'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/9cc57e06-d2c4-4b91-b14c-f57bfae8c700/public',
  ];

  // Features list
  const features = [
    'Bespoke designs tailored to your exact specifications',
    'Premium hardwoods and sustainable timber options',
    'Expert craftsmanship with meticulous attention to detail',
    'Seamless integration with your existing space',
    'Timeless styles that enhance your interiors',
    'Durable construction for long-lasting quality',
  ];

  // Process steps data
  const processSteps = [
    {
      step: "Consultation",
      description: "We begin by understanding your needs, preferences, and the space where your furniture will live. Our designers will discuss materials, dimensions, functionality, and aesthetics.",
      image: "https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/9cc57e06-d2c4-4b91-b14c-f57bfae8c700/public"
    },
    {
      step: "Design",
      description: "Our designers create detailed plans tailored to your requirements, with 3D visualizations to bring it to life. We refine the design with your feedback until it's perfect.",
      image: "https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/bee5cb92-736b-4c22-1451-13692c43c300/public"
    },
    {
      step: "Crafting",
      description: "Master craftsmen carefully select materials and use precision techniques to build your custom piece. Every joint, curve, and detail is executed with meticulous care.",
      image: "https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/ef4eb51b-8b50-4727-3097-be936e05f800/public"
    },
    {
      step: "Installation",
      description: "We handle delivery and professional installation to ensure your furniture fits perfectly in your space. Our team will make sure every detail is attended to.",
      image: "https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/f1deecc6-d26a-401a-54cd-cf406070ba00/public"
    }
  ];

  return (
    <>
      <Head title="Custom Furniture | Pelican Custom Joinery" />
      <div className="min-h-screen">
        <Navbar />
        
        <div>
          {/* Hero Section - Changed to full-width design with dark background */}
          <section className="relative pt-32 pb-20 lg:pb-28 overflow-hidden bg-primary text-white">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full border border-secondary/20 opacity-10 translate-x-1/2 -translate-y-1/4"></div>
            <div className="absolute bottom-10 left-20 w-72 h-72 rounded-full border border-secondary/20 opacity-10"></div>
            
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
                      Handcrafted Excellence
                    </span>
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-white mb-6 leading-tight">
                    Bespoke <span className="text-secondary">Furniture</span><br />
                    Artistry in Wood
                  </h1>
                  
                  <p className="text-lg text-white/80 mb-8 leading-relaxed">
                    From statement dining tables to elegant shelving units, our custom furniture pieces are meticulously designed and crafted to complement your space and enhance your lifestyle.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/#contact" 
                      className="btn btn-secondary group flex items-center justify-center"
                    >
                      Request a Quote
                      <ArrowRight className="ml-2 w-5 h-5 transition-all duration-300 group-hover:translate-x-1" />
                    </Link>
                    
                    <Link 
                      href="/#portfolio" 
                      className="btn btn-white-outline flex items-center justify-center border-white/60 text-white hover:bg-white/10"
                    >
                      View Portfolio
                    </Link>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl border-2 border-secondary/20">
                    <img 
                      src="https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/f1deecc6-d26a-401a-54cd-cf406070ba00/public" 
                      alt="Custom furniture crafted by Pelican Custom Joinery" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Quote banner - New section */}
          <section className="py-12 bg-secondary/10">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center">
                <blockquote className="text-xl md:text-2xl italic text-primary">
                  "Every piece of furniture tells a story. At Pelican, we craft that story with precision, passion, and purpose."
                </blockquote>
                <p className="mt-4 text-gray-700 font-medium">— Michael Pelican, Master Craftsman</p>
              </div>
            </div>
          </section>
          
          {/* Features Section - changed to alternating layout */}
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
                  What Makes Our Furniture Special
                </h2>
                <p className="text-lg text-gray-700">
                  When you choose Pelican Custom Joinery for your furniture needs, you're investing in pieces that combine artistry and functionality to create lasting heirlooms.
                </p>
              </motion.div>
              
              <div className="space-y-16">
                {[
                  {
                    title: "Bespoke Design",
                    description: "Every piece is uniquely designed to your specifications, ensuring a perfect fit for your space and lifestyle.",
                    features: ["Custom dimensions", "Personalized aesthetics", "Functional adaptations"],
                    image: "https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/3b789467-67a8-440c-b6b1-95cd9b511e00/public",
                  },
                  {
                    title: "Premium Materials",
                    description: "We source the finest woods and materials, from sustainable local timber to exotic imported hardwoods.",
                    features: ["Ethically sourced timber", "High-grade hardware", "Premium finishes"],
                    image: "https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/ef4eb51b-8b50-4727-3097-be936e05f800/public",
                    reverse: true
                  },
                  {
                    title: "Master Craftsmanship",
                    description: "Our experienced artisans blend traditional techniques with modern precision for exceptional quality.",
                    features: ["Hand-selected components", "Precision joinery techniques", "Meticulous finishing"],
                    image: "https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/0ce70f01-059f-464f-e4b6-9f03a9f1c400/public",
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${item.reverse ? 'lg:flex-row-reverse' : ''}`}
                  >
                    <div className={`order-2 ${item.reverse ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className={`order-1 ${item.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
                      <h3 className="text-2xl sm:text-3xl font-heading text-primary mb-4">{item.title}</h3>
                      <p className="text-lg text-gray-700 mb-6">{item.description}</p>
                      <ul className="space-y-3">
                        {item.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <div className="mr-3 mt-1">
                              <Check className="w-5 h-5 text-secondary" />
                            </div>
                            <span className="text-gray-800">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Process Section - Redesigned with timeline style and interactive steps */}
          <section className="py-20 bg-[#f8f7f5]">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center mb-16"
              >
                <h2 className="text-3xl sm:text-4xl font-heading text-primary mb-6">
                  Our Creation Process
                </h2>
                <p className="text-lg text-gray-700">
                  From concept to completion, our meticulous process ensures your custom furniture perfectly matches your vision.
                </p>
              </motion.div>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[15px] lg:left-1/2 transform lg:-translate-x-1/2 top-0 h-full w-[2px] bg-secondary/20"></div>
                
                <div className="space-y-12 lg:space-y-24">
                  {processSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.7 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      {/* Timeline dot - now clickable */}
                      <div 
                        className={`absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 top-0 w-8 h-8 rounded-full ${
                          activeProcessStep === index 
                            ? 'bg-secondary text-white' 
                            : 'bg-white border-2 border-secondary'
                        } flex items-center justify-center z-10 cursor-pointer transition-colors duration-300`}
                        onClick={() => setActiveProcessStep(index)}
                      >
                        <span className={`${activeProcessStep === index ? 'text-white' : 'text-primary'} font-bold`}>{index + 1}</span>
                      </div>
                      
                      {/* Only show the active step content */}
                      {activeProcessStep === index && (
                        <div className={`pl-12 lg:pl-0 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                          <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                            <h3 className="text-2xl font-heading text-primary mb-3">{step.step}</h3>
                            <p className="text-gray-700">{step.description}</p>
                          </div>
                          
                          <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-first'}`}>
                            <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                              <img 
                                src={step.image} 
                                alt={`${step.step} step`} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Step selectors for mobile - added for better mobile UX */}
              <div className="mt-12 flex flex-wrap justify-center gap-3 lg:hidden">
                {processSteps.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveProcessStep(index)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeProcessStep === index
                        ? 'bg-secondary text-white'
                        : 'bg-white border border-secondary/50 text-primary hover:bg-secondary/10'
                    }`}
                  >
                    {index + 1}. {step.step}
                  </button>
                ))}
              </div>
            </div>
          </section>
          
          {/* Gallery Section - Redesigned with masonry layout */}
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
                  Our Recent Work
                </h2>
                <p className="text-lg text-gray-700">
                  Browse through our gallery of recently completed custom furniture projects
                </p>
              </motion.div>
              
              {/* Nuovo layout della galleria - Modificato per eliminare spazi vuoti */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Featured large image (ora occupa 7 colonne su 12 per riempire meglio) */}
                <div className="md:col-span-7">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="w-full h-full overflow-hidden rounded-xl"
                  >
                    <div className="w-full h-0 pb-[100%] relative"> {/* cambiato da 56.25% a 100% per un aspetto più quadrato */}
                      <div className="absolute inset-0">
                        <img 
                          src="https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/3b789467-67a8-440c-b6b1-95cd9b511e00/public" 
                          alt="Featured furniture project" 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-6">
                            <h3 className="text-white text-2xl font-heading">Signature Collection</h3>
                            <p className="text-white/80">Custom Dining Table</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Due immagini a destra (occupa 5 colonne su 12) */}
                <div className="md:col-span-5 grid grid-cols-1 gap-6">
                  {[
                    {
                      image: "https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/ef4eb51b-8b50-4727-3097-be936e05f800/public",
                      title: "Modern Console"
                    },
                    {
                      image: "https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/0ce70f01-059f-464f-e4b6-9f03a9f1c400/public",
                      title: "Bookcase System"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="w-full overflow-hidden rounded-xl"
                    >
                      <div className="w-full h-0 pb-[75%] relative"> {/* leggermente più basso per adattarsi meglio */}
                        <div className="absolute inset-0">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="p-6">
                              <h3 className="text-white text-xl font-heading">{item.title}</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Immagine grande in basso (occupa tutta la larghezza) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="md:col-span-12 w-full overflow-hidden rounded-xl"
                >
                  <div className="w-full h-0 pb-[40%] relative"> {/* aumentato da 33.33% a 40% per un aspetto migliore */}
                    <div className="absolute inset-0">
                      <img 
                        src="https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/1ac9973e-2842-4065-0702-1cb7bc29fe00/public" 
                        alt="Large furniture showcase" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-6">
                          <h3 className="text-white text-2xl font-heading">Complete Home Collection</h3>
                          <p className="text-white/80">Coordinated furniture set for modern living</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <Link
                  href="/#portfolio"
                  className="btn btn-secondary inline-flex items-center group"
                >
                  View Full Portfolio
                  <ArrowRight className="ml-2 w-5 h-5 transition-all duration-300 group-hover:translate-x-1" />
                </Link>
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
                  Ready to Transform Your Space with Custom Furniture?
                </h2>
                <p className="text-xl text-white/80 mb-10">
                  Contact us today to schedule a consultation and begin your journey to exceptional custom furniture.
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