import React from 'react'
import Cities from "../../components/Cities"



function index() {

  return (
      <div className='w-screen flex flex-col justify-center items-center '>
        <h1 className='text-6xl'>Cities</h1>
        <Cities></Cities>
      </div>
  )
}

export default index