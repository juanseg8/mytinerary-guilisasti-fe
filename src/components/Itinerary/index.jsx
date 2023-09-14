import React, { useState } from 'react'
import ticket from "../../../public/images/ticket.png"
import like from "../../../public/images/like.png"
import under from "../../../public/images/underconstruction.png"

function Itinerary({ data }) {

    const [open, setOpen] = useState(false)

    return (
        <>

            <div className= {`${open && " h-64 transition-all duration-200"} w-4/5 h-32 mt-20 rounded-2xl shadow-2xl shadow-gray-800 transition-all duration-200 `}>

                <div className='grid grid-cols-5 pt-6 pr-3'>

                    <div className='flex items-center  justify-center'>
                        <img className='rounded-full h-12 w-12' src="https://lh3.googleusercontent.com/ogw/AGvuzYbyo73a369KyoAFO-k40LJAtb-XaU354YLpSxiheQ=s32-c-mo" alt="" />
                        <p className='ml-2 font-bold'>JuanSe Guilisasti</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='font-bold'>Price:</p>
                        <p className='flex font-semibold'>{data.price}<img className='pb-1.5 ml-2 h-8 w-8' src={ticket} alt="" /></p>

                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='font-bold'>Duration:</p>
                        <p className='font-semibold'>{data.duration} hours</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='font-bold'>Likes:</p>
                        <button className='flex'><p>{data.likes} </p><span className="material-symbols-outlined">favorite</span></button>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='font-bold'>Tags:</p>
                        <p className='font-bold'>{data.tags} </p>
                    </div>
                </div>

                <div className="flex justify-center mt-2">

                    <button onClick={() => {if(open==true){setOpen(false)}else{setOpen(true)}}}>
                        <span className={`animate-bounce flex justify-center material-symbols-outlined`}>expand_more</span>
                    </button>
                </div>

                <div className={`${!open && "hidden"} flex justify-center`}>
                        <img className='h-28 w-52' src={under} alt="" />
                    </div>

            </div>

        </>
    )
}

export default Itinerary