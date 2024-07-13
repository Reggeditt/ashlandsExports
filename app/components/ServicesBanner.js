import React from 'react';

const ServicesBanner = () => {
  return (
    <div className="bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: "url('/services-banner.jpg')" }}>
      <h1 className="text-4xl text-white font-bold">Our Services</h1>
    </div>
  );
};

export default ServicesBanner;
