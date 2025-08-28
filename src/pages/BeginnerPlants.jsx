export default function BeginnerPlants() {
  return (
    <section className="bg-green-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-600">🌼 Beginner-Friendly Plants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-100 p-4 rounded">
            <h3 className="text-xl font-semibold">Snake Plant</h3>
            <p className="text-gray-700">Hard to kill, thrives in low light, and requires little water.</p>
          </div>
          <div className="bg-green-100 p-4 rounded">
            <h3 className="text-xl font-semibold">ZZ Plant</h3>
            <p className="text-gray-700">Perfect for beginners – drought tolerant and adaptable.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
