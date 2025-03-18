import React, { useState } from 'react';
import Container from './Container';
import Image from './Image';
import Button from './Button';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
        <Container>
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  <Image 
                    src="/images/logo-vector1.svg" 
                    alt="Logo Part 1"
                    className="h-8 w-auto"
                  />
                  <Image 
                    src="/images/logo-vector2.svg" 
                    alt="Logo Part 2"
                    className="h-8 w-auto -ml-3"
                  />
                  <Image 
                    src="/images/logo-vector3.svg" 
                    alt="Logo Part 3"
                    className="h-8 w-auto -ml-3"
                  />
                  <Image 
                    src="/images/logo-vector4.svg" 
                    alt="Logo Part 4"
                    className="h-8 w-auto -ml-3"
                  />
                </div>
                <Image 
                  src="/images/logo-text.svg" 
                  alt="Nextcent"
                  className="h-6 w-auto ml-2"
                />
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-secondary hover:text-primary transition-colors">Home</a>
              <a href="#" className="text-secondary hover:text-primary transition-colors">Features</a>
              <a href="#" className="text-secondary hover:text-primary transition-colors">Community</a>
              <a href="#" className="text-secondary hover:text-primary transition-colors">Blog</a>
              <Button variant="primary" size="small">
                Register Now
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg 
                className="w-6 h-6 text-secondary" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};

export default Header; 