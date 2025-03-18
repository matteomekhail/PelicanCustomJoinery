import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1B2B5B] mb-4">Get in Touch</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to hear about your project. Contact us to schedule a consultation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="relative">
            <img 
              src="/img/0O2A0795-HDR.jpg" 
              alt="Pelican Custom Joinery workshop" 
              className="rounded-xl h-full w-full object-cover shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1B2B5B]/40 to-[#1B2B5B]/70 rounded-xl"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 text-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">              
                <div className="group">
                  <div className="flex items-start">
                    <div className="p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-lg group-hover:bg-white transition-colors duration-300">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-[#1B2B5B] transition-colors duration-300" />
                    </div>
                    <div className="ml-4 sm:ml-6">
                      <h3 className="font-serif text-lg sm:text-xl mb-2">Opening Hours</h3>
                      <p className="text-sm sm:text-base text-gray-100 leading-relaxed">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start">
                    <div className="p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-lg group-hover:bg-white transition-colors duration-300">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-[#1B2B5B] transition-colors duration-300" />
                    </div>
                    <div className="ml-4 sm:ml-6">
                      <h3 className="font-serif text-lg sm:text-xl mb-2">Phone</h3>
                      <p className="text-sm sm:text-base text-gray-100 leading-relaxed">+61 3 9123 4567</p>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start">
                    <div className="p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-lg group-hover:bg-white transition-colors duration-300">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-[#1B2B5B] transition-colors duration-300" />
                    </div>
                    <div className="ml-4 sm:ml-6">
                      <h3 className="font-serif text-lg sm:text-xl mb-2">Email</h3>
                      <p className="text-sm sm:text-base text-gray-100 leading-relaxed">info@pelicanjoinery.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-start">
                    <div className="p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-lg group-hover:bg-white transition-colors duration-300">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-[#1B2B5B] transition-colors duration-300" />
                    </div>
                    <div className="ml-4 sm:ml-6">
                      <h3 className="font-serif text-lg sm:text-xl mb-2">Location</h3>
                      <p className="text-sm sm:text-base text-gray-100 leading-relaxed">123 Joinery Street<br />Melbourne, VIC 3000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B2B5B] focus:border-[#1B2B5B] transition-colors text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B2B5B] focus:border-[#1B2B5B] transition-colors text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="mb-4 sm:mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B2B5B] focus:border-[#1B2B5B] transition-colors text-sm sm:text-base"
                  placeholder="How can we help?"
                />
              </div>
              
              <div className="mb-6 sm:mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B2B5B] focus:border-[#1B2B5B] transition-colors resize-none text-sm sm:text-base"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#1B2B5B] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#2a407c] transition-colors text-base sm:text-lg font-medium flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;