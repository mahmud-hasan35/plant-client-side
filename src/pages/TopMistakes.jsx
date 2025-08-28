export default function TopMistakes() {
  return (
    <section className="bg-green-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-red-500">🚫 Top Plant Care Mistakes</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Overwatering your plants regularly.</li>
          <li>Placing plants in low-light areas without checking needs.</li>
          <li>Using pots without drainage holes.</li>
          <li>Ignoring pests and fungus on leaves.</li>
        </ul>
      </div>
    </section>
  );
}
