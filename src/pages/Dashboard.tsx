import React from 'react';
import Header from '../components/Header';
import PropertyGrid from '../components/PropertyGrid';
import RecentMessages from '../components/RecentMessages';
import MapView from '../components/MapView';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="mx-auto py-2 sm:px-6 lg:px-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm font-medium">249 Results</span>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Map View</span>
              <button className="w-12 h-6 bg-gray-300 rounded-full flex items-center transition-all duration-300 focus:outline-none shadow">
                <span className="w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300"></span>
              </button>
            </div>
          </div>
          <div className="flex space-x-4 mb-6">
            <div className="relative w-64">
              <input
                type="text"
                placeholder="Search Here..."
                className="w-full p-2 pr-10 border border-gray-300 rounded-full"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <span className="text-gray-400 mr-2">|</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Price"
                className="w-32 p-2 pr-10 border border-gray-300 rounded-full"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <span className="text-gray-400">$$</span>
              </div>
            </div>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-full flex items-center">
              2-4 Beds
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full flex items-center">
              Property Type
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="relative">
              <input
                type="text"
                placeholder="Filters"
                className="w-32 p-2 pr-10 border border-gray-300 rounded-full"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
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