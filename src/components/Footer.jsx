import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white py-8">
      <div className="footer-links mb-4">
        <a href="#features" className="mx-3 hover:text-yellow-400">Features</a>
        <a href="#games" className="mx-3 hover:text-yellow-400">Games</a>
        <a href="#about" className="mx-3 hover:text-yellow-400">About</a>
      </div>

      <div className="social-links mb-4">
        <a href="#" className="mx-3 text-lg hover:text-yellow-400"><i className="fab fa-twitter"></i></a>
        <a href="#" className="mx-3 text-lg hover:text-yellow-400"><i className="fab fa-facebook"></i></a>
        <a href="#" className="mx-3 text-lg hover:text-yellow-400"><i className="fab fa-instagram"></i></a>
      </div>

      <p className="text-center text-sm">&copy; 2024 PixelZone. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
