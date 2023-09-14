import View1 from '../View1'
import View2 from '../View2'
import View3 from '../View3'
import React, { useState, useEffect } from 'react'


function index() {

    let [view, setView] = useState(1)

    let handlerBack = () => {
        if (view != 1) {
            setView(view - 1)
        }
    }

    let handlerUp = () => {
        if (view != 3) {
            setView(view + 1)
        }
    }


    useEffect(() => {

        setInterval(() => {
            handlerUp()
        }, 6000)

    },)



    return (
        <>
            <h2 className=' text-center mt-16 text-3xl font-semibold'>Poular My Tineraries!</h2>

            <div className='grid grid-cols-[1fr,10fr,1fr]'>

                <div className='flex justify-end'>
                    <button onClick={() => handlerBack()}><span className="material-symbols-outlined pr-10">arrow_back_ios</span></button>
                </div>

                <div className=''>
                    {view == 1 && <View1></View1>}
                    {view == 2 && <View2></View2>}
                    {view == 3 && <View3></View3>}
                </div>

                <div className='flex self-center'>
                    <button onClick={() => handlerUp()}><span className="material-symbols-outlined pl-10">arrow_forward_ios</span></button>
                </div>

            </div>

        </>
    )
}

export default index