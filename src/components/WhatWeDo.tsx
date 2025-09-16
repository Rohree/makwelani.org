
import { FileCheck, Store, Megaphone, CheckCircle } from 'lucide-react';

const WhatWeDo = () => {
  const services = [
    {
      icon: FileCheck,
      title: "Legal Compliance Support",
      description: "We guide orphanages through complex registration processes, licensing requirements, and regulatory audits to ensure full legal compliance.",
      features: ["Registration assistance", "Licensing support", "Compliance audits", "Documentation review"]
    },
    {
      icon: Megaphone,
      title: "Advocacy & Awareness",
      description: "We promote best practices in child welfare, advocate for children's rights, and work to build community trust in child care institutions.",
      features: ["Community outreach", "Best practices promotion", "Child rights advocacy", "Trust building initiatives"]
    },
    {
      icon: Store,
      title: "Community Partnerships",
      description: "We collaborate with local businesses to provide essential care packages that support the well-being of children in orphanages, while fostering shared responsibility and community involvement.",
      features: ["Local suppliers", "Nutritious food and hygiene items", "Sustainable support systems", "Strengthening community ties"]
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-primary-blue mb-6">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive approach ensures orphanages have everything they need to provide safe, nurturing environments for the children in their care.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
                <div className="mb-6">
                  <div className="bg-primary-orange p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-primary-blue mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent-green flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <h3 className="font-heading font-bold text-2xl text-center text-primary-blue mb-12">
            Our Process
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment", desc: "Initial evaluation of current compliance status" },
              { step: "02", title: "Planning", desc: "Develop customized compliance roadmap" },
              { step: "03", title: "Implementation", desc: "Execute training and compliance measures" },
              { step: "04", title: "Monitoring", desc: "Ongoing support and compliance monitoring" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-accent-green text-white w-12 h-12 rounded-full flex items-center justify-center font-heading font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-heading font-bold text-lg text-primary-blue mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;