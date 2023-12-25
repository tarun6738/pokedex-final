
import React from 'react';
import Image from 'next/image';
const PokemonCard = ({ name, id, imageUrl, types }) => {
  
  const capitalizedPokemonName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <>
    
    <div className={`max-w-xs mx-auto bg-white rounded-md overflow-hidden shadow-md mb-4 mt-10 sm:w-full lg:w-full xl:w-full h-52 transition-transform transform hover:scale-110 ${types[0]}`}>
      <div className="flex items-center justify-center h-full">
        <div className="w-1/2 bg-cover">
          <Image
            className="object-cover mx-auto"
            src={imageUrl}
            alt={name}
           width={160}
           height={18}
          />
        </div>
        <div className="w-1/2 p-2">
          <div className="font-bold text-xl mb-2">{capitalizedPokemonName}</div>
          <div className="text-gray-600 text-sm mb-2">ID: {id}</div>
          <div className="flex justify-around p-2">
          {types && types.length > 0 ? (
              types.map((type, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                >
                  {type}
                </span>
              ))
            ) : (
              <span className="text-gray-500">No types</span>
            )}
        </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default PokemonCard;
