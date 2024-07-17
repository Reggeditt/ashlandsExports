import React from 'react';

const AboutBanner = () => {
  return (
    <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('/images/logo.png')", backgroundSize: 'contain' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-white backdrop-blur-xl p-5">About Us</h1>
      </div>
    </div>
  );
};

export default AboutBanner;
