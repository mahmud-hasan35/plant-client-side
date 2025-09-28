import Banner from "../pages/Banner";
import NewPlants from "../pages/NewPlants";
import TopMistakes from "../pages/TopMistakes";
import BeginnerPlants from "../pages/BeginnerPlants";
import { useLoaderData } from "react-router";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import ChooseUs from "../pages/ChooseUs";

export default function Home() {
  const { loading } = use(AuthContext);

  const plants = useLoaderData();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50 dark:bg-gray-900 transition-colors duration-300">
        <span className="loading loading-spinner loading-lg text-green-600"></span>
        <span className="loading loading-spinner loading-lg text-green-600"></span>
        <span className="loading loading-spinner loading-lg text-green-600"></span>
      </div>
    );
  }

  return (
    <>
      <div className="bg-green-50 dark:bg-gray-900 transition-colors duration-300">
        {/* Banner */}
        <Banner />

        {/* New Plants Section */}
        <section className="my-10 max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6 text-green-600 dark:text-green-300">
            🆕 New Plants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plants.map((plant) => (
              <NewPlants key={plant.id} plant={plant} />
            ))}
          </div>
        </section>

        {/* Choose Us */}
        <ChooseUs />

        {/* Mistakes Section */}
        <TopMistakes />

        {/* Beginner Plants */}
        <BeginnerPlants />
      </div>
    </>
  );
}
