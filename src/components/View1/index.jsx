import React from 'react'
import Citie from '../Citie'
import CitieCarousel from "../CitieCarousel"
import { useEffect, useState } from 'react'
import { getAllCities } from '../../services/citiesQueries'



function index() {

    const [cities, setCities] = useState([])


    useEffect(() => {
        getAllCities()
            .then((respuesta) => setCities(respuesta))
            .catch((err) => console.log(err))



    }, [])

    const nombresABuscar = ["Bangkok", "Paris", "Londres", "Dubai"];

    const fourCities = cities.filter(element => {
        return nombresABuscar.includes(element.name);
    })



    return (
        <>
            <div className=' mt-20 mb-20 grid grid-cols-4 gap-8 justify-items-center sm:grid-cols-2'>

                {
                    fourCities.map(fourCities => <CitieCarousel data={fourCities} key={fourCities._id}></CitieCarousel>)
                }

            </div>
        </>
    )
}

export default index
