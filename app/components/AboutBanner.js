import React from 'react';

const AboutBanner = () => {
  return (
    <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('/about-banner.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-white">About Us</h1>
        <p className="text-white">Home / About Us</p>
      </div>
    </div>
  );
};

export default AboutBanner;
