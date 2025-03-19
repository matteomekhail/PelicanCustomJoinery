import React, { useEffect, useState } from 'react';
import { Phone, Mail, Clock, Send, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the actual form submission to your backend
    setIsFormSubmitted(true);
    setTimeout(() => setIsFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden bg-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#f9f7f4] to-transparent opacity-80"></div>
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border border-secondary/10 opacity-30"></div>
      <div className="absolute bottom-10 left-20 w-96 h-96 rounded-full border border-primary/10 opacity-20"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-24 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center space-x-5 mb-8">
            <div className="h-[1px] w-20 bg-secondary"></div>
            <div className="px-6 py-2.5 bg-secondary/10 rounded-full backdrop-blur-sm">
              <span className="text-secondary uppercase tracking-widest text-sm font-medium">Get in Touch</span>
            </div>
            <div className="h-[1px] w-20 bg-secondary"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-center text-primary mb-8 leading-tight">
            <span className="block">Let's Discuss</span>
            <span className="block relative">
              <span className="relative z-10">Your <span className="text-secondary">Vision</span></span>
              <svg className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-48 h-3 text-secondary/30 z-0" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.5C67 -0.5 134 -0.5 199 5.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mt-6 leading-relaxed">
            We're ready to bring your ideas to life. Contact us today to start crafting your bespoke joinery project.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative h-full"
          >
            <div className="relative rounded-2xl overflow-hidden h-full">
              <div className="absolute inset-0">
                <img 
                  src="/img/Sylvania/0O2A0867-HDR.jpg" 
                  alt="Pelican Custom Joinery craftsmanship" 
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
              </div>
              
              <div className="relative z-10 p-8 sm:p-10 lg:p-12 h-full flex flex-col">
                <div className="mb-10">
                  <h3 className="font-heading text-3xl text-white mb-4">Contact Information</h3>
                  <p className="text-white/80 max-w-md">
                    Reach out to us with any questions about our services or to schedule a consultation for your project.
                  </p>
                </div>
                
                <div className="space-y-8 mt-auto">
                  <div className="group flex items-start">
                    <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg group-hover:bg-white transition-colors duration-300">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="ml-5">
                      <h4 className="font-medium text-white text-lg mb-1">Phone</h4>
                      <a href="tel:+61391234567" className="text-white/80 hover:text-secondary transition-colors">
                        +61 3 9123 4567
                      </a>
                    </div>
                  </div>
                  
                  <div className="group flex items-start">
                    <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg group-hover:bg-white transition-colors duration-300">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="ml-5">
                      <h4 className="font-medium text-white text-lg mb-1">Email</h4>
                      <a href="mailto:info@pelicanjoinery.com" className="text-white/80 hover:text-secondary transition-colors">
                        info@pelicanjoinery.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="group flex items-start">
                    <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg group-hover:bg-white transition-colors duration-300">
                      <Clock className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="ml-5">
                      <h4 className="font-medium text-white text-lg mb-1">Hours</h4>
                      <p className="text-white/80">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <img 
                    src="/img/Pelican_Logo.png"
                    alt="Pelican Custom Joinery Logo"
                    className="h-16 opacity-70"
                  />
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-[#f9f7f4] p-8 sm:p-10 lg:p-12 rounded-2xl shadow-[0_10px_50px_-12px_rgba(0,0,0,0.1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative">
                <h3 className="font-heading text-3xl text-primary mb-6">Send a Message</h3>
                
                {isFormSubmitted ? (
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h4 className="text-green-700 font-medium text-lg mb-2">Message Sent Successfully!</h4>
                    <p className="text-green-600">
                      Thank you for contacting us. We'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                        <input
                          type="text"
                          id="name"
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors text-base"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors text-base"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone (optional)</label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors text-base"
                        placeholder="Your phone number"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors text-base"
                        placeholder="How can we help?"
                      />
                    </div>
                    
                    <div className="mb-8">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors resize-none text-base"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="group w-full bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-light transition-colors text-base font-medium flex items-center justify-center"
                    >
                      <Send className="w-5 h-5 mr-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;