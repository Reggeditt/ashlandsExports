import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesList = () => {
  const services = [
    {
      image: '/ocean-freight.jpg',
      title: 'Ocean Freight Shipping',
      description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard.',
    },
    {
      image: '/air-freight.jpg',
      title: 'Air Freight Shipping',
      description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard.',
    },
    {
      image: '/car-shipping.jpg',
      title: 'Car Shipping',
      description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard.',
    },
    // Add more services as needed
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
