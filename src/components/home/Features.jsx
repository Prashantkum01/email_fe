export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Why Choose EmailPro</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-purple-100 rounded-xl shadow-lg transform hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">Easy Campaigns</h3>
            <p className="text-gray-700">Create stunning email campaigns in minutes with our intuitive editor.</p>
          </div>
          <div className="p-8 bg-pink-100 rounded-xl shadow-lg transform hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-4 text-pink-700">Analytics</h3>
            <p className="text-gray-700">Track opens, clicks, and engagement to optimize your email strategy.</p>
          </div>
          <div className="p-8 bg-yellow-100 rounded-xl shadow-lg transform hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-700">Automation</h3>
            <p className="text-gray-700">Automate follow-ups and nurture your audience effortlessly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
