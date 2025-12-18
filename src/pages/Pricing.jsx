import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

export default function Pricing() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-center text-white px-4 py-32">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">
          Choose Your Plan
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mb-8 drop-shadow">
          Flexible pricing plans for businesses of all sizes. Pick the one that fits your needs.
        </p>
        <p className="text-lg max-w-2xl mb-0 drop-shadow">
          No hidden fees. Upgrade or downgrade anytime.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid gap-8 md:grid-cols-3">
          {/* Basic Plan */}
          <div className="p-8 bg-white rounded-xl shadow-lg transform hover:scale-105 transition">
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">Basic</h3>
            <p className="text-gray-700 mb-6">Perfect for individuals starting out.</p>
            <div className="text-4xl font-bold mb-4">$19<span className="text-lg font-normal">/mo</span></div>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li>✅ Up to 1,000 subscribers</li>
              <li>✅ Basic email templates</li>
              <li>✅ Email support</li>
            </ul>
            <button className="w-full py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="p-8 bg-purple-50 rounded-xl shadow-lg transform hover:scale-105 transition border-2 border-purple-600">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Pro</h3>
            <p className="text-gray-700 mb-6">Advanced tools for growing businesses.</p>
            <div className="text-4xl font-bold mb-4">$49<span className="text-lg font-normal">/mo</span></div>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li>✅ Up to 10,000 subscribers</li>
              <li>✅ Advanced email templates</li>
              <li>✅ Automation & segmentation</li>
              <li>✅ Priority support</li>
            </ul>
            <button className="w-full py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition">
              Get Started
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="p-8 bg-yellow-50 rounded-xl shadow-lg transform hover:scale-105 transition">
            <h3 className="text-2xl font-semibold text-yellow-700 mb-4">Enterprise</h3>
            <p className="text-gray-700 mb-6">For large teams with advanced needs.</p>
            <div className="text-4xl font-bold mb-4">$99<span className="text-lg font-normal">/mo</span></div>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li>✅ Unlimited subscribers</li>
              <li>✅ Custom templates</li>
              <li>✅ Dedicated account manager</li>
              <li>✅ Premium support</li>
            </ul>
            <button className="w-full py-3 bg-yellow-600 text-white font-bold rounded-lg hover:bg-yellow-700 transition">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Join thousands of happy users growing their business with EmailPro.
        </p>
        <button className="px-10 py-5 bg-white text-purple-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition text-xl">
          Start Free Trial
        </button>
      </section>

    </div>
  );
}
