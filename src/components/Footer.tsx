import React from 'react';
import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <footer className="bg-primary-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Mission */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-white p-2 rounded-lg">
                <Heart className="h-6 w-6 text-primary-blue" fill="currentColor" />
              </div>
              <span className="font-heading font-bold text-xl">
                Children's Futures Foundation
              </span>
            </div>
            <p className="text-blue-100 leading-relaxed mb-6">
              Building stronger orphanages and protecting brighter futures for vulnerable children through comprehensive legal compliance support, training, and advocacy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  What We Do
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('impact')}
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Why It Matters
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('get-involved')}
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Get Involved
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-blue-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-blue-100">info@childrensfutures.org</p>
                </div>
              </div>
              <div className="text-blue-100">
                <p>123 Hope Street</p>
                <p>Compassion City, CC 12345</p>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="border-t border-blue-400 pt-12 mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-heading font-bold text-3xl text-primary-orange mb-2">500+</div>
              <div className="text-blue-100">Children Protected</div>
            </div>
            <div>
              <div className="font-heading font-bold text-3xl text-accent-green mb-2">25+</div>
              <div className="text-blue-100">Orphanages Supported</div>
            </div>
            <div>
              <div className="font-heading font-bold text-3xl text-white mb-2">100%</div>
              <div className="text-blue-100">Compliance Rate</div>
            </div>
            <div>
              <div className="font-heading font-bold text-3xl text-primary-orange mb-2">15+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-blue-400 pt-8 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-blue-100 mb-4 lg:mb-0">
            © 2024 Children's Futures Foundation. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-blue-100 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-blue-100 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-blue-100 hover:text-white transition-colors">
              Annual Report
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;