import React from 'react'
import { Link} from 'react-router';
import Swal from 'sweetalert2';


export default function MyPlantsCard({ plant, plants, setPlants }) {

    const { image, name, category, _id } = plant



    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://plant-care-user.vercel.app/plant/${_id}`,{
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Plant has been deleted.",
                                icon: "success"
                            });
                            const remainingPlants = plants.filter(plan => plan._id !== id);
                            setPlants(remainingPlants)
                        }
                    })
            }
        });
    }

 
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
            <img
                src={image}
                alt={name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
                <p className="text-gray-600 text-sm">Category: {category}</p>

                <div className="flex gap-3 pt-2">
                    <Link to={`/update-plants/${_id}`}>
                    <button className="bg-yellow-500 hover:bg-yellow-600 cursor-pointer text-white text-sm px-4 py-1.5 rounded-md">
                        Update
                    </button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="bg-red-500 cursor-pointer hover:bg-red-600 text-white text-sm px-4 py-1.5 rounded-md">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}
