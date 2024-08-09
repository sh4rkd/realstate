import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-100">
      <nav className="border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <a href="#" className="text-orange-600 border-b-2 border-orange-600 font-bold py-4 px-2 pb-1 mb-2">Buy</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 py-4 px-1">Sell</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 py-4 px-1">Rent</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 py-4 px-1">Compare</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;