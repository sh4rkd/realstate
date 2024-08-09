import React from 'react';

interface PropertyCardProps {
  name: string;
  price: string;
  location: string;
  image: string;
  isYearlyRental?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ name, price, location, image, isYearlyRental }) => {
  if (isYearlyRental) {
    return (
      <div className="cursor-pointer bg-gray-100 hover:bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
        <div className="flex h-full">
          <div className="w-1/2 relative">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
          <div className="w-1/2 p-4 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-xl mb-2">$ {price}/ Year</h3>
              <p className="text-gray-600 text-sm mb-2 flex items-center font-inter">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {location}
              </p>
              <hr className="w-10 h-1 my-4 border-orange-500 rounded bg-orange-300"></hr>
            </div>
            <p className="text-gray-500 text-sm">Overview</p>
          </div>
          <div className="py-3 px-3 cursor-cell">
              <img src="./src/assets/like.svg" alt="" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cursor-pointer bg-gray-100 hover:bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <div className="p-3">
        <div className="relative h-30 overflow-hidden rounded-xl">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{name}</h3>
        <p className="text-orange-500 font-bold mb-2">$ {price}</p>
        <p className="text-gray-600 text-sm flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {location}
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;