import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold">Contact Info</h3>
          <p className="mt-4">P. O. Box Ks 204 Kumasi, Ashanti Region, Ghana</p>
          <p className="mt-2">Phone: +233 24 451 0845</p>
          <Link className="mt-2" href="https://wa.me/+233244510845">Click to Whatsapp Us</Link>
          <p className="mt-2">Email: info@ashlands.com</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold">Useful Links</h3>
          <ul className="mt-4 space-y-2">
            <li><Link href="#faq" className="hover:underline">FAQ</Link></li>
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
