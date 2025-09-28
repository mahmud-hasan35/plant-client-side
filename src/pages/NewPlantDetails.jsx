import { useLoaderData, useNavigate, useParams } from 'react-router'

export default function NewPlantDetails() {

  // Helper function
  function calculateNextWateringDate(frequency) {
    if (!frequency) return null;
    const match = frequency.match(/(\d+)/);
    if (!match) return null;

    const days = parseInt(match[1], 10);
    const today = new Date();
    today.setDate(today.getDate() + days);

    return today.toDateString();
  }

  const navigate = useNavigate()
  const { id } = useParams()
  const data = useLoaderData()

  const newPlantDetails = data.find((plant) => plant.id === parseInt(id))

  const {
    image,
    name,
    category,
    careLevel,
    wateringFrequency,
    healthStatus,
    description,
  } = newPlantDetails

  // 🔥 Auto calculate next watering date
  const calculatedNextWateringDate = calculateNextWateringDate(wateringFrequency);

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 
        bg-white dark:bg-gray-900 
        text-gray-800 dark:text-gray-200 
        rounded-2xl shadow-lg flex flex-col md:flex-row gap-6 transition-colors duration-300"
    >
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full md:w-1/2 rounded-lg object-cover shadow-md"
      />

      {/* Content */}
      <div className="flex-1 space-y-3">
        <h2 className="text-3xl font-bold text-green-700 dark:text-green-400">
          {name}
        </h2>
        <p>
          <span className="font-semibold text-gray-900 dark:text-gray-300">
            Category:
          </span>{" "}
          {category}
        </p>
        <p>
          <span className="font-semibold text-gray-900 dark:text-gray-300">
            Watering:
          </span>{" "}
          {wateringFrequency}
        </p>
        <p>
          <span className="font-semibold text-gray-900 dark:text-gray-300">
            Level:
          </span>{" "}
          {careLevel}
        </p>
        <p>
          <span className="font-semibold text-gray-900 dark:text-gray-300">
            Health:
          </span>{" "}
          {healthStatus}
        </p>
        <p>
          <span className="font-semibold text-gray-900 dark:text-gray-300">
            Next Watering Date:
          </span>{" "}
          {calculatedNextWateringDate || "Not set"}
        </p>
        <p>
          <span className="font-semibold text-gray-900 dark:text-gray-300">
            Description:
          </span>{" "}
          {description}
        </p>

        {/* Back button */}
        <button
          onClick={() => navigate('/')}
          className="mt-4 inline-block bg-green-600 hover:bg-green-700 
            text-white px-4 py-2 rounded-lg transition"
        >
          ← Back to home
        </button>
      </div>
    </div>
  )
}
