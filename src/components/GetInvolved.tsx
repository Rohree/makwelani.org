
import { Heart, Handshake, Users, FileText, ArrowRight } from 'lucide-react';
import Image from '../assets/image-1.png';

const GetInvolved = () => {
  const ways = [
    {
      icon: Heart,
      title: "Donate",
      description: "Make a direct impact by supporting our compliance programs and training initiatives.",
      cta: "DONATE NOW",
      color: "primary-orange",
      hoverColor: "accent-green"
    },
    {
      icon: Handshake,
      title: "Partner",
      description: "Join us as a corporate partner or institutional supporter to expand our reach.",
      cta: "BECOME A PARTNER",
      color: "primary-blue",
      hoverColor: "accent-green"
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Share your skills and expertise to help train caregivers and support our mission.",
      cta: "VOLUNTEER TODAY",
      color: "accent-green",
      hoverColor: "primary-blue"
    },
    {
      icon: FileText,
      title: "Apply for Support",
      description: "Is your orphanage ready for compliance support? Apply for our comprehensive programs.",
      cta: "APPLY NOW",
      color: "primary-blue",
      hoverColor: "primary-orange"
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="get-involved" className="py-16 lg:py-24 bg-bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-primary-blue mb-6">
            Get Involved
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            There are many ways to join our mission of creating safer, more sustainable orphanages for vulnerable children.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {ways.map((way, index) => {
            const IconComponent = way.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100">
                <div className={`bg-${way.color} p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl text-primary-blue mb-4 text-center">
                  {way.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-center">
                  {way.description}
                </p>
                <button
                  onClick={scrollToContact}
                  className={`w-full bg-${way.color} hover:bg-${way.hoverColor} text-white px-6 py-3 rounded-lg font-heading font-bold text-sm transition-all flex items-center justify-center space-x-2`}
                >
                  <span>{way.cta}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Donation Levels */}
        <div   className="bg-cover bg-center rounded-2xl p-8 lg:p-12 b"
               style={{ backgroundImage: `url(${Image})` }}
          >
          <div className="text-center mb-12">
            <h3 className="font-heading font-bold text-2xl text-primary-orange shadow-lg bg-bg-neutral py-2 rounded-md bg-opacity-5 mb-4 uppercase">
              This how your Donations Makes a Difference
            </h3>
            
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="font-heading font-bold text-3xl text-primary-orange mb-2">Legal Compliance</div>
              <p className="text-gray-600 text-sm">We guide orphanages through complex registration processes, licensing requirements, and regulatory audits to ensure full legal compliance.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border-2 border-accent-green">
              <div className="font-heading font-bold text-3xl text-accent-green mb-2">Community Building</div>
              <p className="text-gray-600 text-sm">We collaborate with local businesses to provide essential care packages that support the well-being of children in orphanages, while fostering shared responsibility and community involvement</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="font-heading font-bold text-3xl text-primary-blue mb-2">Brighter Future</div>
              <p className="text-gray-600 text-sm">By meeting their immediate needs and nurturing their growth, we help open doors to education, health, and a sense of belonging—empowering each child to dream bigger and thrive</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;