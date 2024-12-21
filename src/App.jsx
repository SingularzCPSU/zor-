import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing components
import Hero from './components/Hero';
import Header from './components/Header';
import Features from './components/Features';
import Games from './components/Games';
import About from './components/About';
import Footer from './components/Footer';
import Checkout from './components/Checkout';  // Import Checkout page
import './App.css'; 
// Home component that combines all the sections
const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Games />
      <About />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Header will be visible on all pages */}
        <Header />

        {/* Define routes for the homepage and checkout page */}
        <Routes>
          <Route path="/" element={<Home />} />  {/* Home page route */}
          <Route path="/checkout" element={<Checkout />} /> {/* Checkout page route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
