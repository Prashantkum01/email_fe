import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-center text-white px-4 py-32">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">
          Get in Touch
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mb-8 drop-shadow-lg">
          Have questions? We're here to help. Send us a message and we'll respond promptly.
        </p>
      </section>

      {/* Contact Form */}
      <section className="flex justify-center bg-gray-50 py-20 px-4">
        <form className="w-full max-w-3xl bg-white p-10 rounded-xl shadow-lg space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Contact Us</h2>

          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <textarea
            placeholder="Message"
            rows="6"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>

          <div className="text-center">
            <button
              type="submit"
              className="px-10 py-4 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition text-lg"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Reach out and we'll help you set up your email campaigns like a pro.
        </p>
        <button className="px-10 py-5 bg-white text-purple-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition text-xl">
          Start Free Trial
        </button>
      </section>

    </div>
  );
}
