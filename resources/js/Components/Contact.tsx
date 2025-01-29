import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1B2B5B] mb-6 sm:mb-8">Get in Touch</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 leading-relaxed">
              We'd love to hear about your project. Contact us to schedule a consultation.
            </p>
            
            <div className="space-y-6 sm:space-y-8">              
              <div className="group">
                <div className="flex items-start">
                  <div className="p-2 sm:p-3 bg-white/80 rounded-lg group-hover:bg-[#1B2B5B] transition-colors duration-300">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#1B2B5B] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="ml-4 sm:ml-6">
                    <h3 className="font-serif text-lg sm:text-xl mb-2">Opening Hours</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="flex items-start">
                  <div className="p-2 sm:p-3 bg-white/80 rounded-lg group-hover:bg-[#1B2B5B] transition-colors duration-300">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#1B2B5B] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="ml-4 sm:ml-6">
                    <h3 className="font-serif text-lg sm:text-xl mb-2">Phone</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">+61 3 9123 4567</p>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="flex items-start">
                  <div className="p-2 sm:p-3 bg-white/80 rounded-lg group-hover:bg-[#1B2B5B] transition-colors duration-300">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#1B2B5B] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="ml-4 sm:ml-6">
                    <h3 className="font-serif text-lg sm:text-xl mb-2">Email</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">info@pelicanjoinery.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-xl">
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
              
              <div className="mb-4 sm:mb-6">
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
                className="w-full bg-[#1B2B5B] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#2a407c] transition-colors text-base sm:text-lg font-medium"
              >
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