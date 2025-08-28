import { use, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { format } from "date-fns";
import { AuthContext } from "../context/AuthContext";

const AllPlants = () => {

const {loading} = use(AuthContext)
  
  
  

  const [plants, setPlants] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://plant-care-user.vercel.app/plant")
      .then((res) => res.json())
      .then((data) => {


        let sortedData = [...data];



        if (sortOption === "wateringDate") {
          sortedData.sort(
            (a, b) =>
              new Date(a.nextWateringDate) - new Date(b.nextWateringDate)
          );
        } else if (sortOption === "careLevel") {
          sortedData.sort((a, b) =>
            (a.careLevel || "").localeCompare(b.careLevel || "")
          );
        }

        setPlants(sortedData);
      })

      
      .catch((err) => console.error(err));
  }, [sortOption]);



 

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Plants</h1>

      <div className="mb-4">
        <label className="font-medium mr-2">Sort by:</label>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1"
        >
          <option value="">-- Select --</option>
          <option value="wateringDate">Next Watering Date</option>
          <option value="careLevel">Care Level</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-left">
          <thead className="bg-green-100">
            <tr>
             
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Category</th>
              <th className="py-2 px-4 border">Watering Frequency</th>
              <th className="py-2 px-4 border">Next Watering</th>
              <th className="py-2 px-4 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              loading ?  (
              <tr>
                <td colSpan="5" className="text-center py-8">
                  <span className="loading loading-spinner loading-lg text-green-600"></span>
                  <span className="loading loading-spinner loading-lg text-green-600"></span>
                  <span className="loading loading-spinner loading-lg text-green-600"></span>
                </td>
              </tr>
            ) :
            plants.map((plant) => (
              <tr key={plant._id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border">{plant.name}</td>
                <td className="py-2 px-4 border">{plant.category}</td>
                <td className="py-2 px-4 border">{plant.wateringFrequency}</td>
                <td className="py-2 px-4 border">
                  {plant.nextWateringDate
                    ? format(new Date(plant.nextWateringDate), "dd MMM yyyy")
                    : "Not set"}
                </td>
                <td className="py-2 px-4 border">
                  <button
                    onClick={() => navigate(`/plant/${plant._id}`)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPlants;
