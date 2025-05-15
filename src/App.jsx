import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getRandomPokemonId from './utils/randomnum'

const App = () => {

  const [data, setdata] = useState(null);
  const [name, setname] = useState(null);
  const [img, setimg] = useState()
  const [height, setheight] = useState()
  const [weight, setweight] = useState()

     const pokemonId =getRandomPokemonId();

 
 useEffect(()=>{
 
  fetchdata();

 },[])

  

  const fetchdata = ()=>{
 axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
  .then((res)=>{
   const pokemon = res;
   console.log(res.data)
   setdata(pokemon?.data);
   setname(pokemon?.data?.name)
   setimg(pokemon?.data?.sprites?.front_default)
setheight(pokemon?.data?.height)
setweight(pokemon?.data?.weight)

  })
  .catch((err)=>{
    console.log("error in fetching data from API:",err)
  })
 

  }
  return (
  <div className='bg-black' >
   
    <div className='flex flex-col items-center justify-center h-screen w-screen'>
      <h1 className='text-3xl text-purple-600 text-center font-bold tracking-tight underline mb-5 mt-[-50px]'>Random Pokemon</h1>
      <div className=' h-[50vh] w-[25%]  border border-gray-400 rounded-xl overflow-hidden bg-purple-600'>
        {/* img div */}
        <div className='h-[50%] w-full flex items-center justify-center'>
          <img src={img} alt={name} className='h-full w-full object-fit' />

        </div>
      {/* name div */}
      <div className='flex flex-col  px-4 py-2  gap-2 items-center tracking-tight'>
        <span className='text-lg font-serif font-semibold'>Name:-{name}</span>
        <span className='text-lg font-serif font-semibold'>Weight:-{weight}</span>
        <span className='text-lg font-serif font-semibold'>Height:-{height}</span>
       <button className='bg-blue-400 rounded-2xl px-6 py-2 font-serif font-semibold mt-2 text-black' onClick={fetchdata} >Get Pokemon</button>
      </div>
      </div>
    </div>

   


  </div>
  )
}

export default App
