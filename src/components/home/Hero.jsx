export default function Hero() {
  return (
    <header className="flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-center text-white px-4 py-48 relative overflow-hidden">
      {/* Optional decorative shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-20 right-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <h1 className="text-7xl md:text-8xl font-extrabold mb-6 drop-shadow-lg">
        Boost Your Email Campaigns
      </h1>
      <p className="text-2xl md:text-3xl max-w-4xl mb-8 drop-shadow-lg">
        Send beautiful emails, track engagement, and grow your audience with EmailPro. Make every email count with smart automation and stunning designs.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="px-10 py-5 bg-white text-purple-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition text-xl">
          Get Started Now
        </button>
        <button className="px-10 py-5 bg-purple-700 text-white font-bold rounded-lg shadow-lg hover:bg-purple-800 transition text-xl">
          Learn More
        </button>
      </div>
    </header>
  );
}
