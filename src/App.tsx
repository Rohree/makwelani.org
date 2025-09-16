
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import WhatWeDo from './components/WhatWeDo';
import WhyItMatters from './components/WhyItMatters';
import GetInvolved from './components/GetInvolved';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cta from './components/Cta';

function App() {
  return (
    <div className="min-h-screen bg-white font-body text-text-primary">
      <Header />
      <main>
        <Hero />
        <Cta />
        <AboutUs />
        <WhatWeDo />
        <WhyItMatters />
        <GetInvolved />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;