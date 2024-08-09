import React from 'react';

const MapView: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Map View</h2>
        <button className="text-gray-400">•••</button>
      </div>
      <div className="bg-gray-200 h-64 rounded-lg"></div>
    </div>
  );
};

export default MapView;