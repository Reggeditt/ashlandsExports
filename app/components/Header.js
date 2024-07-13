import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex flex-wrap justify-between items-center p-4">
        <div className="flex items-center">
          <img src="/logo.png" alt="Ashlands Exports" className="h-8 mr-2"/>
          <span className="font-bold text-lg">Ashlands Exports</span>
        </div>
        <nav className="flex space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/markets">Markets</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="tel:+123456789" className="hidden md:block">+123 456 789</a>
          <a href="mailto:info@ashlands.com" className="hidden md:block">info@ashlands.com</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
