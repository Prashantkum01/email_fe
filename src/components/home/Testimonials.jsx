export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Loved by Professionals</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-purple-50 rounded-lg shadow hover:shadow-lg transition">
            <p className="text-gray-700 mb-4">"EmailPro helped me increase my email open rate by 50%!"</p>
            <h3 className="font-semibold text-purple-700">Alice Johnson</h3>
          </div>
          <div className="p-6 bg-pink-50 rounded-lg shadow hover:shadow-lg transition">
            <p className="text-gray-700 mb-4">"The automation features saved me hours every week."</p>
            <h3 className="font-semibold text-pink-700">Michael Lee</h3>
          </div>
          <div className="p-6 bg-yellow-50 rounded-lg shadow hover:shadow-lg transition">
            <p className="text-gray-700 mb-4">"Beautiful templates and easy-to-use interface."</p>
            <h3 className="font-semibold text-yellow-700">Samantha Smith</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
