import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
            <div className="h-10">
  <svg 
    viewBox="0 0 320 60" 
    className="h-full" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Glowing background */}
    <rect 
      x="5" 
      y="5" 
      width="310" 
      height="50" 
      rx="25" 
      fill={isScrolled ? "#0D0D2B" : "transparent"} 
      stroke={isScrolled ? "#00FFFF" : "#FF00FF"}
      strokeWidth="2"
      className={`${isScrolled ? '' : 'opacity-70'}`}
    />
    
    {/* Mountain silhouette */}
    <path 
      d="M30 45L45 25L55 35L70 15L85 35L100 25L115 45H30z" 
      fill={isScrolled ? "#00FFFF" : "#39FF14"}
      className="opacity-90"
    />
    
    {/* Palm tree */}
    <path 
      d="M75 45c0 0-3-12 0-16 3-4 8-2 8-2s-2-6 1-10c3-4 6-2 6-2s-3 6 0 10c3 4 5 2 5 2s-5 4-5 8c0 4 2 10 2 10h-17z" 
      fill={isScrolled ? "#FF00FF" : "#FF10F0"}
      className="opacity-80"
    />
    
    {/* Sun */}
    <circle 
      cx="95" 
      cy="15" 
      r="6" 
      fill={isScrolled ? "#FFFF00" : "#FFF200"}
      className="opacity-90"
    />
    
    {/* Text with neon glow effect */}
    <text 
      x="130" 
      y="38" 
      fontFamily="serif" 
      fontSize="22" 
      fontWeight="bold" 
      fill={isScrolled ? "#FFFFFF" : "#FFFFFF"}
      stroke={isScrolled ? "#FF00FF" : "#00FFFF"}
      strokeWidth="1"
    >
      Hill Paradise Resort
    </text>
    
    {/* Decorative line */}
    <path 
      d="M130 42h160" 
      stroke={isScrolled ? "#00FFFF" : "#FF00FF"} 
      strokeWidth="2"
      strokeDasharray="1 3"
    />
  </svg>
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
                  className={`${
                    location.pathname === link.path
                      ? isScrolled 
                        ? 'text-teal-600 border-b-2 border-teal-600' 
                        : 'text-white border-b-2 border-white'
                      : isScrolled 
                        ? 'text-gray-700 hover:text-teal-600' 
                        : 'text-gray-100 hover:text-white hover:border-b-2 hover:border-white'
                  } transition-colors duration-300 font-medium py-2`}
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
              } focus:outline-none`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
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
        
        {/* Mobile menu, show/hide based on menu state */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white rounded-b-lg shadow-lg mt-2`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`${
                  location.pathname === link.path
                    ? 'bg-teal-50 text-teal-600'
                    : 'text-gray-700 hover:bg-teal-50 hover:text-teal-600'
                } block px-3 py-2 rounded-md text-base font-medium`}
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