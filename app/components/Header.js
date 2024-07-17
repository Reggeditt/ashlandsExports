'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();

  return (
    <header className="bg-gray-800 relative text-white">
      <div className="container mx-auto flex flex-wrap justify-between items-center p-4">
        <div>
          <Link href='/' className="flex flex-col items-center justify-center">
            <img src="/images/logo.png" alt="Ashlands Exports" className="h-12 mr-2" />
            <span className="font-bold text-lg">Ashlands Exports</span>
          </Link>
        </div>
        <nav className="flex space-x-4">
          <Link href="/" className={`relative group ${router.pathname === '/' ? 'text-red-500' : ''}`}>
              Home
              <span className={`absolute left-0 bottom-0 top-6 rounded-full h-1 w-full transform scale-x-0 bg-red-500 transition-transform duration-300 ease-in-out group-hover:scale-x-100 ${router.pathname === '/' ? 'scale-x-100' : ''}`}></span>
          </Link>
          <Link href="/about" className={`relative group ${router.pathname === '/about' ? 'text-red-500' : ''}`}>
              About Us
              <span className={`absolute left-0 bottom-0 top-6 rounded-full h-1 w-full transform scale-x-0 bg-red-500 transition-transform duration-300 ease-in-out group-hover:scale-x-100 ${router.pathname === '/about' ? 'scale-x-100' : ''}`}></span>
          </Link>
          <Link href="/services" className={`relative group ${router.pathname === '/services' ? 'text-red-500' : ''}`}>
              Products
              <span className={`absolute left-0 bottom-0 top-6 rounded-full h-1 w-full transform scale-x-0 bg-red-500 transition-transform duration-300 ease-in-out group-hover:scale-x-100 ${router.pathname === '/services' ? 'scale-x-100' : ''}`}></span>
          </Link>
          {/* <Link href="/markets">
            <a className={`relative group ${router.pathname === '/markets' ? 'text-red-500' : ''}`}>
              Markets
              <span className={`absolute left-0 bottom-0 h-1 w-full transform scale-x-0 bg-red-500 transition-transform duration-300 ease-in-out group-hover:scale-x-100 ${router.pathname === '/markets' ? 'scale-x-100' : ''}`}></span>
            </a>
          </Link> */}
          {/* <Link href="/contact">
            <a className={`relative group ${router.pathname === '/contact' ? 'text-red-500' : ''}`}>
              Contact
              <span className={`absolute left-0 bottom-0 h-1 w-full transform scale-x-0 bg-red-500 transition-transform duration-300 ease-in-out group-hover:scale-x-100 ${router.pathname === '/contact' ? 'scale-x-100' : ''}`}></span>
            </a>
          </Link> */}
        </nav>
        <div className="flex space-x-4 mt-2 md:mt-0">
          {/* <a href="tel:+123456789" className="hidden md:block">+233 24 451 0845</a>
          <a href="mailto:info@ashlands.com" className="hidden md:block">info@ashlands.com</a> */}
          <button className="bg-red-500 text-white px-4 py-2 rounded-md transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-green-700">
            Get in touch
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
