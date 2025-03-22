import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Phone, ChevronDown, Home, Grid, ClipboardList, Mail } from 'lucide-react';
import { Link, usePage } from '@inertiajs/react';
import AnchorLink from '@/Components/AnchorLink';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { url } = usePage();
  
  // Initialize scrolled state based on the current URL
  // Set to true for service and policy pages that have light backgrounds
  const isServiceOrPolicyPage = url.startsWith('/services/') || 
                               url === '/privacy-policy' || 
                               url === '/terms';
  const [scrolled, setScrolled] = useState(isServiceOrPolicyPage);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { href: '/services', label: 'Services', icon: <Grid className="w-5 h-5" />, dropdown: [
      { href: '/services/furniture', label: 'Custom Furniture' },
      { href: '/services/kitchens', label: 'Kitchens' },
      { href: '/services/joinery', label: 'Interior Joinery' },
      { href: '/services/restoration', label: 'Restoration' },
      { href: '/services/commercial', label: 'Commercial' },
    ]},
    { href: '/#portfolio', label: 'Portfolio', icon: <Home className="w-5 h-5" /> },
    { href: '/#contact', label: 'Contact', icon: <Mail className="w-5 h-5" /> },
  ];

  // Simplified scroll handler - only determines if scrolled for background change
  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    
    // If on a service or policy page, always keep scrolled true to maintain visible text
    if (isServiceOrPolicyPage) {
      setScrolled(true);
      return;
    }
    
    // For other pages, determine scrolled based on scroll position
    if (currentScrollPos > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [isServiceOrPolicyPage]);

  // Attach and detach scroll listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  
  // Callback per chiudere il dropdown
  const closeDropdown = useCallback(() => {
    setActiveDropdown(null);
  }, []);
  
  // Callback per chiudere il menu mobile
  const closeMobileMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleDropdown = (index: number, event: React.MouseEvent) => {
    // Stop event propagation to prevent document click from immediately closing the dropdown
    event.stopPropagation();
    
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };
  
  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click is outside the dropdowns
      const dropdowns = document.querySelectorAll('.nav-dropdown-container');
      let clickedOutside = true;
      
      dropdowns.forEach(dropdown => {
        if (dropdown.contains(event.target as Node)) {
          clickedOutside = false;
        }
      });
      
      if (clickedOutside) {
        setActiveDropdown(null);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'nav-scrolled bg-white/95 shadow-lg text-dark py-3' : 'nav-transparent text-white py-5 md:py-6'
      }`}
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
              className={`transition-all duration-500 group-hover:opacity-90 ${
                scrolled ? 'h-12 md:h-14' : 'h-14 md:h-16'
              }`}
            />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group nav-dropdown-container">
                {link.dropdown ? (
                  <div 
                    className="flex items-center cursor-pointer group"
                    onClick={(e) => toggleDropdown(index, e)}
                  >
                    <span className={`font-body text-base ${
                      scrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-secondary'
                    } transition-all duration-300 py-2 ${
                      url.startsWith(link.href) ? 'font-semibold' : ''
                    } flex items-center`}>
                      {link.label}
                      <ChevronDown 
                        className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === index ? 'rotate-180' : 'rotate-0'
                        }`} 
                      />
                    </span>
                  </div>
                ) : (
                  link.href.includes('#') ? (
                    <AnchorLink
                      href={link.href} 
                      className={`font-body text-base ${
                        scrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-secondary'
                      } transition-all duration-300 py-2 ${
                        url === link.href ? 'font-semibold' : ''
                      } relative group`}
                    >
                      {link.label}
                      <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${scrolled ? 'bg-primary' : 'bg-secondary'} transition-all duration-300 group-hover:w-full`}></span>
                    </AnchorLink>
                  ) : (
                    <Link 
                      href={link.href} 
                      className={`font-body text-base ${
                        scrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-secondary'
                      } transition-all duration-300 py-2 ${
                        url === link.href ? 'font-semibold' : ''
                      } relative group`}
                    >
                      {link.label}
                      <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${scrolled ? 'bg-primary' : 'bg-secondary'} transition-all duration-300 group-hover:w-full`}></span>
                    </Link>
                  )
                )}
                
                {/* Dropdown menu */}
                {link.dropdown && (
                  <div 
                    className={`absolute left-0 mt-0 min-w-[240px] bg-white rounded-md shadow-custom overflow-hidden transition-all duration-300 ${
                      activeDropdown === index 
                        ? 'opacity-100 translate-y-2 pointer-events-auto' 
                        : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="p-2">
                      {link.dropdown.map((item, i) => (
                        item.href.includes('#') ? (
                          <AnchorLink
                            key={i}
                            href={item.href}
                            className="block px-4 py-2.5 text-sm text-gray-800 hover:bg-gray-50 hover:text-primary rounded-md transition-colors"
                            onClick={closeDropdown}
                          >
                            {item.label}
                          </AnchorLink>
                        ) : (
                          <Link
                            key={i}
                            href={item.href}
                            className="block px-4 py-2.5 text-sm text-gray-800 hover:bg-gray-50 hover:text-primary rounded-md transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {item.label}
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <Link 
              href="/contact" 
              className="btn btn-secondary flex items-center group hover:scale-105 hover:shadow-md transition-all duration-300"
            >
              <Phone className="w-4 h-4 mr-2 group-hover:animate-pulse" />
              <span>Get Quote</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }} 
            className="lg:hidden relative z-20 p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute block h-0.5 w-6 transform transition-all duration-300 rounded-sm ${
                isOpen ? 'rotate-45 top-3' : 'rotate-0 top-1'
              } ${scrolled && !isOpen ? 'bg-gray-800' : 'bg-white'}`}></span>
              
              <span className={`absolute block h-0.5 w-6 top-3 transition-all duration-200 rounded-sm ${
                isOpen ? 'opacity-0' : 'opacity-100'
              } ${scrolled && !isOpen ? 'bg-gray-800' : 'bg-white'}`}></span>
              
              <span className={`absolute block h-0.5 w-6 transform transition-all duration-300 rounded-sm ${
                isOpen ? '-rotate-45 top-3' : 'rotate-0 top-5'
              } ${scrolled && !isOpen ? 'bg-gray-800' : 'bg-white'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-gradient-to-b from-primary-dark to-primary/95 backdrop-blur-sm z-10 lg:hidden transition-all duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="container-custom h-full flex flex-col">
          {/* Added top padding to create space below the header/logo */}
          <div className="pt-28 md:pt-32 pb-12 flex-grow overflow-y-auto">
            <div className="space-y-8">
              {navLinks.map((link, index) => (
                <div key={index} className="relative">
                  {link.dropdown ? (
                    <div className="space-y-4">
                      <div 
                        className="flex items-center justify-between cursor-pointer text-white hover:text-secondary-light transition-colors text-xl md:text-2xl font-heading" 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleDropdown(index, e);
                        }}
                      >
                        <div className="flex items-center">
                          <span className="mr-3 text-secondary-light">{link.icon}</span>
                          <span>{link.label}</span>
                        </div>
                        <ChevronDown 
                          className={`w-5 h-5 transition-transform duration-300 ${
                            activeDropdown === index ? 'rotate-180' : 'rotate-0'
                          }`}
                        />
                      </div>
                      
                      <div 
                        className={`space-y-4 ml-8 pl-6 border-l-2 border-secondary/40 overflow-hidden transition-all duration-300 ${
                          activeDropdown === index ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0 py-0'
                        }`}
                      >
                        {link.dropdown.map((item, i) => (
                          item.href.includes('#') ? (
                            <AnchorLink
                              key={i}
                              href={item.href}
                              className="block text-gray-200 hover:text-secondary text-lg transition-colors"
                              onClick={closeMobileMenu}
                            >
                              {item.label}
                            </AnchorLink>
                          ) : (
                            <Link
                              key={i}
                              href={item.href}
                              className="block text-gray-200 hover:text-secondary text-lg transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.label}
                            </Link>
                          )
                        ))}
                      </div>
                    </div>
                  ) : (
                    link.href.includes('#') ? (
                      <AnchorLink 
                        href={link.href}
                        className="flex items-center text-white hover:text-secondary-light transition-colors text-xl md:text-2xl font-heading"
                        onClick={closeMobileMenu}
                      >
                        <span className="mr-3 text-secondary-light">{link.icon}</span>
                        <span>{link.label}</span>
                      </AnchorLink>
                    ) : (
                      <Link 
                        href={link.href}
                        className="flex items-center text-white hover:text-secondary-light transition-colors text-xl md:text-2xl font-heading"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="mr-3 text-secondary-light">{link.icon}</span>
                        <span>{link.label}</span>
                      </Link>
                    )
                  )}
                </div>
              ))}
              
              <div className="pt-10">
                <Link 
                  href="/contact" 
                  className="btn btn-secondary inline-flex items-center hover:translate-y-0.5 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
          
          {/* Mobile contact info */}
          <div className="py-6 border-t border-gray-700/50">
            <div className="text-gray-300 space-y-3 text-sm md:flex md:justify-between md:space-y-0">
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