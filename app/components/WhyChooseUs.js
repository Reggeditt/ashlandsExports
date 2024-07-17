const WhyChooseUs = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Why Choose Us?</h2>
        <p className="mt-4 max-w-2xl mx-auto">Discover what sets us apart in the agricultural industry.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-red-600 text-white p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">1</div>
            <h3 className="text-xl font-semibold mt-4">Trusted Expertise</h3>
            <p className="mt-2">With years of experience, we bring a wealth of knowledge and reliability to every project.</p>
          </div>
          <div className="text-center">
            <div className="bg-red-600 text-white p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">2</div>
            <h3 className="text-xl font-semibold mt-4">Sustainable Practices</h3>
            <p className="mt-2">Our commitment to sustainable farming ensures that our practices benefit the environment and future generations.</p>
          </div>
          <div className="text-center">
            <div className="bg-red-600 text-white p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">3</div>
            <h3 className="text-xl font-semibold mt-4">Quality Assurance</h3>
            <p className="mt-2">We adhere to the highest standards of quality, ensuring our products meet rigorous industry criteria.</p>
          </div>
          <div className="text-center">
            <div className="bg-red-600 text-white p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">4</div>
            <h3 className="text-xl font-semibold mt-4">Innovation & Technology</h3>
            <p className="mt-2">We utilize cutting-edge technology to enhance productivity and product quality.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
