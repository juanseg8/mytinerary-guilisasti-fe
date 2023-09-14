import React from 'react'
import { Link } from 'react-router-dom'

function index() {
  return (
    <div className='flex justify-center mt-16 sm:mt-56'>
      <Link to={"/cities"}>
        <button className='mt-16 mb-16 text-xs bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-10 rounded-md flex animate-bounce'>
          <img src="https://cdn-icons-png.flaticon.com/512/814/814513.png" alt="mundo" className='h-10 w-10 mr-4' />
          <p className='mt-3'>KNOW THE WORLD WITH A SINGLE CLICK</p>
        </button>
      </Link>

    </div>
  )
}

export default index
