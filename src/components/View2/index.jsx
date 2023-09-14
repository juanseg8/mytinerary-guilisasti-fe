import React from 'react'
import { useState, useEffect } from 'react'
import { getAllCities } from '../../services/citiesQueries'
import CitieCarousel from '../CitieCarousel'


function index() {

const [cities, setCities] = useState([])


useEffect(() => {
    getAllCities()
        .then((respuesta) => setCities(respuesta))
        .catch((err) => console.log(err))



}, [])

const nombresABuscar = ["Singapur","Kuala Lumpur","New York","Estambul"];

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