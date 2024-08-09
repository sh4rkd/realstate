import React from 'react';
import Header from '../components/Header';
import PropertyGrid from '../components/PropertyGrid';
import RecentMessages from '../components/RecentMessages';
import MapView from '../components/MapView';
import FilterOptions from '../components/FilterOptions';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-quicksand">
      <Header />
      <div className="mx-auto py-2 sm:px-6 lg:px-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xl font-medium">249 Results</span>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Map View</span>
              <button className="w-12 h-6 bg-gray-300 rounded-full flex items-center transition-all duration-300 focus:outline-none shadow">
                <span className="w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300"></span>
              </button>
            </div>
          </div>
          <FilterOptions />
          <div className="flex space-x-4 mb-6">
            <span className="text-orange-500 font-medium">Recommended</span>
            <span className="text-gray-500">Popular</span>
            <span className="text-gray-500">Nearest</span>
          </div>
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-3">
              <PropertyGrid />
            </div>
            <div className="space-y-6">
              <RecentMessages />
              <MapView />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;