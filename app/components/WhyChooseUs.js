const WhyChooseUs = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Why Choose Us?</h2>
        <p className="mt-4 max-w-2xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-red-600 text-white p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">1</div>
            <h3 className="text-xl font-semibold mt-4">Trusted</h3>
            <p className="mt-2">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="text-center">
            <div className="bg-red-600 text-white p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">2</div>
            <h3 className="text-xl font-semibold mt-4">Best Security</h3>
            <p className="mt-2">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="text-center">
            <div className="bg-red-600 text-white p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">3</div>
            <h3 className="text-xl font-semibold mt-4">100% Guarantee</h3>
            <p className="mt-2">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="text-center">
            <div className="bg-red-600 text-white p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">4</div>
            <h3 className="text-xl font-semibold mt-4">24/7 Support</h3>
            <p className="mt-2">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
