import React from 'react'
import Navbar from '../../components/Navbar'
import { Outlet } from 'react-router-dom'


function index() {
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    </>
  )
}

export default index