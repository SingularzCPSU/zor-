import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

 

  return (
    <section
      className="hero text-center py-24 bg-cover bg-center text-yellow-400 h-[80vh]" 
      style={{ backgroundImage: "url('images/background.jpg')" }}
    >
      <h1 className="text-4xl md:text-6xl font-bold m-t-20">Welcome to PixelZone</h1>
      <p className="mt-4 text-lg md:text-xl">Your retro gaming paradise!</p>
      <button
        className="cta-button mt-6 bg-yellow-400 text-gray-900 py-3 px-6 text-lg rounded-lg hover:scale-110 transition-transform"
        
      >
        Join Now
      </button>
    </section>
  );
};

export default Hero;
