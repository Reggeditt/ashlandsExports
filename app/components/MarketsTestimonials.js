import React from 'react';

const MarketsTestimonials = () => {
  return (
    <div className="container mx-auto py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Client Testimonials</h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white shadow-md rounded-md p-4">
            <p className="italic">{`"Great service and excellent support! We have expanded our market reach significantly."`}</p>
            <p className="mt-4 text-right">- Client Name, Company</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white shadow-md rounded-md p-4">
            <p className="italic">{`"Their expertise in global markets is unmatched. Highly recommend their services."`}</p>
            <p className="mt-4 text-right">- Client Name, Company</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketsTestimonials;
