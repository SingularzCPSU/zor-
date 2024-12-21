import React from 'react';

const About = () => {
  return (
    <>
      <section id="about" className="about py-12 px-6 bg-gray-700 text-white">
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-4">About Us</h2>
        <p className="text-center text-lg">
          We are nostalgic gamers creating a retro gaming hub.
        </p>
      </section>

      <section id="contact" className="contact py-12 px-6 bg-gray-800 text-white">
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-4">Contact Us</h2>
        <p className="text-center text-lg">
          Email us at: <a href="mailto:support@pixelzone.com" className="text-yellow-400">support@pixelzone.com</a>
        </p>
      </section>
    </>
  );
};

export default About;
