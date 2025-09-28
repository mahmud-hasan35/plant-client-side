import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'
import { AuthContext } from '../context/AuthContext'
import { use } from 'react'

export default function AddPlant() {
  const navigate = useNavigate()
  const { user, loading } = use(AuthContext)

  const handleAdd = e => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const newPlants = Object.fromEntries(formData.entries())

    // add logged-in user info
    newPlants.userEmail = user?.email
    newPlants.userName = user?.displayName || 'Anonymous'

    fetch('https://plant-care-user.vercel.app/plant', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newPlants),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Plant added successfully!',
            icon: 'success',
            draggable: true,
          })
          form.reset()
          navigate('/my-plants')
        }
      })
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center space-x-2">
        <span className="loading loading-spinner loading-lg text-green-600"></span>
        <span className="loading loading-spinner loading-lg text-green-600"></span>
        <span className="loading loading-spinner loading-lg text-green-600"></span>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleAdd}
      className="max-w-3xl mx-auto my-10 
      bg-white dark:bg-gray-900 
      text-gray-800 dark:text-gray-200 
      p-8 rounded-xl shadow-lg space-y-6 transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold text-center text-green-700 dark:text-green-400">
        Add a New Plant
      </h2>

      {/* Image URL */}
      <div>
        <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
          Image URL
        </label>
        <input
          type="text"
          name="image"
          className="w-full p-3 border rounded-lg 
          bg-gray-50 dark:bg-gray-800 
          border-gray-300 dark:border-gray-600 
          text-gray-900 dark:text-gray-200"
        />
      </div>

      {/* Plant Name */}
      <div>
        <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
          Plant Name
        </label>
        <input
          type="text"
          name="name"
          className="w-full p-3 border rounded-lg 
          bg-gray-50 dark:bg-gray-800 
          border-gray-300 dark:border-gray-600 
          text-gray-900 dark:text-gray-200"
        />
      </div>

      {/* Category */}
      <div>
        <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
          Category
        </label>
        <select
          name="category"
          className="w-full p-3 border rounded-lg 
          bg-gray-50 dark:bg-gray-800 
          border-gray-300 dark:border-gray-600 
          text-gray-900 dark:text-gray-200"
        >
          <option value="">Select Category</option>
          <option value="succulent">Succulent</option>
          <option value="fern">Fern</option>
          <option value="flowering">Flowering</option>
        </select>
      </div>

      {/* Description */}
      <div>
        <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
          Description
        </label>
        <textarea
          name="description"
          rows="4"
          className="w-full p-3 border rounded-lg 
          bg-gray-50 dark:bg-gray-800 
          border-gray-300 dark:border-gray-600 
          text-gray-900 dark:text-gray-200"
        ></textarea>
      </div>

      {/* Care Level */}
      <div>
        <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
          Care Level
        </label>
        <select
          name="careLevel"
          className="w-full p-3 border rounded-lg 
          bg-gray-50 dark:bg-gray-800 
          border-gray-300 dark:border-gray-600 
          text-gray-900 dark:text-gray-200"
        >
          <option value="">Select Care Level</option>
          <option value="easy">Easy</option>
          <option value="moderate">Moderate</option>
          <option value="difficult">Difficult</option>
        </select>
      </div>

      {/* Watering Frequency */}
      <div>
        <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
          Watering Frequency
        </label>
        <input
          type="text"
          name="wateringFrequency"
          placeholder="e.g., every 3 days"
          className="w-full p-3 border rounded-lg 
          bg-gray-50 dark:bg-gray-800 
          border-gray-300 dark:border-gray-600 
          text-gray-900 dark:text-gray-200"
        />
      </div>

      {/* Last Watered Date */}
      <div>
        <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
          Last Watered Date
        </label>
        <input
          type="date"
          name="lastWateredDate"
          className="w-full p-3 border rounded-lg 
          bg-gray-50 dark:bg-gray-800 
          border-gray-300 dark:border-gray-600 
          text-gray-900 dark:text-gray-200"
        />
      </div>

      {/* Next Watering Date */}
      <div>
        <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
          Next Watering Date
        </label>
        <input
          type="date"
          name="nextWateringDate"
          className="w-full p-3 border rounded-lg 
          bg-gray-50 dark:bg-gray-800 
          border-gray-300 dark:border-gray-600 
          text-gray-900 dark:text-gray-200"
        />
      </div>

      {/* Health Status */}
      <div>
        <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
          Health Status
        </label>
        <input
          type="text"
          name="healthStatus"
          className="w-full p-3 border rounded-lg 
          bg-gray-50 dark:bg-gray-800 
          border-gray-300 dark:border-gray-600 
          text-gray-900 dark:text-gray-200"
        />
      </div>

      {/* Submit Button */}
      <div className="text-center pt-4">
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 
          text-white font-medium px-6 py-3 rounded-lg shadow-md 
          transition-all duration-300"
        >
          Add Plant
        </button>
      </div>
    </form>
  )
}
