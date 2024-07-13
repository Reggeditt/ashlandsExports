import React from 'react';

const MarketSegment = ({ image, title, description }) => {
  return (
    <div className="w-full md:w-1/3 p-4">
      <div className="bg-white shadow-md rounded-md overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MarketSegment;
