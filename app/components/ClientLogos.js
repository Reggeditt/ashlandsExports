import Image from 'next/image';
import React from 'react';

const ClientLogos = () => {
  const clients = [
    '/client1.png',
    '/client2.png',
    '/client3.png',
    // Add more client logos as needed
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h3 className="text-2xl font-bold text-center mb-8">Our Valuable Clients</h3>
        <div className="flex flex-wrap justify-center items-center space-x-4">
          {clients.map((client, index) => (
            <Image key={index} src={client} width={500} height={500} alt="Client Logo" className="h-12"/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
