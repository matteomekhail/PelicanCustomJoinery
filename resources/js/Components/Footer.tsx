import React from 'react';
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from '@inertiajs/react';

const Footer = () => {
  return (
    <footer className="bg-[#1B2B5B] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-10">
          <img 
            src="/img/Pelican_Logo.png" 
            alt="Pelican Custom Joinery Logo" 
            className="h-20 sm:h-24"
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-serif mb-6">About Us</h3>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Pelican Custom Joinery specializes in premium craftsmanship with over 35 years of experience creating bespoke woodworking solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="bg-white/10 w-1.5 h-1.5 rounded-full mr-2"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="bg-white/10 w-1.5 h-1.5 rounded-full mr-2"></span>
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="bg-white/10 w-1.5 h-1.5 rounded-full mr-2"></span>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#process" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="bg-white/10 w-1.5 h-1.5 rounded-full mr-2"></span>
                  Our Process
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="bg-white/10 w-1.5 h-1.5 rounded-full mr-2"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-serif mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="bg-white/10 w-1.5 h-1.5 rounded-full mr-2"></span>
                  Custom Furniture
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="bg-white/10 w-1.5 h-1.5 rounded-full mr-2"></span>
                  Bespoke Kitchens
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="bg-white/10 w-1.5 h-1.5 rounded-full mr-2"></span>
                  Interior Joinery
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="bg-white/10 w-1.5 h-1.5 rounded-full mr-2"></span>
                  Antique Restoration
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="bg-white/10 w-1.5 h-1.5 rounded-full mr-2"></span>
                  Commercial Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif mb-6">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mt-0.5 mr-3 text-gray-300" />
                <span className="text-gray-300">+61 3 9123 4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mt-0.5 mr-3 text-gray-300" />
                <span className="text-gray-300">info@pelicanjoinery.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mt-0.5 mr-3 text-gray-300" />
                <span className="text-gray-300">
                  123 Joinery Street<br />
                  Melbourne, VIC 3000
                </span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mt-0.5 mr-3 text-gray-300" />
                <span className="text-gray-300">
                  Mon-Fri: 9:00 AM - 6:00 PM<br />
                  Sat: 10:00 AM - 4:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Policies */}
        <div className="border-t border-gray-700/50 mt-12 pt-8 text-center">
          <div className="text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Pelican Custom Joinery. All rights reserved.</p>
            <div className="mt-4 space-x-6">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;