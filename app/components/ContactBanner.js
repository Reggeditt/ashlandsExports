import React from 'react';

const ContactBanner = () => {
  return (
    <div className="bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: "url('/contact-banner.jpg')" }}>
      <h1 className="text-4xl text-white font-bold">Contact Us</h1>
    </div>
  );
};

export default ContactBanner;
