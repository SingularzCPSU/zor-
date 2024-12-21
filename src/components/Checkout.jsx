import React, { useEffect, useState } from "react";
import axios from "axios";

const Checkout = () => {
  const [games, setGames] = useState([]);

  // Fetch games data from RAWG API
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const apiKey = "26956a90d1af4f96a3864f7853f5712b"; // Use your RAWG API key here
        const response = await axios.get(`https://api.rawg.io/api/games?key=${apiKey}`);
        // Here we simulate a price field for each game, you can replace it with actual data if available
        const gamesWithPrice = response.data.results.map((game) => ({
          ...game,
          price: "$19.99", // You can replace this with actual price data if available
        }));
        setGames(gamesWithPrice);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, []);

  return (
    <section className="checkout py-24 px-6 bg-gray-700 text-white">
      <h2 className="text-3xl font-bold text-center text-yellow-400 mb-4">Checkout</h2>
      <p className="text-center text-lg mb-8">Browse and add your favorite games to the cart!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <div
            key={game.id}
            className="game-card bg-gray-800 rounded-lg p-4 flex flex-col items-center text-center"
          >
            <img
              src={game.background_image}
              alt={game.name}
              className="w-full h-80 object-cover mb-4" // Increased height to h-80 for larger images
            />
            <h3 className="text-xl font-semibold mb-2">{game.name}</h3>
            <div className="flex justify-between items-center w-full">
              <span className="text-lg font-bold text-yellow-400">
                Price: {game.price || "N/A"} {/* Display the price */}
              </span>
              <button
                className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-500"
                onClick={() => alert(`${game.name} added to cart!`)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Checkout;
