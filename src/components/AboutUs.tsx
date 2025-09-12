import React from 'react';
import { Target, Users, Award } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-primary-blue mb-6">
            About Children's Futures Foundation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a dedicated non-profit organization committed to transforming the lives of vulnerable children by empowering the orphanages that care for them.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-blue p-3 rounded-lg flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-primary-blue mb-2">Who We Are</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A passionate team of child welfare advocates, legal experts, and community builders working to ensure every orphanage operates at the highest standards of care, safety, and legal compliance.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-orange p-3 rounded-lg flex-shrink-0">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-primary-blue mb-2">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To ensure safe, sustainable, and legally registered children's homes by providing comprehensive support, training, and advocacy that protects children and empowers caregivers.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent-green p-3 rounded-lg flex-shrink-0">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-primary-blue mb-2">Our Impact</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Since our founding, we have helped over 25 orphanages achieve full legal compliance, directly improving the lives of more than 500 children across underserved communities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/8363026/pexels-photo-8363026.jpeg"
                alt="Caregivers and children in a supportive environment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="font-heading font-bold text-4xl text-primary-orange mb-2">500+</div>
            <div className="text-gray-600">Children Protected</div>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-4xl text-primary-blue mb-2">25+</div>
            <div className="text-gray-600">Orphanages Supported</div>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-4xl text-accent-green mb-2">100%</div>
            <div className="text-gray-600">Compliance Rate</div>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-4xl text-primary-orange mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;