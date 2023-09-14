import React from 'react'
import { Link } from 'react-router-dom'


function Citie({ data }) {

    return (
        <>
            <div style={{ backgroundImage: `url("${data.image}")` }} className=" w-72 h-60 rounded-2xl bg-center bg-no-repeat bg-cover hover:-translate-y-2">
                <p className='text-white ml-4 mt-4 text-xl font-extralight'>{data.name}</p>
                <p className='text-white ml-4 mt-2 text-sm font-extralight'>{data.country}</p>
                <Link to={`/citie/${data._id}`}>
                    <button className='ml-4 mt-28 text-xs h-10 bg-indigo-500 hover:bg-indigo-700 text-white font-extralight rounded-md'>
                        <p className='pr-4 pl-4'>View More</p>
                    </button>
                </Link>
            </div>
        </>

    )

}

export default Citie