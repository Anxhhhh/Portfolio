import React, { useState, useEffect } from 'react';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-700/30' 
        : 'bg-gray-900/90 backdrop-blur-md'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="text-lg sm:text-xl font-bold text-white">
              Ansh
            </div>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-300 hover:text-blue-400 cursor-pointer hover:scale-105 transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-300 hover:text-blue-400 cursor-pointer hover:scale-105 transition-colors duration-300 font-medium"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-blue-400 cursor-pointer hover:scale-105 transition-colors duration-300 font-medium"
            >
              Projects
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-white p-2 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <a
              href="https://github.com/Anxhhhh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center rounded-full bg-transparent text-gray-300 hover:bg-blue-400/20 hover:text-blue-400 transition-colors duration-300 cursor-pointer hover:scale-110"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            
            <a
              href="https://www.linkedin.com/in/anshraj-singh-thakur-349ab533b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 lg:h-10 lg:w-10 items-center hover:scale-110 justify-center rounded-full bg-transparent text-gray-300 hover:bg-blue-400/20 hover:text-blue-400 transition-colors duration-300"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center hover:scale-110 rounded-full bg-transparent text-gray-300 hover:bg-blue-400/20 hover:text-blue-400 transition-colors duration-300"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>

            <div className="ml-2 lg:ml-3 h-8 w-8 lg:h-10 lg:w-10 rounded-full bg-blue-400/20 ring-2 ring-blue-400/30 overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsbLP2_lof0oJYDC4gTTmDigj_vKcPpMUyRT8igjO7aUqrzS2Hq6bEeSJ7FSdeuDDPHb4SGQkelriIzwJ0BBnBHk3uBiaUgjfhKlJ1Nd3lBEF91A1WVYfWzo_hv0SNYH3LFoKH5wOFo8KkwBiINtunSQhJL8igUNSEz72GRP62YUDiRE2sl-Tcfhelho24euvi7Jpv4fXPvpk3_YVI1NXWgshrUOm60QwzVlj5YJlGZt4ajvRxVrJ39alabI1YLKKUXw9pAVjBOy5C"
                alt="Profile"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-md border-t border-gray-700/30">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left py-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="block w-full text-left py-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left py-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
              >
                Projects
              </button>
              
              {/* Mobile Social Icons */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-700/30">
                <a
                  href="https://github.com/Anxhhhh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-gray-300 hover:bg-blue-400/20 hover:text-blue-400 transition-colors duration-300"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/anshraj-singh-thakur-349ab533b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-gray-300 hover:bg-blue-400/20 hover:text-blue-400 transition-colors duration-300"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-gray-300 hover:bg-blue-400/20 hover:text-blue-400 transition-colors duration-300"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
