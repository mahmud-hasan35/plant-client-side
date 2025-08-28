import { Link } from "react-router";


export default function NewPlants({ plant }) {
 
  

  const { image, name } = plant
  return (
    <div key={plant.id} className="bg-white rounded shadow p-4">
      <img src={image} alt={name} className="rounded mb-2 h-48 w-full object-cover" />
      <h3 className="text-xl font-semibold text-green-700">{name}</h3>
      <Link to={`/newPlant/${plant.id}`}>
        <button className="btn btn-sm mt-2 btn-outline btn-success">View Details</button>
      </Link>
    </div>
  );
}
