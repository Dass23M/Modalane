import React from 'react';
import './styles.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CuratedLooks } from './components/CuratedLooks';
import { AboutSection } from './components/AboutSection';
import { Benefits } from './components/Benefits';
import { CallToAction } from './components/CallToAction';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <CuratedLooks />
        <AboutSection />
        <Benefits />
        <CallToAction />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
