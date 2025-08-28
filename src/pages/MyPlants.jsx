import React, { use, useEffect, useState } from 'react'
import MyPlantsCard from './MyPlantsCard';
import { AuthContext } from '../context/AuthContext';

export default function MyPlants() {

  const { user } = use(AuthContext)
  console.log(user)
  

  

  // const initialPlants = useLoaderData();
  const [plants, setPlants] = useState([]);

  // for single user //

  useEffect(() => {
    
      fetch(`https://plant-care-user.vercel.app/myPlant/${user.email}`)
        .then(res => res.json())
        .then(data => setPlants(data)
        )
        .catch(error => console.error("Error fetching plants:", error));
    
  }, [user?.email]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-green-700 mb-8 text-center">
        🌿 My Plants
      </h1>
      {plants.length === 0 ? (
        <p className="text-center text-gray-500 italic text-xl">🚫 You haven’t added any plants yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plants.map(plant => (
            <MyPlantsCard
              key={plant._id}
              plant={plant}
              plants={plants}
              setPlants={setPlants}
            />
          ))}
        </div>
      )}
    </div>
  );
}                                                         