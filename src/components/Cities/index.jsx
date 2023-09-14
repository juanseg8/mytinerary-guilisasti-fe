import { useState, useEffect, useRef } from "react"
import { getAllCities } from "../../services/citiesQueries";
import Citie from "../Citie";
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { chargeFilterCities } from "../../store/actions/citiesActions";

function Cities() {
  
  const dispatch = useDispatch()

  const citiesStore = useSelector(store => store.filterCities)

  useEffect(() => {
    getAllCities()
      .then(cities => dispatch(chargeFilterCities(cities)))
      .catch(err => console.log(err))
  }, [])


  const input = useRef(null)

  const handleInput = (e) => {
    e.preventDefault();
    if (input.current.value) {
      const queryParams = "?name=" + input.current.value
      getAllCities(queryParams)
        .then(cities => dispatch(chargeFilterCities(cities)))
        .catch(err => console.log(err))
    } else {
      getAllCities()
        .then(cities => dispatch(chargeFilterCities(cities)))
        .catch(err => console.log(err))
    }
  }

  return (
    <>
      <div className="h-full w-full flex flex-col items-center">

        <form className="h-10 grid grid-cols-[2fr,20fr] border-solid rounded-xl shadow-neutral-800 shadow-lg mt-24">
          <button onClick={handleInput} className="w-8"><span className="material-symbols-outlined pt-1">
            search
          </span></button>
          <input type="text" className="focus:border-1 rounded-xl" placeholder='Search your city' ref={input}></input>
        </form>

        <div className="mt-12 grid grid-cols-4 gap-4">
          {citiesStore.filterCities.length > 0 ? (
            citiesStore.filterCities.map(cities => <Citie data={cities} key={cities._id}></Citie>))
            : (
              <h2>No hay resultados</h2>
            )
          }
        </div>
      </div>


    </>
  )
}

export default Cities

