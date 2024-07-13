const Services = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="text-center p-4">
          <img src="/service1.jpg" alt="Ocean Freight Shipping" className="w-full h-40 object-cover"/>
          <h3 className="text-xl font-semibold mt-4">Ocean Freight Shipping</h3>
          <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="text-center p-4">
          <img src="/service2.jpg" alt="Air Freight Shipping" className="w-full h-40 object-cover"/>
          <h3 className="text-xl font-semibold mt-4">Air Freight Shipping</h3>
          <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="text-center p-4">
          <img src="/service3.jpg" alt="Car Shipping" className="w-full h-40 object-cover"/>
          <h3 className="text-xl font-semibold mt-4">Car Shipping</h3>
          <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
