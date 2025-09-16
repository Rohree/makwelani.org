
import { Shield, Users} from 'lucide-react';
import image1 from '../assets/image-1.png';

const Hero = () => {


  return (
    <section id="home" className="pt-16 bg-bg-neutral">
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
                <span>Community Engagement</span>
              </div>
            </div>

          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl rotate-6">
              <img
                src={image1}
                alt="Children playing and learning together"
                className="md:w-full md:h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Hero;