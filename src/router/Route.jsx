import {
  createBrowserRouter,
  
} from "react-router";

import Navbar from "../components/navbar/Navbar";
import Home from "../components/Home";
import Footer from "../components/footer/Footer";
import AddPlant from "../components/AddPlant";
import PlantDetails from "../components/PlantDetails";

import Register from "../components/Register";
import Login from "../components/Login";
import AllPlants from "../components/AllPlants";
import PrivateRoute from "../context/PrivateRoute";
import MyPlants from "../pages/MyPlants";
import UpdatePlants from "../components/UpdatePlants";
import NotFound from "../pages/NotFound";
import { Suspense } from "react";
import NewPlantDetails from "../pages/NewPlantDetails";

export const router = createBrowserRouter([
 {
    path: "/",
    // loader: ()=> fetch('https://plant-care-user.vercel.app/plant'),
  //    loader: async () => {
  //   const res = await fetch("/data.json");

  //   if (!res.ok) {
  //     throw new Error("Failed to load data.json");
  //   }

  //   const data = await res.json();
  //   return data;
  // },
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),

    loader: () => fetch('/data.json')  },
 {
    path: "/register",
    element: (
      <>
        <Navbar />
        <Register/>
        <Footer />
      </>
    ),
  },
 {
    path: "/login",
    element: (
      <>
        <Navbar />
        <Login/>
        <Footer />
      </>
    ),
  },
  {
    path: "/my-plants",
    loader: ()=> fetch('https://plant-care-user.vercel.app/plant'),
    element: (
      
      <PrivateRoute>
      <>
        <Navbar />
       
        <MyPlants/>
        <Footer />
      </>

      </PrivateRoute>
        
    ),
  },
  {
    path: "/add-plant",
    element: (
      <PrivateRoute>
      <>
        <Navbar />
        <AddPlant />
        <Footer />
      </>
      </PrivateRoute>
    ),
  },
  {
    path: "update-plants/:id",
    loader: ({params}) => fetch(`https://plant-care-user.vercel.app/plant/${params.id}`),
    element: (
      <>
        <Navbar />
        <UpdatePlants/>
        <Footer />
      </>
    ),
  },
  {
    path: "/all-plants",
    element: (
      <>
        <Navbar />
        <AllPlants/>
        <Footer />
      </>
    ),
  },
  {
    path: "/plant/:id",
    element: (
      <PrivateRoute>
      <>
        <Navbar />
        <PlantDetails/>
        <Footer />
      </>
      </PrivateRoute>
    ),
  },
  {
    path: "/newPlant/:id",
    element: (
      <>
        <Navbar />
        <NewPlantDetails/>
        <Footer />
      </>
    ),
    loader: () => fetch('/data.json')
  },
  {
    path: "*",
    element: <NotFound/>
  }

]);