import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-700 mb-8">
          Oops! Page not found.
        </p>
        <Link href="/">
          <a className="inline-block bg-red-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-red-600 transition duration-150">
            Go to Home
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
