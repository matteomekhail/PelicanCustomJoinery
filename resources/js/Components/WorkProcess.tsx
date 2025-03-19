import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  FileText, 
  PenTool, 
  CheckSquare, 
  Settings, 
  Truck, 
  Home, 
  Award 
} from 'lucide-react';

const processSteps = [
  {
    icon: <Phone className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: 'Initial Consultation',
    description: 'We start with an in-depth discussion about your vision, needs, space constraints and design preferences.',
    number: '01'
  },
  {
    icon: <FileText className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: 'Project Brief',
    description: 'We develop a comprehensive project specification outlining scope, materials, finishes, and preliminary budget.',
    number: '02'
  },
  {
    icon: <PenTool className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: 'Design & Drafting',
    description: 'Our designers create detailed plans, 3D renderings and technical drawings for your approval.',
    number: '03'
  },
  {
    icon: <CheckSquare className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: 'Final Approval',
    description: 'We refine the design based on your feedback and finalize all details before proceeding to production.',
    number: '04'
  },
  {
    icon: <Settings className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: 'Manufacturing',
    description: 'Our skilled craftsmen use premium materials and precision techniques to build your custom joinery in our workshop.',
    number: '05'
  },
  {
    icon: <Truck className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: 'Delivery & Installation',
    description: 'Our installation team carefully transports and expertly installs your custom joinery pieces at your location.',
    number: '06'
  },
  {
    icon: <Home className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: 'Final Inspection',
    description: 'We conduct a thorough inspection to ensure everything meets our high standards and your expectations.',
    number: '07'
  },
  {
    icon: <Award className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: 'Aftercare Support',
    description: 'We provide ongoing support, maintenance advice and warranty service for your custom joinery.',
    number: '08'
  }
];

const WorkProcess = () => {
  return (
    <section id="work-process" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f9f7f4] clip-path-diagonal z-0"></div>
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full border border-primary/5 z-0"></div>
      <div className="absolute bottom-40 right-20 w-64 h-64 rounded-full border border-secondary/5 z-0"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 max-w-3xl mx-auto text-center"
        >
          <div className="flex items-center justify-center space-x-5 mb-8">
            <div className="h-[1px] w-20 bg-secondary"></div>
            <div className="px-6 py-2.5 bg-secondary/10 rounded-full backdrop-blur-sm">
              <span className="text-secondary uppercase tracking-widest text-sm font-medium">Our Process</span>
            </div>
            <div className="h-[1px] w-20 bg-secondary"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-primary mb-8 leading-tight">
            <span className="block">Crafting Excellence</span>
            <span className="block relative">
              <span className="relative z-10">Step by <span className="text-secondary">Step</span></span>
              <svg className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-48 h-3 text-secondary/30 z-0" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.5C67 -0.5 134 -0.5 199 5.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          
          <p className="text-lg text-gray-custom max-w-3xl mx-auto text-center mt-6 leading-relaxed">
            Our meticulous approach ensures every project is executed with precision and care,
            from the initial concept to the final installation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {processSteps.slice(0, 4).map((step, index) => (
            <motion.div
              key={`step-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-10 right-0 text-8xl font-heading text-primary/5 select-none">
                {step.number}
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/5 mb-6">
                  <div className="text-secondary">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-heading text-primary mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-custom leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {index < 3 && (
                <div className="hidden lg:block absolute top-8 right-0 w-16 h-[2px] bg-secondary/20 transform translate-x-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 mt-16">
          {processSteps.slice(4).map((step, index) => (
            <motion.div
              key={`step-${index + 4}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-10 right-0 text-8xl font-heading text-primary/5 select-none">
                {step.number}
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/5 mb-6">
                  <div className="text-secondary">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-heading text-primary mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-custom leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {index < 3 && (
                <div className="hidden lg:block absolute top-8 right-0 w-16 h-[2px] bg-secondary/20 transform translate-x-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-primary hover:bg-primary/90 text-white rounded-full transition-all duration-300 font-medium group">
            Start Your Project
            <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkProcess; 