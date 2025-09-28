import { useNavigate, useParams } from 'react-router'
import { useEffect, useState } from 'react'

const PlantDetails = () => {
  const { id } = useParams()
  const [plant, setPlant] = useState(null)
  const navigate = useNavigate()

  // helper function → calculate next watering date from wateringFrequency
  const calculateNextWateringDate = (frequency, lastWateredDate) => {
    if (!frequency) return null

    const match = frequency.match(/(\d+)/) // extract number from "every 3 days"
    if (!match) return null

    const days = parseInt(match[1], 10)
    const baseDate = lastWateredDate ? new Date(lastWateredDate) : new Date()
    baseDate.setDate(baseDate.getDate() + days)

    return baseDate.toDateString()
  }

  useEffect(() => {
    fetch(`https://plant-care-user.vercel.app/plant/${id}`)
      .then(res => res.json())
      .then(data => {
        // যদি nextWateringDate না থাকে, তাহলে auto generate করে set করা হবে
        if (!data.nextWateringDate) {
          data.nextWateringDate = calculateNextWateringDate(
            data.wateringFrequency,
            data.lastWateredDate
          )
        }
        setPlant(data)
      })
      .catch(err => console.error(err))
  }, [id])

  if (!plant) {
    return (
      <div className="min-h-screen flex items-center justify-center gap-2">
        <span className="loading loading-spinner loading-lg text-green-600"></span>
        <span className="loading loading-spinner loading-lg text-green-600"></span>
        <span className="loading loading-spinner loading-lg text-green-600"></span>
      </div>
    )
  }

  return (
    <div
      className="max-w-4xl mx-auto my-10 p-6 
      bg-white dark:bg-gray-900 
      text-gray-800 dark:text-gray-200 
      rounded-2xl shadow-lg flex flex-col md:flex-row gap-6 transition-colors duration-300"
    >
      <img
        src={plant.image}
        alt={plant.name}
        className="w-full md:w-1/2 rounded-lg object-cover shadow-md"
      />
      <div className="flex-1 space-y-3">
        <h2 className="text-3xl font-bold text-green-700 dark:text-green-400">
          {plant.name}
        </h2>
        <p>
          <span className="font-semibold">Category:</span> {plant.category}
        </p>
        <p>
          <span className="font-semibold">Watering:</span>{' '}
          {plant.wateringFrequency}
        </p>
        <p>
          <span className="font-semibold">Level:</span> {plant.careLevel}
        </p>
        <p>
          <span className="font-semibold">Health:</span> {plant.healthStatus}
        </p>
        <p>
          <span className="font-semibold">Next Watering Date:</span>{' '}
          {plant.nextWateringDate || 'Not available'}
        </p>
        <p>
          <span className="font-semibold">Description:</span>{' '}
          {plant.description}
        </p>

        <button
          onClick={() => navigate('/all-plants')}
          className="mt-4 inline-block bg-green-600 hover:bg-green-700 
            text-white px-4 py-2 rounded-lg transition"
        >
          ← Back to All Plants
        </button>
      </div>
    </div>
  )
}

export default PlantDetails
