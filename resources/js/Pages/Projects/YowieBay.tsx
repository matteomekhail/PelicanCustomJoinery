import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Grid, ChevronRight } from 'lucide-react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import { Link } from '@inertiajs/react';

// Helper function to add Cloudflare Image optimization parameters
const optimizeImage = (imageUrl: string, variant: string = 'public') => {
  if (!imageUrl || !imageUrl.includes('imagedelivery.net')) return imageUrl;
  
  // Cloudflare Images uses variants that need to be set up in the Cloudflare dashboard
  // We should use the pre-configured variants rather than try to add parameters directly
  
  if (variant === 'public') {
    // Return original URL if no variant specified
    return imageUrl;
  }
  
  // Replace the variant part of the URL (usually 'public') with the requested variant
  return imageUrl.replace(/\/[^\/]+$/, `/${variant}`);
};

const YowieBayProject = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  
  const projectDetails = {
    title: '16 Sherwood Avenue, Yowie Bay',
    completionDate: 'December 2023',
    category: 'Residential',
    description: 'Complete kitchen and living space transformation featuring custom cabinets with integrated appliances, a statement island, and bespoke entertainment unit. This modern renovation combines functionality with sophisticated design to create a warm, inviting family space with premium materials and exceptional craftsmanship.',
    challenge: 'The clients requested a complete transformation of their outdated kitchen and living area while working within the existing structural footprint. They desired a modern, open-concept space with increased storage, improved flow, and integration of high-end appliances. The challenge was to maximize the available space while creating a design that felt both luxurious and practical for everyday family use.',
    solution: 'Our team designed a comprehensive joinery solution that included custom floor-to-ceiling cabinetry, a spacious island with waterfall edges, and built-in entertainment units. We incorporated a neutral color palette with warm timber accents to create a timeless aesthetic. Premium materials including stone countertops and quality hardware ensure durability and a luxurious feel. The innovative storage solutions include pull-out pantry systems, integrated appliance housing, and purpose-built drawers tailored to the family\'s specific needs.',
    features: [
      'Custom kitchen cabinetry with soft-close mechanisms',
      'Walk-in pantry with timber shelving',
      'Entertainment unit with hidden storage',
      'Floating timber shelves',
      'Premium stone countertops',
      'Integrated high-end appliances',
      'Custom island with waterfall edge',
      'Under-cabinet lighting system'
    ],
    mainImage: 'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/b2bd0fbd-4885-49fa-2a8f-d1c9eae09500/public',
    galleryImages: [
      'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/b1f96557-1248-4d5f-2f47-b701af994400/public',
      'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/c8088c41-7547-4212-de39-0307fe38b400/public',
      'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/9cc57e06-d2c4-4b91-b14c-f57bfae8c700/public',
      'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/1ac9973e-2842-4065-0702-1cb7bc29fe00/public',
      'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/f7f37aa2-5f36-46cf-f885-fe16567b0700/public',
      'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/bee5cb92-736b-4c22-1451-13692c43c300/public',
      'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/29d46de2-b601-433c-7600-622f82923600/public',
      'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/f9b9260d-e9f3-46b7-c468-36ac58f7e000/public',
      'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/ab795ca1-7521-497d-add3-6edb1b6cd100/public',
      'https://imagedelivery.net/QNG1HFbshFBF3G5_L-7avQ/c5fa680a-0190-4ac3-6d8c-c37ac53b7300/public'
    ]
  };

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen">
        {/* Hero section */}
        <div className="relative h-[40vh] md:h-[60vh] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={projectDetails.mainImage} 
              alt={projectDetails.title}
              className="w-full h-full object-cover"
              width={1920}
              height={1080}
              loading="eager"
              decoding="async"
              draggable="false"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container-custom text-center px-4 md:px-8">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl lg:text-6xl font-heading text-white mb-4 shadow-text"
              >
                {projectDetails.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base md:text-xl text-white/90 max-w-2xl mx-auto shadow-text"
              >
                Transforming living spaces with premium craftsmanship
              </motion.p>
            </div>
          </div>
        </div>

        <div className="container-custom py-8 md:py-16 lg:py-20 px-4 md:px-6">
          <div className="flex flex-wrap mb-8 md:mb-10">
            <Link href="/#portfolio" className="inline-flex items-center text-primary hover:text-secondary transition-colors duration-300">
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span>Back to Projects</span>
            </Link>
            <div className="hidden md:flex items-center ml-auto">
              <span className="text-gray-400 mx-2">Home</span>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <span className="text-gray-400 mx-2">Projects</span>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <span className="text-primary mx-2">Yowie Bay</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Content - Project details */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-8"
              >
                <h2 className="text-2xl md:text-3xl font-heading text-primary mb-6">Project Overview</h2>
                <p className="text-gray-700 mb-8 leading-relaxed text-base md:text-lg">
                  {projectDetails.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div className="bg-[#f9f7f4] rounded-lg p-6">
                    <h3 className="text-xl font-heading text-primary mb-4 flex items-center">
                      <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                      The Challenge
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {projectDetails.challenge}
                    </p>
                  </div>
                  
                  <div className="bg-[#f9f7f4] rounded-lg p-6">
                    <h3 className="text-xl font-heading text-primary mb-4 flex items-center">
                      <span className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                      Our Solution
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {projectDetails.solution}
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-heading text-primary mb-6">Project Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  {[projectDetails.mainImage, ...projectDetails.galleryImages].map((image, index) => (
                    <div 
                      key={index} 
                      className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 aspect-[4/3] cursor-pointer"
                      onClick={() => setActiveImage(image)}
                    >
                      <div className="w-full h-full group relative">
                        <img 
                          src={image} 
                          alt={`Gallery image ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading={index > 2 ? "lazy" : "eager"}
                          width={800}
                          height={600}
                          decoding="async"
                          draggable="false"
                        />
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-r from-primary to-primary/80 rounded-xl shadow-md p-8 text-center"
              >
                <h3 className="text-2xl font-heading text-white mb-4">Ready to Transform Your Space?</h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Let us bring your vision to life with our expert craftsmanship and attention to detail.
                </p>
                <a 
                  href="/contact" 
                  className="inline-block bg-white text-primary font-medium px-8 py-3 rounded-full hover:bg-secondary hover:text-white transition-colors duration-300"
                >
                  Start Your Project
                </a>
              </motion.div>
            </div>
            
            {/* Sidebar with Project info */}
            <div className="lg:col-span-1 order-1 lg:order-2 mb-8 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-sm p-6 md:p-8 sticky top-24"
              >
                <div className="divide-y divide-gray-100">
                  <div className="flex items-start py-4">
                    <MapPin className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Location</p>
                      <p className="text-gray-800 font-medium">Yowie Bay, Sydney</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start py-4">
                    <Calendar className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Completion Date</p>
                      <p className="text-gray-800 font-medium">{projectDetails.completionDate}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start py-4">
                    <Grid className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Category</p>
                      <p className="text-gray-800 font-medium">{projectDetails.category}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-heading text-primary mb-4">Key Features</h3>
                  <div className="bg-[#f9f7f4] rounded-lg p-6">
                    <ul className="space-y-3">
                      {projectDetails.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-6 h-6 rounded-full bg-secondary/20 text-secondary flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link 
                    href="/contact" 
                    className="w-full block text-center bg-primary hover:bg-secondary text-white py-3.5 px-4 rounded-lg transition-colors duration-300 font-medium"
                  >
                    Request Similar Project
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Lightbox for gallery images */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 touch-none"
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery"
        >
          <div className="relative max-w-5xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 text-white bg-black/40 rounded-full p-2 hover:bg-black/60 transition-colors z-10"
              onClick={() => setActiveImage(null)}
              aria-label="Close gallery"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={activeImage || ''} 
              alt="Enlarged view"
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              loading="eager"
              width={1920}
              height={1080}
              decoding="async"
              draggable="false"
            />
            <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4">
              <button
                className="md:hidden bg-white/10 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full hover:bg-white/20 transition-colors"
                onClick={() => setActiveImage(null)}
              >
                Tap to close
              </button>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </>
  );
};

export default YowieBayProject; 