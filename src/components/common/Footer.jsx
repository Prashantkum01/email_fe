import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white w-full mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left side */}
        <p className="text-gray-400 text-base md:text-lg text-center md:text-left">
          &copy; {new Date().getFullYear()} EmailPro. All rights reserved.
        </p>

        {/* Right side - social links */}
        <div className="flex space-x-4">
          <Link
            to="#"
            className="px-4 py-2 rounded-md bg-gray-800 hover:bg-purple-600 transition text-white text-base md:text-lg"
          >
            Twitter
          </Link>
          <Link
            to="#"
            className="px-4 py-2 rounded-md bg-gray-800 hover:bg-purple-600 transition text-white text-base md:text-lg"
          >
            LinkedIn
          </Link>
          <Link
            to="#"
            className="px-4 py-2 rounded-md bg-gray-800 hover:bg-purple-600 transition text-white text-base md:text-lg"
          >
            Facebook
          </Link>
        </div>
      </div>
    </footer>
  );
}
