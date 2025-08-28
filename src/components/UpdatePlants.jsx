import React from 'react'
import { useLoaderData, useNavigate } from 'react-router'
import Swal from 'sweetalert2'

export default function UpdatePlants() {
  const navigate = useNavigate()

  const {_id, name,image,
     description,
     category,nextWateringDate,
     careLevel,healthStatus,lastWateredDate,
     userName,wateringFrequency,userEmail
    } = useLoaderData()


  const handleUpdate = e => {
    e.preventDefault()
    const form = e.target;
    const formData = new FormData(form);
    const updatePlants = Object.fromEntries(formData.entries());
    

      fetch(`https://plant-care-user.vercel.app/plant/${_id}`, {
        method:"PUT",
        headers: {
          "content-type" : 'application/json'
        },
        body: JSON.stringify(updatePlants)

      })
      .then(res => res.json())
      .then(data => {
        if(data.modifiedCount) {
          Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Plant updated successfully",
  showConfirmButton: false,
  timer: 1500
});

form.reset()
navigate('/my-plants');
        }
       
        
      })
    
  }
  return (
     <form onSubmit={handleUpdate} className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6">
  <h2 className="text-2xl font-bold text-center text-green-700">Update Plant</h2>

  {/* Image URL */}
  <div>
    <label className="block mb-1 font-medium">Image URL</label>
    <input type="text" name="image" defaultValue={image} className="w-full p-2 border rounded-md" />
  </div>

  {/* Plant Name */}
  <div>
    <label className="block mb-1 font-medium">Plant Name</label>
    <input type="text" name="name" defaultValue={name} className="w-full p-2 border rounded-md" />
  </div>

  {/* Category */}
  <div>
    <label className="block mb-1 font-medium">Category</label>
    <select name="category" defaultValue={category} className="w-full p-2 border rounded-md">
      <option value="">Select Category</option>
      <option value="succulent">Succulent</option>
      <option value="fern">Fern</option>
      <option value="flowering">Flowering</option>
    </select>
  </div>

  {/* Description */}
  <div>
    <label className="block mb-1 font-medium">Description</label>
    <textarea name="description" defaultValue={description} rows="4" className="w-full p-2 border rounded-md"></textarea>
  </div>

  {/* Care Level */}
  <div>
    <label className="block mb-1 font-medium">Care Level</label>
    <select name="careLevel" defaultValue={careLevel} className="w-full p-2 border rounded-md">
      <option value="">Select Care Level</option>
      <option value="easy">Easy</option>
      <option value="moderate">Moderate</option>
      <option value="difficult">Difficult</option>
    </select>
  </div>

  {/* Watering Frequency */}
  <div>
    <label className="block mb-1 font-medium">Watering Frequency</label>
    <input type="text" name="wateringFrequency" defaultValue={wateringFrequency} placeholder="e.g., every 3 days" className="w-full p-2 border rounded-md" />
  </div>

  {/* Last Watered Date */}
  <div>
    <label className="block mb-1 font-medium">Last Watered Date</label>
    <input type="date" name="lastWateredDate" defaultValue={lastWateredDate} className="w-full p-2 border rounded-md" />
  </div>

  {/* Next Watering Date */}
  <div>
    <label className="block mb-1 font-medium">Next Watering Date</label>
    <input type="date" name="nextWateringDate" defaultValue={nextWateringDate} className="w-full p-2 border rounded-md" />
  </div>

  {/* Health Status */}
  <div>
    <label className="block mb-1 font-medium">Health Status</label>
    <input type="text" name="healthStatus" defaultValue={healthStatus} className="w-full p-2 border rounded-md" />
  </div>

  {/* User Email */}
  <div>
    <label className="block mb-1 font-medium">User Email</label>
    <input type="email" name="userEmail" defaultValue={userEmail} className="w-full p-2 border rounded-md" />
  </div>

  {/* User Name */}
  <div>
    <label className="block mb-1 font-medium">User Name</label>
    <input type="text" name="userName" defaultValue={userName} className="w-full p-2 border rounded-md" />
  </div>

  {/* Submit Button */}
  <div className="text-center pt-4">
    <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-200">
      Update
    </button>
  </div>
</form>
  )
}
