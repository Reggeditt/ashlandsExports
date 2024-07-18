import Image from "next/image";

const Services = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="text-center p-4">
          <Image width={200} height={200} src="/images/services/service1.jpg" alt="Agricultural Products" className="w-full h-40 object-cover"/>
          <h3 className="text-xl font-semibold mt-4">Agricultural Products</h3>
          <p className="mt-2">We provide a wide array or medicinal seeds including hemp seeds, and moringa seeds, among others</p>
        </div>
        <div className="text-center p-4">
          <Image width={200} height={200} src="/images/services/service2.jpg" alt={`Export Services Photo by <a href="https://unsplash.com/@patwhelen?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Pat Whelen</a> on <a href="https://unsplash.com/photos/red-and-blue-cargo-containers-anrVHgYaLWI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  `} className="w-full h-40 object-cover"/>
          <h3 className="text-xl font-semibold mt-4">Export Services</h3>
          <p className="mt-2">We have the capacity to export to you wherever you are on the globe.</p>
        </div>
        <div className="text-center p-4">
          <Image width={200} height={200} src="/images/services/service3.jpg" alt={`Agro Processing Photo by <a href="https://unsplash.com/@simplyanna?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Anna Ansone</a> on <a href="https://unsplash.com/photos/a-row-of-three-glass-vases-filled-with-grains-hBBn2rZiTOo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  `} className="w-full h-40 object-cover"/>
          <h3 className="text-xl font-semibold mt-4">Agro Processing</h3>
          <p className="mt-2">We process the products to your specification and deliver it the in the form specified or requested.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
