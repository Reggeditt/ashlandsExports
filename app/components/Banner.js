import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative">
      <img src="/images/banner.jpg" alt="Welcome to Ashlands Exports" className="w-full h-96 object-cover"/>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-center text-white p-4">
          <h1 className="text-3xl md:text-4xl font-bold">Welcome to Ashlands Exports</h1>
          <p className="mt-4 text-sm md:text-lg">Farming the Future: Sustainable Agriculture for Global Growth</p>
          <button className="mt-6 px-4 py-2 bg-red-600 hover:bg-red-700 rounded"><Link href="https://wa.me/+233244510845">Contact Us</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
