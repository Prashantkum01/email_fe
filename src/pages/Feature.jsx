export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Why Choose EmailPro</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Feature 1 */}
          <div className="p-8 bg-purple-100 rounded-xl shadow-lg transform hover:scale-105 transition">
            <div className="text-5xl mb-4 text-purple-600">📧</div>
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">Easy Campaigns</h3>
            <p className="text-gray-700">
              Create stunning email campaigns in minutes using our intuitive drag-and-drop editor.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-8 bg-pink-100 rounded-xl shadow-lg transform hover:scale-105 transition">
            <div className="text-5xl mb-4 text-pink-600">📊</div>
            <h3 className="text-2xl font-semibold mb-4 text-pink-700">Analytics & Reports</h3>
            <p className="text-gray-700">
              Track email opens, clicks, and user engagement to optimize your campaigns effectively.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-8 bg-yellow-100 rounded-xl shadow-lg transform hover:scale-105 transition">
            <div className="text-5xl mb-4 text-yellow-700">🤖</div>
            <h3 className="text-2xl font-semibold mb-4 text-yellow-700">Automation</h3>
            <p className="text-gray-700">
              Automate follow-ups, segmentation, and scheduling to save time and increase conversions.
            </p>
          </div>
        </div>

        {/* Optional: Add more features */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {/* Feature 4 */}
          <div className="p-8 bg-green-100 rounded-xl shadow-lg transform hover:scale-105 transition">
            <div className="text-5xl mb-4 text-green-600">🎨</div>
            <h3 className="text-2xl font-semibold mb-4 text-green-700">Beautiful Templates</h3>
            <p className="text-gray-700">
              Choose from a wide variety of pre-designed templates that look professional on any device.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="p-8 bg-blue-100 rounded-xl shadow-lg transform hover:scale-105 transition">
            <div className="text-5xl mb-4 text-blue-600">🔒</div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Secure & Reliable</h3>
            <p className="text-gray-700">
              Your data is protected with top-level security and compliance standards.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="p-8 bg-indigo-100 rounded-xl shadow-lg transform hover:scale-105 transition">
            <div className="text-5xl mb-4 text-indigo-600">⚡</div>
            <h3 className="text-2xl font-semibold mb-4 text-indigo-700">Fast Delivery</h3>
            <p className="text-gray-700">
              Ensure your emails reach the inbox quickly and reliably every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
