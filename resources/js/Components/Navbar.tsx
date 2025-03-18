import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Link, usePage } from '@inertiajs/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const { url } = usePage();

  const navLinks = [
    { href: '/services', label: 'Services', dropdown: [
      { href: '/services/furniture', label: 'Custom Furniture' },
      { href: '/services/kitchens', label: 'Kitchens' },
      { href: '/services/joinery', label: 'Interior Joinery' },
      { href: '/services/restoration', label: 'Restoration' },
      { href: '/services/commercial', label: 'Commercial' },
    ]},
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/process', label: 'Process' },
    { href: '/contact', label: 'Contact' },
  ];

  // Handling scroll events for navbar visibility and background change
  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    
    // Determine if scrolled based on scroll position
    if (currentScrollPos > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    
    // Determine navbar visibility (hide on scroll down, show on scroll up)
    setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 10);
    
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  // Attach and detach scroll listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'nav-scrolled text-dark py-3' : 'nav-transparent text-white py-6'
      } ${!visible ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="relative z-20 flex items-center group transition-all duration-500"
          >
            <img 
              src="/img/Pelican_Logo.png" 
              alt="Pelican Custom Joinery Logo" 
              className="h-14 md:h-16 transition-all duration-500 group-hover:opacity-90"
            />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                {link.dropdown ? (
                  <div 
                    className="flex items-center cursor-pointer group"
                    onClick={() => toggleDropdown(index)}
                  >
                    <span className={`font-body text-base ${
                      scrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-secondary'
                    } transition-all duration-300 py-2 ${
                      url.startsWith(link.href) ? 'font-semibold' : ''
                    }`}>
                      {link.label}
                    </span>
                    <ChevronDown 
                      className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === index ? 'rotate-180' : 'rotate-0'
                      }`} 
                    />
                  </div>
                ) : (
                  <Link 
                    href={link.href} 
                    className={`font-body text-base ${
                      scrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-secondary'
                    } transition-all duration-300 py-2 ${
                      url === link.href ? 'font-semibold' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
                
                {/* Dropdown menu */}
                {link.dropdown && (
                  <div 
                    className={`absolute left-0 mt-0 min-w-[220px] bg-white rounded-md shadow-custom overflow-hidden transition-all duration-300 ${
                      activeDropdown === index 
                        ? 'opacity-100 translate-y-2 pointer-events-auto' 
                        : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}
                  >
                    <div className="p-1">
                      {link.dropdown.map((item, i) => (
                        <Link
                          key={i}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-50 hover:text-primary rounded-md transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <Link 
              href="/contact" 
              className="btn btn-secondary flex items-center group"
            >
              <Phone className="w-4 h-4 mr-2 group-hover:animate-pulse" />
              <span>Get Quote</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden relative z-20 p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${scrolled && !isOpen ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled && !isOpen ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-primary-dark/95 backdrop-blur-sm z-10 lg:hidden transition-all duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="container-custom h-full flex flex-col justify-center">
          <div className="py-12 space-y-6">
            {navLinks.map((link, index) => (
              <div key={index} className="relative">
                {link.dropdown ? (
                  <div className="space-y-4">
                    <div 
                      className="flex items-center justify-between cursor-pointer text-white hover:text-secondary-light transition-colors text-2xl font-heading" 
                      onClick={() => toggleDropdown(index)}
                    >
                      <span>{link.label}</span>
                      <ChevronDown 
                        className={`ml-1 w-5 h-5 transition-transform duration-300 ${
                          activeDropdown === index ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    </div>
                    
                    <div 
                      className={`space-y-3 pl-6 border-l border-secondary/30 overflow-hidden transition-all duration-300 ${
                        activeDropdown === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      {link.dropdown.map((item, i) => (
                        <Link
                          key={i}
                          href={item.href}
                          className="block text-gray-300 hover:text-secondary text-lg transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    href={link.href} 
                    className="block text-white hover:text-secondary-light transition-colors text-2xl font-heading"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            
            <div className="pt-6">
              <Link 
                href="/contact" 
                className="btn btn-secondary inline-flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="w-4 h-4 mr-2" />
                Get Quote
              </Link>
            </div>
          </div>
          
          {/* Mobile contact info */}
          <div className="mt-auto pb-8">
            <div className="text-gray-300 space-y-2 text-sm">
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-secondary" />
                +61 3 9123 4567
              </p>
              <p>123 Joinery Street, Melbourne, VIC 3000</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;