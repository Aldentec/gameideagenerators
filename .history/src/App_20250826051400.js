import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import FeelingLucky from './components/FeelingLucky/FeelingLucky';
import GeneratorsSection from './components/GeneratorsSection/GeneratorsSection';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <GeneratorsSection />
      <FeelingLucky />
      <About />
      <Footer />
    </div>
  );
}

export default App;