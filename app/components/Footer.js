const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold">Contact Info</h3>
          <p className="mt-4">Address: 123 Main Street, Anytown, USA</p>
          <p className="mt-2">Phone: +123 456 789</p>
          <p className="mt-2">Email: info@ashlands.com</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold">Useful Links</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="/" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="/" className="hover:underline">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold">Opening Hours</h3>
          <p className="mt-4">Mon - Fri: 9:00 AM - 5:00 PM</p>
          <p className="mt-2">Sat: 10:00 AM - 2:00 PM</p>
          <p className="mt-2">Sun: Closed</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
