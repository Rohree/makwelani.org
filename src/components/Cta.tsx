import { ArrowRight } from 'lucide-react';

const Cta = () => {
      const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };
  return (
        <section id="home" className="pt-16 bg-bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 text-center">
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
                onClick={() => scrollToSection('get-involved')}
                className="bg-primary-orange text-white px-8 py-4 rounded-lg font-heading font-bold text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
            >
                <span>DONATE</span>
                <ArrowRight className="h-5 w-5" />
            </button>
            <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-primary-blue text-primary-blue px-8 py-4 rounded-lg font-heading font-bold text-lg hover:bg-primary-blue hover:text-white transition-all flex items-center justify-center space-x-2"
            >
                <span>APPLY FOR SUPPORT</span>
            </button>
            </div>
        </div>
        </section>
    
  )
}

export default Cta