import React from 'react'


function CitieCarousel({ data }) {

    return (
        <>
            <div style={{ backgroundImage: `url("${data.image}")` }} className=" w-64 h-60 rounded-2xl bg-center bg-no-repeat bg-cover hover:-translate-y-2">
                <p className='text-white ml-4 mt-4 text-xl font-extralight'>{data.name}</p>
                <p className='text-white ml-4 mt-2 text-sm font-extralight'>{data.country}</p>
            </div>
        </>

    )

}

export default CitieCarousel