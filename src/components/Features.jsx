import React from 'react';

const Features = () => {
  const features = [
    { id: 1, title: 'Pixel Graphics', icon: 'fas fa-th-large', description: 'Enjoy a retro look with a modern twist.' },
    { id: 2, title: 'Classic Soundtracks', icon: 'fas fa-music', description: 'Immerse yourself in chiptune music.' },
    { id: 3, title: 'Dynamic Levels', icon: 'fas fa-gamepad', description: 'Experience evolving challenges and rewards.' },
  ];

  return (
    <section id="features" className="features py-12 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl text-center font-bold text-white mb-8" >Features</h2>
      <div className="feature-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(feature => (
          <div key={feature.id} className="feature bg-gray-800 p-6 text-center rounded-lg shadow-xl transition-transform transform hover:translate-y-[-10px]">
            <i className={`${feature.icon} text-4xl text-yellow-400 mb-4`}></i>
            <h3 className="text-xl font-semibold text-yellow-400 mb-2" style={{ fontFamily: "'Press Start 0P', cursive" }}>{feature.title}</h3>
            <p className="text-gray-300" style={{ fontFamily: "'Press Start 0P', cursive" }}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
