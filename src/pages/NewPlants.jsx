import { Link } from "react-router";

export default function NewPlants({ plant }) {
  const { image, name, description } = plant;

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg group h-96">
      {/* Background Image */}
      <img
        src={image}
        alt={name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Dark Green Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#006400b3] to-[#006400] flex flex-col justify-end p-6 text-white">
        {/* Icon (Optional — example leaf emoji) */}
        <div className="flex justify-center mb-4 text-4xl opacity-90">🌿</div>

        {/* Title */}
        <h3 className="text-xl font-bold text-center mb-2">{name}</h3>

        {/* Description */}
        <p className="text-sm text-center opacity-90">{description}</p>

        {/* Hidden Button on Hover */}
        <div className="flex justify-center mt-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-600">
  <Link to={`/newPlant/${plant.id}`}>
    <button className="px-4 py-2 bg-white text-[#006400] font-semibold rounded-lg shadow hover:bg-gray-100 transition">
      View Details
    </button>
  </Link>
</div>
      </div>
    </div>
  );
}
