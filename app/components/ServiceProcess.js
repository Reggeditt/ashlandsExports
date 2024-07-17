import Image from "next/image";

const ServiceProcess = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center">Our Service Process</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 text-center">
        <div className="m-w-[670px]">
          <Image width={500} height={500} src="/images/step1.jpg" alt="Select Freight" className="mx-auto"/>
          <h3 className="text-xl font-semibold mt-4">Initial Consultation</h3>
        </div>
        <div>
          <Image width={500} height={500} src="/images/step2.jpg" alt="Create Invoice" className="mx-auto"/>
          <h3 className="text-xl font-semibold mt-4">Customized Planning</h3>
        </div>
        <div>
          <Image width={500} height={500} src="/images/step3.jpg" alt="Create Invoice" className="mx-auto"/>
          <h3 className="text-xl font-semibold mt-4">Quality Sourcing</h3>
        </div>
        <div>
          <Image width={500} height={500} src="/images/step3a.jpg" alt="Secure Payment" className="mx-auto"/>
          <h3 className="text-xl font-semibold mt-4">Production</h3>
        </div>
        <div>
          <Image width={500} height={500} src="/images/step5a.jpg" alt="Fast Delivery" className="mx-auto"/>
          <h3 className="text-xl font-semibold mt-4">Quality Check</h3>
        </div>
        <div>
          <Image width={500} height={500} src="/images/step4.jpg" alt="Fast Delivery" className="mx-auto"/>
          <h3 className="text-xl font-semibold mt-4">Packaging</h3>
        </div>
        <div>
          <Image width={500} height={500} src="/images/step5.jpg" alt="Fast Delivery" className="mx-auto"/>
          <h3 className="text-xl font-semibold mt-4">Logistics & Export</h3>
        </div>
        <div>
          <Image width={500} height={500} src="/images/step6.jpg" alt="Fast Delivery" className="mx-auto"/>
          <h3 className="text-xl font-semibold mt-4">Client Feedback</h3>
        </div>
      </div>
    </div>
  );
};

export default ServiceProcess;
