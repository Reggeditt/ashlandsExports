import React from 'react';

const ServicesBanner = () => {
  return (
    <div className="flex justify-center items-center relative bg-cover bg-center h-96" style={{ backgroundImage: "url('/images/logo.png')", backgroundSize: 'contain' }}>
      <h1 className="text-4xl text-white font-bold backdrop-blur-xl p-5">Our Products</h1>
    </div>
  );
};

export default ServicesBanner;
