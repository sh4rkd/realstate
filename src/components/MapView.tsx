import React from 'react';

const MapView: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Map View</h2>
        <div className="relative group">
          <div className="w-1 h-1 bg-gray-500 rounded-full mb-1"></div>
          <div className="w-1 h-1 bg-gray-500 rounded-full mb-1"></div>
          <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
        </div>
      </div>
      <div className="bg-gray-200 h-full rounded-lg">
        <img src={new URL('../assets/Map.png', import.meta.url).href} alt="" />
      </div>
    </div>
  );
};

export default MapView;