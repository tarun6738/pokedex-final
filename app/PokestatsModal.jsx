// PokemonStatsModal.jsx
import React from 'react';

const PokemonStatsModal = ({ pokemon, onClose }) => {
  const getProgressBarColor = (value) => {
    if (value >= 90) {
      return 'bg-green-500';
    } else if (value >= 60) {
      return 'bg-yellow-500';
    } else {
      return 'bg-red-500'; 
    }
  };

  return (
    <div className="modal">
      <div className="modal-content p-4 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">
          {pokemon && pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} Stats
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:pr-4 mb-4 md:mb-0 mr-8">
            <img
              className="mt-6 w-full md:w-96 lg:w-96 xl:w-96 h-auto object-cover"
              src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon && pokemon.index}.svg`}
              alt={pokemon && pokemon.name}
            />
          </div>
          <div className="mt-4 md:mt-0 md:pl-4 w-full">
            {pokemon &&
              pokemon.stats.map((stat) => (
                <div key={stat.stat.name} className="mb-4">
                  <p className="text-sm mb-2">
                    {stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}: {stat.base_stat}
                  </p>
                  <div className="w-full h-4 relative max-w-xl md:max-w-full bg-gray-200 rounded overflow-hidden">
                    <div
                      className={`h-full ${getProgressBarColor(
                        stat.base_stat
                      )}`}
                      style={{
                        width: `${(stat.base_stat / 150) * 100}%`, 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <button
          className="mt-4 p-2 bg-blue-500 text-white rounded cursor-pointer"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PokemonStatsModal;
