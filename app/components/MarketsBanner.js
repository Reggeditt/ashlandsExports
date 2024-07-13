import React from 'react';

const MarketsBanner = () => {
  return (
    <div className="bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: "url('/markets-banner.jpg')" }}>
      <h1 className="text-4xl text-white font-bold">Our Markets</h1>
    </div>
  );
};

export default MarketsBanner;
