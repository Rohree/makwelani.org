import React from 'react';
import { ArrowRight, Shield, Users, Heart } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="home" className="pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="font-heading font-bold text-4xl lg:text-6xl text-primary-blue leading-tight">
                Building Stronger Orphanages, 
                <span className="text-primary-orange"> Protecting Brighter Futures</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                We help small orphanages and children's homes meet legal, safety, and compliance standards—so every child can grow up safe and supported.
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 items-center text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-accent-green" />
                <span>Legal Compliance</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-accent-green" />
                <span>Caregiver Training</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-accent-green" />
                <span>Child Safety</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('get-involved')}
                className="bg-primary-orange text-white px-8 py-4 rounded-lg font-heading font-bold text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>DONATE</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => scrollToSection('get-involved')}
                className="bg-primary-blue text-white px-8 py-4 rounded-lg font-heading font-bold text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>PARTNER WITH US</span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-primary-blue text-primary-blue px-8 py-4 rounded-lg font-heading font-bold text-lg hover:bg-primary-blue hover:text-white transition-all flex items-center justify-center space-x-2"
              >
                <span>APPLY FOR SUPPORT</span>
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/8363186/pexels-photo-8363186.jpeg"
                alt="Children playing and learning together"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="font-heading font-bold text-3xl text-primary-orange">500+</div>
                <div className="text-sm text-gray-600">Children Protected</div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-accent-green p-4 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="font-heading font-bold text-2xl text-white">25+</div>
                <div className="text-xs text-white">Orphanages Supported</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;