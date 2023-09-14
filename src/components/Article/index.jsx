import React from 'react'

function index() {
  return (
    <>
      <article className=' w-sreen  h-80 flex mt-10 sm:grid sm:grid-cols-1 '>

        <div className=' w-2/5 h-full ml-20 sm:w-full sm:flex sm:justify-center sm:items-center sm:flex-col sm:ml-0'>
          <p className=' ml-20 text-xl font-bold sm:mr-20'>Find your perfect trip, designed by insiders who know and love their cities!</p>
          <p className='ml-20 text-justify mt-4 sm:text-start sm:mr-20'>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
          <button className='ml-20 mt-4 text-xs bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-10 rounded-md sm:mt-6 sm:ml-0'>View More</button>
        </div>

        <div className=' w-2/5 h-full ml-8 sm:w-full sm:flex sm:justify-center sm:items-center sm:ml-0 '>
          <img src="https://thattravelitch.com/sites/default/files/2020-04/createyouritinerarygallery.jpg" alt="imagen1" className=' shadow-2xl shadow-black hover:-translate-y-2  sm:w-80 sm:h-auto sm:mt-10' />
        </div>

      </article>
    </>
  )
}

export default index