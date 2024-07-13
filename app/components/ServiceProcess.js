const ServiceProcess = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center">Our Service Process</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 text-center">
        <div>
          <img src="/step1.png" alt="Select Freight" className="mx-auto"/>
          <h3 className="text-xl font-semibold mt-4">Select Freight</h3>
        </div>
        <div>
          <img src="/step2.png" alt="Create Invoice" className="mx-auto"/>
          <h3 className="text-xl font-semibold mt-4">Create Invoice</h3>
        </div>
        <div>
          <img src="/step3.png" alt="Secure Payment" className="mx-auto"/>
          <h3 className="text-xl font-semibold mt-4">Secure Payment</h3>
        </div>
        <div>
          <img src="/step4.png" alt="Fast Delivery" className="mx-auto"/>
          <h3 className="text-xl font-semibold mt-4">Fast Delivery</h3>
        </div>
      </div>
    </div>
  );
};

export default ServiceProcess;
