import React from 'react';

const Games = () => {
  const games = [
    { id: 1, title: 'Pixel Adventure', description: 'Explore retro worlds full of challenges.', image: '/images/image1.jpg' },
    { id: 2, title: 'Block Wars', description: 'Build, fight, and conquer in pixel arenas.', image: '/images/image2.jpg' },
    { id: 3, title: 'Puzzle Pixels', description: 'Solve puzzles one pixel at a time.', image: '/images/image3.jpg' },
  ];

  return (
    <section id="games" className="py-12 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Games</h2>
      <div className="game-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {games.map(game => (
          <div key={game.id} className="game-card bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            <img src={game.image} alt={game.title} className="w-full h-74 object-cover" /> {/* Adjusted height */}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Press Start 1P', cursive" }}>{game.title}</h3>
              <p className="text-sm" style={{ fontFamily: "'Press Start 0P', cursive" }}>{game.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Games;
