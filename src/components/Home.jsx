

import Banner from '../pages/Banner'
import NewPlants from '../pages/NewPlants'
import TopMistakes from '../pages/TopMistakes'
import BeginnerPlants from '../pages/BeginnerPlants'
import { useLoaderData } from 'react-router'
import { use } from 'react'
import { AuthContext } from '../context/AuthContext'


export default function Home() {

const {loading} = use(AuthContext)

const plants = useLoaderData()
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-green-600"></span>
        <span className="loading loading-spinner loading-lg text-green-600"></span>
        <span className="loading loading-spinner loading-lg text-green-600"></span>
      </div>
    );
  }
  
  return (
    <>
    <div className='bg-green-50'>
    <Banner></Banner>
      <section className="my-10 max-w-11/12 mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-green-600">🆕 New Plants</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {
        plants.map(plant => <NewPlants key={plant.id} plant={plant}></NewPlants>)
      }
    </div>
    </section>
    
    <TopMistakes></TopMistakes>
    <BeginnerPlants></BeginnerPlants>

    </div>
    
    
    
    </>
  )
}
