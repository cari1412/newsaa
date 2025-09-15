import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import LogoTicker from './components/LogoTicker';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 antialiased">
      <NavBar />
      <main>
        <Hero />
        <LogoTicker />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;