import Image from 'next/image';
import React from 'react';

const ContactForm = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">{`We are always with you :)`}</h2>
      <div className="flex flex-wrap justify-center">
        <Image src="/contact-image.jpg" alt="Contact" width={500} height={500} className="w-full md:w-1/2 h-64 object-cover mb-8 md:mb-0" />
        <div className="w-full md:w-1/2 p-4">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="Your Full Name" className="p-2 border border-gray-300 rounded" />
              <input type="text" placeholder="Company" className="p-2 border border-gray-300 rounded" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input type="email" placeholder="Your Email" className="p-2 border border-gray-300 rounded" />
              <input type="text" placeholder="Phone Number" className="p-2 border border-gray-300 rounded" />
            </div>
            <textarea placeholder="Your Message" className="p-2 border border-gray-300 rounded w-full mb-4"></textarea>
            <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded w-full">Get a Free Quote</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
