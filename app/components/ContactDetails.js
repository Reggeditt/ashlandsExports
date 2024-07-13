import React from 'react';

const ContactDetails = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-md p-4">
          <h3 className="text-xl font-bold mb-4">Corporate Office</h3>
          <p>Address: Export House, 24, Road 130, Gulshan-1, Dhaka 1212, Bangladesh.</p>
          <p>Telephone No: +88-01711-123456</p>
          <p>Fax No: +88-01711-123456</p>
          <p>Email: info@wshipping.com</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          <h3 className="text-xl font-bold mb-4">Section Office</h3>
          <p>Address: Export House, 24, Road 130, Gulshan-1, Dhaka 1212, Bangladesh.</p>
          <p>Telephone No: +88-01711-123456</p>
          <p>Fax No: +88-01711-123456</p>
          <p>Email: info@wshipping.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
