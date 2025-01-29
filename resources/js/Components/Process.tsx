import React from 'react';
import { Pencil, MessageSquare, Wrench, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Initial Consultation',
    description: 'We discuss your vision, requirements, and preferences to understand your needs perfectly.'
  },
  {
    icon: <Pencil className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Design & Planning',
    description: 'Our designers create detailed plans and 3D visualizations for your approval.'
  },
  {
    icon: <Wrench className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Crafting',
    description: 'Our skilled craftsmen bring your design to life using premium materials and techniques.'
  },
  {
    icon: <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Installation',
    description: 'Professional installation ensuring perfect fit and finish in your space.'
  }
];

const Process = () => {
  return (
    <section id="process" className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1B2B5B] mb-4 sm:mb-6">Our Process</h2>
          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
            From concept to completion, we ensure a smooth and transparent process.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/80 text-[#1B2B5B] rounded-xl group-hover:bg-[#1B2B5B] group-hover:text-white transition-all duration-300">
                    {step.icon}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block h-0.5 flex-1 bg-[#1B2B5B]/20 ml-4" />
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-serif text-[#1B2B5B] mb-3 sm:mb-4">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;