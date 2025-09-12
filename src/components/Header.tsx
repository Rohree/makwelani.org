import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-primary-blue p-2 rounded-lg">
              <Heart className="h-6 w-6 text-white" fill="currentColor" />
            </div>
            <span className="font-heading font-bold text-xl text-primary-blue">
              Children's Futures Foundation
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-text-primary hover:text-primary-blue font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-text-primary hover:text-primary-blue font-medium transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-text-primary hover:text-primary-blue font-medium transition-colors"
            >
              What We Do
            </button>
            <button
              onClick={() => scrollToSection('impact')}
              className="text-text-primary hover:text-primary-blue font-medium transition-colors"
            >
              Why It Matters
            </button>
            <button
              onClick={() => scrollToSection('get-involved')}
              className="text-text-primary hover:text-primary-blue font-medium transition-colors"
            >
              Get Involved
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-text-primary hover:text-primary-blue font-medium transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('get-involved')}
              className="bg-primary-orange text-white px-6 py-2 rounded-lg font-heading font-bold text-sm hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              DONATE NOW
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-primary hover:text-primary-blue"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-text-primary hover:text-primary-blue font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-text-primary hover:text-primary-blue font-medium"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-text-primary hover:text-primary-blue font-medium"
              >
                What We Do
              </button>
              <button
                onClick={() => scrollToSection('impact')}
                className="block w-full text-left px-3 py-2 text-text-primary hover:text-primary-blue font-medium"
              >
                Why It Matters
              </button>
              <button
                onClick={() => scrollToSection('get-involved')}
                className="block w-full text-left px-3 py-2 text-text-primary hover:text-primary-blue font-medium"
              >
                Get Involved
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-text-primary hover:text-primary-blue font-medium"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <button
                  onClick={() => scrollToSection('get-involved')}
                  className="w-full bg-primary-orange text-white px-4 py-2 rounded-lg font-heading font-bold text-sm hover:bg-opacity-90 transition-all"
                >
                  DONATE NOW
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;