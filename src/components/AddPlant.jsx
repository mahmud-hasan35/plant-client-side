import React, { use } from 'react'
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthContext';

export default function AddPlant() {
  const navigate = useNavigate()
  const { user, loading } = use(AuthContext)

  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newPlants = Object.fromEntries(formData.entries());

    // for single user //
    
    newPlants.userEmail = user?.email;
    newPlants.userName = user?.displayName || "Anonymous";
    console.log(newPlants)


    fetch('https://plant-care-user.vercel.app/plant', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newPlants)

    })
      .then(res => res.json())
      .then(data => {


        if (data.insertedId) {
          Swal.fire({
            title: "plant added successfully!",
            icon: "success",
            draggable: true
          });

          form.reset();

          navigate('/my-plants');

        }

      })

  };

  return (
    <>
      {
        loading ? (
          <div className="min-h-screen flex items-center justify-center">
            <span className="loading loading-spinner loading-lg text-green-600"></span>
            <span className="loading loading-spinner loading-lg text-green-600"></span>
            <span className="loading loading-spinner loading-lg text-green-600"></span>
          </div>

        ) :

          <form onSubmit={handleAdd} className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6">
            <h2 className="text-2xl font-bold text-center text-green-700">Add a New Plant</h2>

            {/* Image URL */}
            <div>
              <label className="block mb-1 font-medium">Image URL</label>
              <input type="text" name="image" className="w-full p-2 border rounded-md" />
            </div>

            {/* Plant Name */}
            <div>
              <label className="block mb-1 font-medium">Plant Name</label>
              <input type="text" name="name" className="w-full p-2 border rounded-md" />
            </div>

            {/* Category */}
            <div>
              <label className="block mb-1 font-medium">Category</label>
              <select name="category" className="w-full p-2 border rounded-md">
                <option value="">Select Category</option>
                <option value="succulent">Succulent</option>
                <option value="fern">Fern</option>
                <option value="flowering">Flowering</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block mb-1 font-medium">Description</label>
              <textarea name="description" rows="4" className="w-full p-2 border rounded-md"></textarea>
            </div>

            {/* Care Level */}
            <div>
              <label className="block mb-1 font-medium">Care Level</label>
              <select name="careLevel" className="w-full p-2 border rounded-md">
                <option value="">Select Care Level</option>
                <option value="easy">Easy</option>
                <option value="moderate">Moderate</option>
                <option value="difficult">Difficult</option>
              </select>
            </div>

            {/* Watering Frequency */}
            <div>
              <label className="block mb-1 font-medium">Watering Frequency</label>
              <input type="text" name="wateringFrequency" placeholder="e.g., every 3 days" className="w-full p-2 border rounded-md" />
            </div>

            {/* Last Watered Date */}
            <div>
              <label className="block mb-1 font-medium">Last Watered Date</label>
              <input type="date" name="lastWateredDate" className="w-full p-2 border rounded-md" />
            </div>

            {/* Next Watering Date */}
            <div>
              <label className="block mb-1 font-medium">Next Watering Date</label>
              <input type="date" name="nextWateringDate" className="w-full p-2 border rounded-md" />
            </div>

            {/* Health Status */}
            <div>
              <label className="block mb-1 font-medium">Health Status</label>
              <input type="text" name="healthStatus" className="w-full p-2 border rounded-md" />
            </div>

            {/* User Email */}
            {/* <div>
              <label className="block mb-1 font-medium">User Email</label>
              <input type="email" name="userEmail" className="w-full p-2 border rounded-md" />
            </div> */}

            {/* User Name */}
            {/* <div>
              <label className="block mb-1 font-medium">User Name</label>
              <input type="text" name="userName" className="w-full p-2 border rounded-md" />
            </div> */}



            {/* Submit Button */}
            <div className="text-center pt-4">
              <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-200">
                Add Plant
              </button>
            </div>
          </form>
      }

    </>
  )
}
