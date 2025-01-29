import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, usePage } from '@inertiajs/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { url } = usePage();

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/process', label: 'Process' },
    { href: '/contact', label: 'Contact' },
  ];
 
  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src="/img/Pelican_Logo.png" 
                alt="Pelican Joinery Logo" 
                className="h-16"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`text-gray-600 hover:text-[#1B2B5B] transition-colors text-lg ${
                  url === link.href ? 'text-[#1B2B5B] font-medium' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="bg-[#1B2B5B] text-white px-8 py-3 rounded-md flex items-center hover:bg-[#2a407c] transition-colors text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Get Quote
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-600 hover:text-[#1B2B5B] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`block w-full text-left px-3 py-2 text-gray-600 hover:text-[#1B2B5B] transition-colors ${
                url === link.href ? 'text-[#1B2B5B] font-medium' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="block w-full text-left px-3 py-2 mt-2 bg-[#1B2B5B] text-white rounded-md hover:bg-[#2a407c] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              Get Quote
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;