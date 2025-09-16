
import { Target, Users } from 'lucide-react';
import image from '../assets/image-2.png';
import image2 from '../assets/image-3.png';

const AboutUs = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-primary-blue mb-6">
            Makwelani Childrens Foundation
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
            </div>
          </div>

          {/* Image */}
            <div className="relative w-full max-w-xs sm:max-w-md mx-auto overflow-visible">
              {/* Bottom photo */}
              <div className="absolute top-4 left-12 w-full  rounded-2xl overflow-hidden shadow-xl rotate-[-6deg] z-20">
                <img
                  src={image2}
                  alt="Second photo"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top photo */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl rotate-[3deg] z-10">
                <img
                  src={image}
                  alt="First photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;