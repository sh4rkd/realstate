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
                <img className='h-4 w-4 mr-1' src={new URL('../assets/icons/location.svg', import.meta.url).href} alt="" />
                {location}
              </p>
              <hr className="w-10 h-1 my-4 border-orange-500 rounded bg-orange-300"></hr>
            </div>
            <p className="text-gray-500 text-sm">Overview</p>
          </div>
          <div className="py-3 px-3 cursor-cell">
              <img src={new URL("../assets/like.svg", import.meta.url).href} alt="" />
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

          <img className='h-4 w-4 mr-1' src={new URL('../assets/icons/location.svg', import.meta.url).href} alt="" />
          <span> </span>
          {location}
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;