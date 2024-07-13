// components/CallToAction.js
const CallToAction = () => (
  <div className="py-12 text-center">
    <h2 className="text-3xl font-semibold mb-4">Get In Touch With Us</h2>
    <p className="text-lg text-gray-700 mb-8">
      Contact us to learn more about our products and services, or sign up for updates to stay informed.
    </p>
    <div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-4">Contact Us</button>
      <button className="bg-green-500 text-white py-2 px-4 rounded-lg">Sign Up for Updates</button>
    </div>
  </div>
);

export default CallToAction;
