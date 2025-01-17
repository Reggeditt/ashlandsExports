import Image from 'next/image';
import React from 'react';

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <Image width={200} height={200} src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <a href="https://wa.me/+233244510845" className="text-red-500 mt-4 block hover:underline">Learn More</a>
      </div>
    </div>
  );
};

export default ServiceCard;
