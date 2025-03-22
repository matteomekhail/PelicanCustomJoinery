import React, { useState } from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import { motion } from 'framer-motion';
import { Head, Link } from '@inertiajs/react';
import { Check, ArrowRight, Phone } from 'lucide-react';

export default function Kitchens() {
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

  // State per tenere traccia della tab attiva nel processo
  const [activeProcessStep, setActiveProcessStep] = useState(0);

  // Dati per i passi del processo
  const processSteps = [
    {
      title: "Initial Consultation",
      description: "We begin with a thorough assessment of your space, understanding your cooking habits, entertaining needs, and aesthetic preferences. Our designers will discuss your vision, budget, and timeline.",
      checkItems: [
        "On-site measurements and evaluation",
        "Discussion of your needs and desires",
        "Exploration of design possibilities",
        "Initial budget considerations"
      ],
      image: "https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/bee5cb92-736b-4c22-1451-13692c43c300/public"
    },
    {
      title: "Design Planning",
      description: "Our designers create detailed 3D renderings and plans for your kitchen based on your requirements. We focus on both aesthetics and functionality, ensuring your kitchen will be both beautiful and practical.",
      checkItems: [
        "3D design visualization",
        "Material and finish selection",
        "Detailed technical drawings",
        "Quote and contract finalization"
      ],
      image: "https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/c43a604b-f48b-418d-fe68-f7690ba02d00/public"
    },
    {
      title: "Construction",
      description: "Our master craftsmen build your custom cabinetry and elements, with meticulous attention to detail. All components are created in our workshop to ensure the highest quality standards.",
      checkItems: [
        "Precision manufacturing",
        "Quality control checks",
        "Hardware integration",
        "Pre-assembly and testing"
      ],
      image: "https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/9cc57e06-d2c4-4b91-b14c-f57bfae8c700/public"
    },
    {
      title: "Installation",
      description: "Our professional team ensures your kitchen is perfectly fitted and functional. We coordinate with other trades if needed and ensure a seamless installation process.",
      checkItems: [
        "Site preparation",
        "Professional installation team",
        "Final adjustments and testing",
        "Client walkthrough and approval"
      ],
      image: "https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/1ac9973e-2842-4065-0702-1cb7bc29fe00/public"
    }
  ];

  // Gallery images
  const galleryImages = [
    'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/c43a604b-f48b-418d-fe68-f7690ba02d00/public',
    'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/9cc57e06-d2c4-4b91-b14c-f57bfae8c700/public',
    'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/bee5cb92-736b-4c22-1451-13692c43c300/public',
    'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/1ac9973e-2842-4065-0702-1cb7bc29fe00/public',
  ];

  // Features list
  const features = [
    'Custom cabinetry tailored to your kitchen layout',
    'Premium materials for durability and aesthetic appeal',
    'Innovative storage solutions to maximize space',
    'Seamless integration with modern appliances',
    'Ergonomic designs for improved functionality',
    'Exceptional craftsmanship for long-lasting quality',
  ];

  return (
    <>
      <Head title="Bespoke Kitchens | Pelican Custom Joinery" />
      <div className="min-h-screen">
        <Navbar />
        
        <div>
          {/* Hero Section - Split design with angled divider */}
          <section className="relative pt-32 pb-0 bg-white overflow-hidden">
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 relative">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="pb-16 lg:pb-32 lg:pr-16 relative z-10"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="h-[2px] w-10 bg-secondary"></div>
                    <span className="text-secondary uppercase tracking-widest text-sm font-medium">
                      Kitchen Design
                    </span>
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-primary mb-6 leading-tight">
                    The Heart of <br/><span className="text-secondary">Your Home</span>
                  </h1>
                  
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-xl">
                    Transform your kitchen into a stunning, functional space that reflects your unique style and meets your family's needs with our bespoke kitchen solutions.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/#contact" 
                      className="btn btn-primary group flex items-center justify-center"
                    >
                      Request a Quote
                      <ArrowRight className="ml-2 w-5 h-5 transition-all duration-300 group-hover:translate-x-1" />
                    </Link>
                    
                    <Link 
                      href="/#portfolio" 
                      className="btn btn-primary-outline flex items-center justify-center"
                    >
                      View Portfolio
                    </Link>
                  </div>
                </motion.div>
                
                <div className="hidden lg:block"></div>
                
                <motion.div
                  initial={{ opacity: 0, clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
                  animate={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 15% 100%)' }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative h-[400px] sm:h-[500px] lg:h-auto lg:absolute lg:top-0 lg:right-0 lg:w-[55%] bg-secondary/10"
                >
                  <img 
                    src="https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/bee5cb92-736b-4c22-1451-13692c43c300/public" 
                    alt="Luxury kitchen designed by Pelican Custom Joinery" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/20 to-transparent"></div>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Statistics Section - New section */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { number: "35+", label: "Years Experience" },
                  { number: "450+", label: "Kitchens Completed" },
                  { number: "97%", label: "Client Satisfaction" },
                  { number: "15+", label: "Design Awards" }
                ].map((stat, index) => (
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
                  Exceptional Kitchen Design
                </h2>
                <p className="text-lg text-gray-700">
                  Our kitchens combine stunning aesthetics with practical functionality, created specifically for your space and lifestyle needs.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Custom Cabinetry",
                    description: "Precision-crafted cabinets that maximize storage and complement your space.",
                    icon: "https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/9cc57e06-d2c4-4b91-b14c-f57bfae8c700/public"
                  },
                  {
                    title: "Premium Materials",
                    description: "High-quality materials selected for both durability and aesthetic appeal.",
                    icon: "https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/3b789467-67a8-440c-b6b1-95cd9b511e00/public"
                  },
                  {
                    title: "Innovative Storage",
                    description: "Clever solutions that maximize every inch of space in your kitchen.",
                    icon: "https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/c43a604b-f48b-418d-fe68-f7690ba02d00/public"
                  },
                  {
                    title: "Integrated Appliances",
                    description: "Seamless integration of modern appliances for a streamlined look.",
                    icon: "https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/1ac9973e-2842-4065-0702-1cb7bc29fe00/public"
                  },
                  {
                    title: "Functional Design",
                    description: "Ergonomic layouts that make cooking and entertaining a pleasure.",
                    icon: "https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/bee5cb92-736b-4c22-1451-13692c43c300/public"
                  },
                  {
                    title: "Expert Craftsmanship",
                    description: "Meticulous attention to detail for a flawless finish that stands the test of time.",
                    icon: "https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/ef4eb51b-8b50-4727-3097-be936e05f800/public"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={feature.icon} 
                        alt={feature.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-heading text-primary mb-3">{feature.title}</h3>
                      <p className="text-gray-700">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Process Section - Tabbed content */}
          <section className="py-20 bg-secondary/5">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center mb-16"
              >
                <h2 className="text-3xl sm:text-4xl font-heading text-primary mb-6">
                  Our Kitchen Design Process
                </h2>
                <p className="text-lg text-gray-700">
                  From initial concept to final installation, we guide you through every step of creating your dream kitchen.
                </p>
              </motion.div>
              
              <div className="max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap"
                >
                  {/* Process images */}
                  <div className="w-full lg:w-1/2 relative">
                    <div className="aspect-[3/4] overflow-hidden rounded-l-xl">
                      <div className="relative h-full">
                        {processSteps.map((step, index) => (
                          <img 
                            key={index}
                            src={step.image}
                            alt={`Kitchen design process step ${index + 1}`}
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                            style={{ opacity: index === activeProcessStep ? 1 : 0 }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Process descriptions */}
                  <div className="w-full lg:w-1/2 bg-white shadow-md rounded-r-xl">
                    <div className="border-b border-gray-200">
                      <div className="grid grid-cols-4">
                        {['Consultation', 'Planning', 'Construction', 'Installation'].map((step, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveProcessStep(index)}
                            className={`py-4 text-center text-sm font-medium transition-colors duration-200 ${
                              index === activeProcessStep ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-primary'
                            }`}
                          >
                            {index + 1}. {step}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <div>
                        <h3 className="text-2xl font-heading text-primary mb-4">{processSteps[activeProcessStep].title}</h3>
                        <p className="text-gray-700 mb-6">
                          {processSteps[activeProcessStep].description}
                        </p>
                        <ul className="space-y-3">
                          {processSteps[activeProcessStep].checkItems.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <div className="mt-1 mr-3">
                                <Check className="w-5 h-5 text-secondary" />
                              </div>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Gallery Section - Inspiration gallery */}
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
                  Kitchen Gallery
                </h2>
                <p className="text-lg text-gray-700">
                  Browse our portfolio of stunning kitchen transformations to inspire your own project
                </p>
              </motion.div>
              
              {/* Layout galleria ottimizzato - Struttura 7/5/12 */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Immagine principale a sinistra */}
                <div className="md:col-span-7">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-xl h-full"
                  >
                    <div className="aspect-square">
                      <img 
                        src="https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/c43a604b-f48b-418d-fe68-f7690ba02d00/public" 
                        alt="Modern kitchen design" 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-6">
                          <h3 className="text-white text-xl font-heading">Contemporary Kitchen</h3>
                          <p className="text-white/80">Open concept with island feature</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Due immagini a destra in colonna */}
                <div className="md:col-span-5 grid grid-cols-1 gap-6">
                  {[
                    { 
                      image: "https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/9cc57e06-d2c4-4b91-b14c-f57bfae8c700/public",
                      title: "Elegant Cabinetry",
                      desc: "Custom storage solutions"
                    },
                    { 
                      image: "https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/bee5cb92-736b-4c22-1451-13692c43c300/public",
                      title: "Modern Galley",
                      desc: "Efficient workspace design"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="relative overflow-hidden rounded-xl"
                    >
                      <div className="aspect-[4/3]">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-6">
                            <h3 className="text-white text-xl font-heading">{item.title}</h3>
                            <p className="text-white/80">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Immagine panoramica in basso */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="md:col-span-12 relative overflow-hidden rounded-xl"
                >
                  <div className="aspect-[21/9]">
                    <img 
                      src="https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/1ac9973e-2842-4065-0702-1cb7bc29fe00/public" 
                      alt="Luxury kitchen design" 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6">
                        <h3 className="text-white text-xl font-heading">Premium Kitchen Suite</h3>
                        <p className="text-white/80">Comprehensive kitchen design with integrated dining space</p>
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
                  className="btn btn-primary inline-flex items-center group"
                >
                  View Full Portfolio
                  <ArrowRight className="ml-2 w-5 h-5 transition-all duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </section>
          
          {/* Testimonials Section - New section */}
          <section className="py-20 bg-primary/5">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center mb-16"
              >
                <h2 className="text-3xl sm:text-4xl font-heading text-primary mb-6">
                  What Our Clients Say
                </h2>
                <p className="text-lg text-gray-700">
                  Don't just take our word for it - hear from our satisfied clients
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    quote: "Pelican completely transformed our kitchen. The attention to detail and quality of craftsmanship exceeded our expectations.",
                    author: "Rebecca T.",
                    location: "Brighton"
                  },
                  {
                    quote: "From design to installation, the team was professional and responsive. Our new kitchen is both beautiful and functional.",
                    author: "Michael S.",
                    location: "Toorak"
                  },
                  {
                    quote: "We couldn't be happier with our kitchen renovation. The custom storage solutions have made such a difference in our daily life.",
                    author: "Sarah & David",
                    location: "Albert Park"
                  }
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-xl shadow-sm relative"
                  >
                    <div className="text-5xl text-secondary/20 absolute top-4 left-4">"</div>
                    <div className="relative z-10">
                      <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-primary">{testimonial.author}</p>
                          <p className="text-sm text-gray-500">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center"
              >
                <h2 className="text-3xl sm:text-4xl font-heading text-white mb-6">
                  Ready to Create Your Dream Kitchen?
                </h2>
                <p className="text-xl text-white/80 mb-10">
                  Contact us today to schedule a kitchen consultation and begin your transformation.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    href="/#contact"
                    className="btn bg-white text-primary hover:bg-secondary hover:text-white inline-flex items-center group"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5 transition-all duration-300 group-hover:translate-x-1" />
                  </Link>
                  
                  <Link
                    href="tel:+61391234567"
                    className="btn btn-outline-white inline-flex items-center group"
                  >
                    Call Us
                    <Phone className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
        
        <Footer />
      </div>
    </>
  );
} 