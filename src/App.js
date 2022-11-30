import React from 'react';

// import components
import Header from './components/pages/Header';
import Hero from './components/pages/Hero';
import Brands from './components/pages/Brands';
import About from './components/pages/About';
import Portfolio from './components/pages/projects/Portfolio';
import Skills from './components/pages/Skills';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';
import Testimonials from './components/pages/Testimonials';
import BackTopBtn from './components/helpers/BackTopBtn';

const App = () => {
  return (
    <div className='bg-white relative'>
      <Header />
      <Hero />
      <Brands />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <BackTopBtn />
    </div>
  );
};

export default App;
