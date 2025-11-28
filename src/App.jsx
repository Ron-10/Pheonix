import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero'; // Will create this next
import HomeIntro from './components/home/HomeIntro';
import BrandsGrid from './components/home/BrandsGrid';
import CorporateSolutions from './components/home/CorporateSolutions';
import BusinessNetwork from './components/home/BusinessNetwork';
import AboutValues from './components/home/AboutValues';
import Testimonials from './components/home/Testimonials';
import Inspiration from './components/home/Inspiration';

import Contact from './pages/Contact';
import About from './pages/About';
import Brands from './pages/Brands';
import Corporate from './pages/Corporate';
import Network from './pages/Network';
import Partner from './pages/Partner';

const Home = () => (
  <>
    <Hero />
    <HomeIntro />
    <BrandsGrid />
    <CorporateSolutions />
    <BusinessNetwork />
    <AboutValues />
    <Testimonials />
    <Inspiration />
  </>
);

import ScrollToTop from './components/layout/ScrollToTop';
import Preloader from './components/layout/Preloader';

function App() {
  return (
    <div className="app-container">
      <Preloader />
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/network" element={<Network />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
