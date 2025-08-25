import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import GeneratorsSection from './components/GeneratorsSection/GeneratorsSection';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <GeneratorsSection />
      <Footer />
    </div>
  );
}

export default App;