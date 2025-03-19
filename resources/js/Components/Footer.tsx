import React from 'react';
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

const Footer = () => {
  // Animation variants for staggered children animation
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

  return (
    <footer className="relative bg-primary overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full border border-secondary/5 opacity-20 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full border border-secondary/10 opacity-10 -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="relative pt-20 pb-10">
        <div className="container-custom">
          {/* Top section with typographic branding */}
          <div className="relative flex flex-col items-center mb-16"> 
            <div className="flex items-center space-x-5 mb-2">
              <div className="h-[1px] w-16 bg-secondary/30"></div>
              <div className="px-5 py-2 border border-secondary/20 rounded-full">
                <span className="text-secondary uppercase tracking-widest text-xs font-medium">Excellence in Craftsmanship</span>
              </div>
              <div className="h-[1px] w-16 bg-secondary/30"></div>
            </div>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16"
          >
            {/* Company Info */}
            <motion.div variants={itemVariants} className="relative">
              <div className="mb-6">
                <h3 className="text-xl font-heading text-white mb-4 relative inline-block">
                  About Us
                  <span className="absolute -bottom-1 left-0 w-12 h-[2px] bg-secondary"></span>
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Pelican Custom Joinery specializes in premium craftsmanship with over 35 years of experience creating bespoke woodworking solutions.
                </p>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="bg-white/5 p-2.5 rounded-full hover:bg-secondary/20 transition-colors duration-300 group">
                  <Facebook className="w-5 h-5 text-white/80 group-hover:text-secondary transition-colors duration-300" />
                </a>
                <a href="#" className="bg-white/5 p-2.5 rounded-full hover:bg-secondary/20 transition-colors duration-300 group">
                  <Instagram className="w-5 h-5 text-white/80 group-hover:text-secondary transition-colors duration-300" />
                </a>
                <a href="#" className="bg-white/5 p-2.5 rounded-full hover:bg-secondary/20 transition-colors duration-300 group">
                  <Linkedin className="w-5 h-5 text-white/80 group-hover:text-secondary transition-colors duration-300" />
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="relative">
              <div className="mb-6">
                <h3 className="text-xl font-heading text-white mb-4 relative inline-block">
                  Quick Links
                  <span className="absolute -bottom-1 left-0 w-12 h-[2px] bg-secondary"></span>
                </h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-white/70 hover:text-secondary transition-colors duration-300 flex items-center group">
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span>About Us</span>
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/70 hover:text-secondary transition-colors duration-300 flex items-center group">
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span>Services</span>
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-white/70 hover:text-secondary transition-colors duration-300 flex items-center group">
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span>Portfolio</span>
                  </a>
                </li>
                <li>
                  <a href="#process" className="text-white/70 hover:text-secondary transition-colors duration-300 flex items-center group">
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span>Our Process</span>
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/70 hover:text-secondary transition-colors duration-300 flex items-center group">
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants} className="relative">
              <div className="mb-6">
                <h3 className="text-xl font-heading text-white mb-4 relative inline-block">
                  Our Services
                  <span className="absolute -bottom-1 left-0 w-12 h-[2px] bg-secondary"></span>
                </h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <a href="#services" className="text-white/70 hover:text-secondary transition-colors duration-300 flex items-center group">
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span>Custom Furniture</span>
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/70 hover:text-secondary transition-colors duration-300 flex items-center group">
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span>Bespoke Kitchens</span>
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/70 hover:text-secondary transition-colors duration-300 flex items-center group">
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span>Interior Joinery</span>
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/70 hover:text-secondary transition-colors duration-300 flex items-center group">
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span>Antique Restoration</span>
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/70 hover:text-secondary transition-colors duration-300 flex items-center group">
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span>Commercial Projects</span>
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="relative">
              <div className="mb-6">
                <h3 className="text-xl font-heading text-white mb-4 relative inline-block">
                  Contact Info
                  <span className="absolute -bottom-1 left-0 w-12 h-[2px] bg-secondary"></span>
                </h3>
              </div>
              <ul className="space-y-5">
                <li className="flex items-start group">
                  <div className="p-2 bg-white/5 rounded-lg mr-3 group-hover:bg-secondary/20 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-white/70 group-hover:text-white transition-colors duration-300">+61 3 9123 4567</p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="p-2 bg-white/5 rounded-lg mr-3 group-hover:bg-secondary/20 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-white/70 group-hover:text-white transition-colors duration-300">info@pelicanjoinery.com</p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="p-2 bg-white/5 rounded-lg mr-3 group-hover:bg-secondary/20 transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-white/70 group-hover:text-white transition-colors duration-300">
                      123 Joinery Street<br />
                      Melbourne, VIC 3000
                    </p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="p-2 bg-white/5 rounded-lg mr-3 group-hover:bg-secondary/20 transition-colors duration-300">
                    <Clock className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-white/70 group-hover:text-white transition-colors duration-300">
                      Mon-Fri: 9:00 AM - 6:00 PM<br />
                      Sat: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Copyright and Policies */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/50 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Pelican Custom Joinery. All rights reserved.
              </p>
              <div className="flex space-x-8">
                <Link href="/privacy-policy" className="text-white/50 hover:text-secondary text-sm transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-white/50 hover:text-secondary text-sm transition-colors duration-300">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;