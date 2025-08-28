import { useLoaderData, useNavigate, useParams } from 'react-router'

export default function NewPlantDetails() {

    const navigate = useNavigate()

    const {id} = useParams()

    const data = useLoaderData()

  const newPlantDetails = data.find((plant) => plant.id === parseInt(id));

const {image,name,category,careLevel,wateringFrequency,healthStatus,nextWateringDate,description} = newPlantDetails
  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-2xl shadow-lg flex flex-col md:flex-row gap-6">
      <img
        src={image}
        alt={name}
        className="w-full md:w-1/2 rounded-lg object-cover shadow-md"
      />
      <div className="flex-1 space-y-3">
        <h2 className="text-3xl font-bold text-green-700">{name}</h2>
        <p><span className="font-semibold">Category:</span> {category}</p>
        <p><span className="font-semibold">Watering:</span> {wateringFrequency}</p>
        <p><span className="font-semibold">Level:</span> {careLevel}</p>
        <p><span className="font-semibold">Health:</span> {healthStatus}</p>
        <p><span className="font-semibold">nextWateringDate</span> {nextWateringDate}</p>
        <p><span className="font-semibold">Description:</span> {description}</p>

        <button
          onClick={() => navigate('/')}
          className="mt-4 inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          ← Back to home
        </button>
      </div>
    </div>
  )
}
