
import { Shield, Heart, TrendingUp, Users } from 'lucide-react';
import image1 from '../assets/image-1.png';
import image2 from '../assets/image-2.png';
import image3 from '../assets/image-3.png';

const WhyItMatters = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Protect Children",
      description: "Legal compliance ensures children are safe from harm and receive proper care in regulated, monitored environments."
    },
    {
      icon: Users,
      title: "Empower Caregivers",
      description: "Training and support help caregivers provide better care and create sustainable systems for long-term success."
    },
    {
      icon: Heart,
      title: "Build Trust",
      description: "Compliance builds community confidence, increasing support and donations from local and international partners."
    },
    {
      icon: TrendingUp,
      title: "Ensure Sustainability",
      description: "Well-structured, compliant orphanages are more likely to receive ongoing funding and support for continued operations."
    }
  ];

  return (
    <section id="impact" className="py-16 lg:py-24 bg-bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-primary-blue mb-6">
            Why It Matters
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Legal compliance isn't just about paperwork—it's about creating safe, sustainable environments where children can thrive and reach their full potential.
          </p>
        </div>
       <div className="relative w-full max-w-md mx-auto h-72 mb-60 ">
          <img
            src={image1}
            alt=""
            className="absolute w-80 md:top-0 md:right-48 md:w-full object-cover rounded-xl shadow-lg rotate-[-6deg]"
          />
          <img
            src={image2}
            alt=""
            className="absolute top-52 md:top-0 md:left-64 left-40 w-60 md:w-full object-cover rounded-xl shadow-lg rotate-[4deg]"
          />
          <img
            src={image3}
            alt=""
            className="absolute top-80 left-20 md:top-52 md:left-36 md:w-full w-64 object-cover rounded-xl shadow-lg rotate-[-3deg]"
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="bg-accent-green p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl text-primary-blue mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Impact Infographic */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="font-heading font-bold text-2xl text-primary-blue mb-4">
              The Impact of Compliance
            </h3>
            <p className="text-gray-600">
              See how legal compliance transforms orphanages and the lives of children
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 p-6 rounded-xl mb-4">
                <div className="font-heading font-bold text-3xl text-red-600 mb-2">Before</div>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Uncertain legal status</li>
                  <li>• Limited funding access</li>
                  <li>• Inadequate safety measures</li>
                  <li>• Lack of community trust</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-accent-green p-6 rounded-xl text-white mb-4">
                <div className="font-heading font-bold text-3xl mb-2">Our Work</div>
                <ul className="text-sm space-y-1">
                  <li>• Legal registration</li>
                  <li>• Staff training</li>
                  <li>• Safety protocols</li>
                  <li>• Community engagement</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-green-100 p-6 rounded-xl mb-4">
                <div className="font-heading font-bold text-3xl text-green-600 mb-2">After</div>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Full legal compliance</li>
                  <li>• Sustainable funding</li>
                  <li>• Enhanced child safety</li>
                  <li>• Strong community support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;