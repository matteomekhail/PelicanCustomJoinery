import React from 'react';
import { Facebook, Instagram, Linkedin, Phone, Mail } from 'lucide-react';
import { Link } from '@inertiajs/react';

const Footer = () => {
  return (
    <footer className="bg-[#1B2B5B] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-serif mb-4">Pelican Joinery</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-[#4267B2] transition-colors">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="hover:text-[#E1306C] transition-colors">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="hover:text-[#0077B5] transition-colors">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif mb-4">Quick Links</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif mb-4">Contact Info</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-gray-300">+1 234 567 890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-gray-300">info@pelicanjoinery.com</span>
              </li>
              <li className="text-gray-300">
                123 Woodwork Street<br />
                Craftsville, CV 12345
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-serif mb-4">Services</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#custom" className="text-gray-300 hover:text-white transition-colors">Custom Furniture</a>
              </li>
              <li>
                <a href="#kitchen" className="text-gray-300 hover:text-white transition-colors">Kitchen Design</a>
              </li>
              <li>
                <a href="#restoration" className="text-gray-300 hover:text-white transition-colors">Restoration</a>
              </li>
              <li>
                <a href="#commercial" className="text-gray-300 hover:text-white transition-colors">Commercial Projects</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Policies */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="text-xs sm:text-sm text-gray-300">
            <p>&copy; {new Date().getFullYear()} Pelican Joinery. All rights reserved.</p>
            <div className="mt-4 space-x-4">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-500">•</span>
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