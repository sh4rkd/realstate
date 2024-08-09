import React from 'react';
import PropertyCard from './PropertyCard';

interface Property {
  name: string;
  price: string;
  location: string;
  image: string;
  isYearlyRental?: boolean;
}

const PropertyGrid: React.FC = () => {
  const properties: Property[] = [
    { name: 'The Stables', price: '9540.99', location: 'Terry Lane, Golden CO 80403', image: '/assets/properties/the_stables.svg'},
    { name: 'The Old Rectory', price: '5999.99', location: 'Yule Street, Arvada CO 80007', image: '/assets/properties/the_old_rectory.svg'},
    { name: 'Holly Cottage', price: '2998.99', location: 'Alice Court, Annapolis MD 21401', image: '/assets/properties/holly_cottage.svg'},
    { name: 'Meadow View', price: '9540.99', location: 'Doane Street, Fremont CA 94538', image: '/assets/properties/meadow_view.svg'},
    { name: 'Greenacres', price: '5999.99', location: 'Terry Lane, Golden CO 80403', image: '/assets/properties/greenacres.svg'},
    { name: 'White Cottage', price: '2998.99', location: 'Yule Street, Arvada CO 80007', image: '/assets/properties/white_cottage.svg'},
    { name: 'Yearly Rental', price: '32,000', location: 'Doane Street, Fremont CA 94538', image: '/assets/properties/yearly_rental.svg', isYearlyRental: true },
  ];

  return (
    <div className="grid grid-cols-3 gap-6">
      {properties.map((property, index) => (
        <div key={index} className={`${index === properties.length - 1 ? 'col-span-3' : ''}`}>
          <PropertyCard {...property} />
        </div>
      ))}
    </div>
  );
};

export default PropertyGrid;