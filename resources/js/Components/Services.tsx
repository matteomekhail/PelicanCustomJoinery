import React, { useRef, useEffect } from 'react';
import { ClipboardList, PenTool, Hammer, Wrench, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const serviceItems = [
  {
    icon: <ClipboardList className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: 'Project Management',
    description: 'Comprehensive oversight of your joinery project from concept to completion, ensuring timely delivery and quality craftsmanship.',
    images: ['/img/0O2A0896.jpg', '/img/0O2A0894.jpg'],
  },
  {
    icon: <PenTool className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: 'Drafting',
    description: 'Detailed technical drawings and 3D visualizations that bring your ideas to life before manufacturing begins.',
    images: ['/img/0O2A0893.jpg', '/img/0O2A0892.jpg'],
  },
  {
    icon: <Wrench className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: 'Manufacturing',
    description: 'Precision crafting of custom joinery using premium materials and advanced techniques in our state-of-the-art workshop.',
    images: ['/img/0O2A0891.jpg', '/img/0O2A0890.jpg'],
  },
  {
    icon: <Hammer className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: 'Installation',
    description: 'Expert installation by our skilled team, ensuring perfect fit and finish for your custom joinery pieces.',
    images: ['/img/0O2A0889.jpg', '/img/0O2A0888-HDR.jpg'],
  },
  {
    icon: <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: 'Specialised Projects',
    description: 'Unique and complex joinery solutions for challenging spaces or distinctive design requirements.',
    images: ['/img/0O2A0885-HDR.jpg', '/img/0O2A0882-HDR.jpg'],
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      const elementsToAnimate = sectionRef.current.querySelectorAll('.reveal');
      elementsToAnimate.forEach(el => observer.observe(el));
    }
    
    return () => {
      if (sectionRef.current) {
        const elementsToAnimate = sectionRef.current.querySelectorAll('.reveal');
        elementsToAnimate.forEach(el => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden bg-[#f9f7f4]">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-80"></div>
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border border-secondary/10 opacity-30"></div>
      <div className="absolute bottom-10 left-20 w-96 h-96 rounded-full border border-primary/10 opacity-20"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 lg:mb-28 max-w-3xl mx-auto reveal reveal-up"
        >
          <div className="flex items-center justify-center space-x-5 mb-8">
            <div className="h-[1px] w-20 bg-secondary"></div>
            <div className="px-6 py-2.5 bg-secondary/10 rounded-full backdrop-blur-sm">
              <span className="text-secondary uppercase tracking-widest text-sm font-medium">Our Services</span>
            </div>
            <div className="h-[1px] w-20 bg-secondary"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-center text-primary mb-8 leading-tight">
            <span className="block">Mastery in</span>
            <span className="block relative">
              <span className="relative z-10">Wood<span className="text-secondary">craft</span></span>
              <svg className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-48 h-3 text-secondary/30 z-0" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.5C67 -0.5 134 -0.5 199 5.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          
          <p className="text-lg text-gray-custom max-w-3xl mx-auto text-center mt-6 leading-relaxed">
            Our comprehensive approach to joinery combines artisanal craftsmanship with modern precision,
            delivering exceptional results at every stage of your project.
          </p>
        </motion.div>

        <div ref={servicesRef} className="services-container">
          {serviceItems.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`mb-24 last:mb-0 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
            >
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                {/* Image Grid */}
                <div className="w-full lg:w-1/2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl group">
                      <img 
                        src={service.images[0]} 
                        alt={`${service.title} - Image 1`}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl group translate-y-8">
                      <img 
                        src={service.images[1]} 
                        alt={`${service.title} - Image 2`}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/5 mb-6">
                    <div className="text-secondary">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl font-heading text-primary mb-6">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-custom text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <a href="#" className="inline-flex items-center text-secondary font-medium group">
                    Discover More
                    <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Testimonial section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-32 lg:mt-40 reveal reveal-up"
        >
          <div className="relative p-10 sm:p-12 md:p-16 lg:p-20 bg-gradient-to-br from-primary to-primary/90 rounded-3xl overflow-hidden backdrop-blur-sm">
            <div className="absolute top-8 left-10 text-white/10 z-0">
              <svg className="w-32 h-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
              </svg>
            </div>
            
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <p className="text-2xl sm:text-3xl md:text-4xl font-heading text-white leading-relaxed mb-10">
                "Pelican Custom Joinery transformed our home with bespoke cabinetry that perfectly blends functionality and beauty. Their attention to detail and craftsmanship is unmatched."
              </p>
              <div className="flex flex-col items-center justify-center">
                <span className="text-white font-medium text-lg">Emily Richardson</span>
                <span className="text-white/70 text-base">Residential Client</span>
              </div>
            </div>
            
            <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full border border-white/10"></div>
            <div className="absolute top-1/2 -left-8 w-32 h-32 rounded-full border border-white/10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 