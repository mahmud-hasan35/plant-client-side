export default function TopMistakes() {
  const mistakes = [
    {
      id: 1,
      title: "Overwatering Plants",
      desc: "Too much water can suffocate roots and cause them to rot.",
      icon: "💧",
    },
    {
      id: 2,
      title: "Ignoring Light Needs",
      desc: "Placing plants in the wrong light weakens growth and color.",
      icon: "🌤️",
    },
    {
      id: 3,
      title: "No Drainage",
      desc: "Using pots without drainage holes leads to root damage.",
      icon: "🪴",
    },
    {
      id: 4,
      title: "Neglecting Pests",
      desc: "Not treating pests early can spread damage quickly.",
      icon: "🐛",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 py-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-[#006400] dark:text-green-300">
          🚫 Top Plant Care Mistakes
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mistakes.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{item.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#004d00] dark:text-green-200 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
