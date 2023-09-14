import React, { useRef } from 'react'
import { getAllCities } from '../../services/citiesQueries';

function Searcher() {

  const input = useRef(null)

  const handleInput = (e) => {
    e.preventDefault();
    console.log(input.current.value);
    if (input.current.value) {
      const queryParams= "?name=" + input.current.value
      getAllCities(queryParams)
      .then(respuesta => setCities(respuesta))
      .catch(err => console.log(err))
      
    }

  }

  return (
    <>
      <input type="search" className=' mt-24 w-1/4' placeholder='Search your city' onInput={handleInput} ref={input}></input>
    </>
  )
}

export default Searcher