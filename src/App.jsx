import { useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Cities from './pages/Cities'
import Compoenete404 from './pages/Componente404'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DetailsCities from './pages/DetailCities'
import SingIn from './pages/SingIn'
import { useDispatch } from 'react-redux'
import { authenticate } from './store/actions/userActions'
import SingUp from './pages/SingUp'



const router = createBrowserRouter([
  {
    path: '/citie/:_id',
    element: <DetailsCities />
  },
  {
    path: '/login',
    element: <SingIn />
  },
  {
    path: '/singup',
    element: <SingUp />
  },
  {

    path: '/',
    element: <>
      <Header />
      <Footer />
    </>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/cities',
        element: <Cities />
      },
      {
        path: '*',
        element: <Compoenete404 />
      }
    ],

  }
])

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if(token){
      dispatch(authenticate())
    }   
  }, [])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
