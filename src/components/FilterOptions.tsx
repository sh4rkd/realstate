import React from 'react';

const FilterOptions: React.FC = () => {
  return (
    <div className="flex space-x-4 mb-6">
      <div className="relative flex-grow">
        <input
          type="text"
          placeholder="Search Here..."
          className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <span className="text-gray-400 mr-2">|</span>
          <img src="./src/assets/icons/search.svg" alt="Search" className="h-5 w-5" />
        </div>
      </div>
      <div className="relative w-32">
        <input
          type="text"
          placeholder="Price"
          className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <img src="./src/assets/icons/symbol.svg" alt="Chevron Down" className="h-5 w-5 text-white" />
        </div>
      </div>
      <div className="relative w-40">
        <select className="w-full pl-4 pr-10 py-2 bg-orange-600 text-white rounded-full appearance-none">
          <option>2-4 Beds</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <img src="./src/assets/icons/dropdown_active.svg" alt="Chevron Down" className="h-5 w-5 text-white" />
        </div>
      </div>
      <div className="relative flex-grow">
        <select className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full appearance-none">
          <option>Property Type</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <img src="./src/assets/icons/dropdown_inactive.svg" alt="Chevron Down" className="h-5 w-5 text-gray-400" />
        </div>
      </div>
      <div className="relative flex-grow">
        <input
          type="text"
          placeholder="Filters"
          className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <img src="./src/assets/icons/settings.svg" alt="Filter" className="h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default FilterOptions;