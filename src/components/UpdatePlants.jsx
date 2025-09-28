import React from 'react'
import { useLoaderData, useNavigate } from 'react-router'
import Swal from 'sweetalert2'

export default function UpdatePlants() {
  const navigate = useNavigate()

  const {
    _id,
    name,
    image,
    description,
    category,
    nextWateringDate,
    careLevel,
    healthStatus,
    lastWateredDate,
    userName,
    wateringFrequency,
    userEmail,
  } = useLoaderData()

  const handleUpdate = e => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const updatePlants = Object.fromEntries(formData.entries())

    fetch(`https://plant-care-user.vercel.app/plant/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatePlants),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Plant updated successfully',
            showConfirmButton: false,
            timer: 1500,
          })

          form.reset()
          navigate('/my-plants')
        }
      })
  }

  return (
    <form
      onSubmit={handleUpdate}
      className="max-w-3xl mx-auto my-10 
        bg-white dark:bg-gray-900 
        text-gray-800 dark:text-gray-200 
        p-8 rounded-xl shadow-lg space-y-6 transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold text-center text-green-700 dark:text-green-400">
        Update Plant
      </h2>

      {/* Image URL */}
      <div>
        <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
          Image URL
        </label>
        <input
          type="text"
          name="image"
          defaultValue={image}
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
          defaultValue={name}
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
          defaultValue={category}
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
          defaultValue={description}
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
          defaultValue={careLevel}
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
          defaultValue={wateringFrequency}
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
          defaultValue={lastWateredDate}
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
          defaultValue={nextWateringDate}
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
          defaultValue={healthStatus}
          className="w-full p-3 border rounded-lg 
          bg-gray-50 dark:bg-gray-800 
          border-gray-300 dark:border-gray-600 
          text-gray-900 dark:text-gray-200"
        />
      </div>

      {/* User Email */}
      <div>
        <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
          User Email
        </label>
        <input
          type="email"
          name="userEmail"
          defaultValue={userEmail}
          className="w-full p-3 border rounded-lg 
          bg-gray-50 dark:bg-gray-800 
          border-gray-300 dark:border-gray-600 
          text-gray-900 dark:text-gray-200"
        />
      </div>

      {/* User Name */}
      <div>
        <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
          User Name
        </label>
        <input
          type="text"
          name="userName"
          defaultValue={userName}
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
          Update
        </button>
      </div>
    </form>
  )
}
