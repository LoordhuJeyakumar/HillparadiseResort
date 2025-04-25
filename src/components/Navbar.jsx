import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import resortLogo from '/src/assets/images/hillparadise.PNG';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll events to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Activities', path: '/activities' },
    { name: 'Contact', path: '/contact' },
  ];

  // Determine if a link is active
  const isActiveLink = (path) => location.pathname === path;

  // Get proper styling for links based on scroll state and active status
  const getLinkStyles = (isActive, isMobile = false) => {
    if (isMobile) {
      return isActive
        ? 'bg-teal-50 text-teal-600 font-medium'
        : 'text-gray-700 hover:bg-teal-50 hover:text-teal-600 font-medium';
    }
    
    if (isActive) {
      return isScrolled
        ? 'text-teal-600 border-b-2 border-teal-600 font-medium'
        : 'text-white border-b-2 border-white font-medium';
    }
    
    return isScrolled
      ? 'text-gray-700 hover:text-teal-600 hover:border-b-2 hover:border-teal-600 font-medium'
      : 'text-white hover:border-b-2 hover:border-white font-medium';
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center" aria-label="Hill Paradise Resort - Home">
              <div className="h-20">
                <img 
                  src={resortLogo} 
                  alt="Hill Paradise Resort Logo"
                  className="h-20 md:h-36 w-auto object-contain"
                  loading="eager"
                />
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`${getLinkStyles(isActiveLink(link.path))} 
                    transition-colors duration-300 py-2 px-1`}
                  aria-current={isActiveLink(link.path) ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-gray-200'
              } focus:outline-none focus:ring-2 focus:ring-teal-500`}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close main menu' : 'Open main menu'}
            >
              <span className="sr-only">{isOpen ? 'Close main menu' : 'Open main menu'}</span>
              {/* Icon when menu is closed */}
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div 
          className={`${isOpen ? 'block' : 'hidden'} md:hidden`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-b-lg shadow-lg mt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`${getLinkStyles(isActiveLink(link.path), true)} 
                  block px-3 py-2 rounded-md text-base`}
                aria-current={isActiveLink(link.path) ? 'page' : undefined}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;