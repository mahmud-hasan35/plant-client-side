import { use, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { format } from "date-fns";
import { AuthContext } from "../context/AuthContext";

const AllPlants = () => {
  const { loading } = use(AuthContext);

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
    <div className="p-6 min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Heading */}
      <h1 className="text-3xl font-extrabold mb-6 text-center text-[#006400] dark:text-green-300">
        🌱 All Plants
      </h1>

      {/* Sort Options */}
      <div className="mb-6 flex justify-end">
        <label className="font-medium mr-2 text-[#006400] dark:text-green-200">
          Sort by:
        </label>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border border-green-300 dark:border-green-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-green-500 outline-none"
        >
          <option value="">-- Select --</option>
          <option value="wateringDate">Next Watering Date</option>
          <option value="careLevel">Care Level</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow-lg rounded-xl bg-white dark:bg-gray-900 transition-colors duration-300">
        <table className="min-w-full text-left border-collapse">
          <thead className="bg-[#006400] text-white dark:bg-green-700">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Watering Frequency</th>
              <th className="py-3 px-4">Next Watering</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center py-8">
                  <span className="loading loading-spinner loading-lg text-green-600"></span>
                </td>
              </tr>
            ) : (
              plants.map((plant, index) => (
                <tr
                  key={plant._id}
                  className={`transition-colors ${
                    index % 2 === 0
                      ? "bg-green-50 dark:bg-gray-800"
                      : "bg-white dark:bg-gray-700"
                  } hover:bg-green-100 dark:hover:bg-gray-600`}
                >
                  <td className="py-3 px-4 text-gray-800 dark:text-gray-200">
                    {plant.name}
                  </td>
                  <td className="py-3 px-4 text-gray-800 dark:text-gray-200">
                    {plant.category}
                  </td>
                  <td className="py-3 px-4 text-gray-800 dark:text-gray-200">
                    {plant.wateringFrequency}
                  </td>
                  <td className="py-3 px-4 text-gray-800 dark:text-gray-200">
                    {plant.nextWateringDate
                      ? format(new Date(plant.nextWateringDate), "dd MMM yyyy")
                      : "Not set"}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => navigate(`/plant/${plant._id}`)}
                      className="bg-[#006400] text-white px-4 py-2 rounded-lg font-medium shadow-md hover:bg-[#004d00] transition-all dark:bg-green-600 dark:hover:bg-green-500"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPlants;
