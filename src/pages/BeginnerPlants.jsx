export default function BeginnerPlants() {
  const plants = [
    {
      id: 1,
      name: "Snake Plant",
      desc: "Hard to kill, thrives in low light, and requires little water.",
      icon: "🌿",
    },
    {
      id: 2,
      name: "ZZ Plant",
      desc: "Perfect for beginners – drought tolerant and adaptable.",
      icon: "🪴",
    },
    {
      id: 3,
      name: "Spider Plant",
      desc: "Air-purifying, grows quickly, and survives occasional neglect.",
      icon: "🕸️",
    },
    {
      id: 4,
      name: "Pothos",
      desc: "Beautiful trailing plant, very forgiving and easy to propagate.",
      icon: "🌱",
    },
  ];

  return (
    <section className="bg-green-50 dark:bg-gray-900 py-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-green-700 dark:text-green-300">
          🌼 Beginner-Friendly Plants
        </h2>

        {/* List Style Grid */}
        <div className="space-y-6">
          {plants.map((plant) => (
            <div
              key={plant.id}
              className="flex items-center gap-4 bg-green-100 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="text-4xl bg-white dark:bg-gray-700 p-4 rounded-full shadow-md">
                {plant.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-xl font-semibold text-green-700 dark:text-green-200">
                  {plant.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {plant.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
