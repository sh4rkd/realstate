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
    { name: 'The Stables', price: '9540.99', location: 'Terry Lane, Golden CO 80403', image: new URL('../assets/properties/the_stables.svg', import.meta.url).href },
    { name: 'The Old Rectory', price: '5999.99', location: 'Yule Street, Arvada CO 80007', image: new URL('../assets/properties/the_old_rectory.svg', import.meta.url).href },
    { name: 'Holly Cottage', price: '2998.99', location: 'Alice Court, Annapolis MD 21401', image: new URL('../assets/properties/holly_cottage.svg', import.meta.url).href },
    { name: 'Meadow View', price: '9540.99', location: 'Doane Street, Fremont CA 94538', image: new URL('../assets/properties/meadow_view.svg', import.meta.url).href },
    { name: 'Greenacres', price: '5999.99', location: 'Terry Lane, Golden CO 80403', image: new URL('../assets/properties/greenacres.svg', import.meta.url).href },
    { name: 'White Cottage', price: '2998.99', location: 'Yule Street, Arvada CO 80007', image: new URL('../assets/properties/white_cottage.svg', import.meta.url).href },
    { name: 'Yearly Rental', price: '32,000', location: 'Doane Street, Fremont CA 94538', image: new URL('../assets/properties/yearly_rental.svg', import.meta.url).href, isYearlyRental: true },
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