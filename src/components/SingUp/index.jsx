import React, { useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login, register } from '../../store/actions/userActions';
import { GoogleLogin } from '@react-oauth/google';
import decode from "jwt-decode";
import Swal from 'sweetalert2';
import "./styles.css"

function SingUpComponents() {

    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        customClass: {
            popup: 'colored-toast'
        },
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const [countries, setCountries] = useState([]);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        axios('https://restcountries.com/v3.1/all?fields=name')
            .then(({ data }) => setCountries(data.map((country) => country.name.common)))
    }, [])

    const email = useRef()
    const password = useRef()
    const name = useRef()
    const lastname = useRef()
    const dateBirth = useRef()
    const country = useRef()
    const urlPhoto = useRef()

    const handlerSubmit = (e) => {
        e.preventDefault()
        const aux = [name, email, password, urlPhoto, country];
        if (aux.some((campo) => !campo.current.value)) {
            Toast.fire({
                position:"top",
                icon: 'error',
                iconColor:"black",
                title: 'All fields are required',
            })
        } else {
            const body = {
                email: email.current.value,
                password: password.current.value,
                name: name.current.value,
                lastname: lastname.current.value,
                datebirth: dateBirth.current.value,
                country: country.current.value,
                urlphoto: urlPhoto.current.value
            }
            const bodyLogin = {
                email: email.current.value,
                password: password.current.value
            }

            dispatch(register(body)).then(() => {
                dispatch(login(bodyLogin)).then((response) => {
                    if (response.payload.success) {
                        Toast.fire({
                            icon: 'success',
                            iconColor:"black",
                            title: 'Signed up and logged successfully',
                        })
                        navigate("/")
                    }
                })

            })
        }
    }

    const singUpWithGoogle = (credentialResponse) => {
        const dataUser = decode(credentialResponse.credential)
        const bodyGoogle = {
            email: dataUser.email,
            password: dataUser.sub,
            name: dataUser.given_name,
            lastname: dataUser.family_name,
            urlphoto: dataUser.picture
        }
        const bodyGoogleLogin = {
            email: dataUser.email,
            password: dataUser.sub
        }
        const password = dataUser.sub

        dispatch(register(bodyGoogle)).then(() => {
            dispatch(login(bodyGoogleLogin)).then((response) => {
                if (response.payload.success) {
                    Toast.fire({
                        icon: 'success',
                        iconColor:"black",
                        title: 'Signed up and logged in successfully',
                        text:"Your password is " + password
                    })
                    navigate("/")

                }
            })
        })
    }

    return (
        <>
            <div className=' static h-screen w-screen bg-center bg-no-repeat bg-cover grid grid-cols-1' style={{ backgroundImage: `url("https://miro.medium.com/v2/resize:fit:1400/1*ud6vOQx-CvFkoZWJQjFhhg.jpeg")` }}>

                <div className='NavBar mt-14'>
                    <h4 className=' w-screen text-3xl ml-40 flex sm:ml-20 sm:text-2xl '>
                        <img className='h-14 w-auto pb-3 mr-2 sm:10 sm:pb-5 ' src="https://images.vexels.com/media/users/3/207228/isolated/preview/affec54749806d2752556ed7e77378c6-mapa-de-ubicacion-colorido-icono-trazo.png" alt="logo" />
                        My Tinerary</h4>
                    <div className=' w-screen flex gap-8 justify-end mr-40 sm:mr-10'>
                        <Link to="/" className='Home mt-2 hover:font-semibold text-xl '>Home</Link>
                        <Link to="/cities" className='Cities mt-2 hover:font-semibold text-xl '>Cities</Link>
                        <Link to="/login">
                            <button className=' h-8 text-sm mt-2  bg-indigo-500 hover:bg-indigo-700 text-white font-bold px-4 rounded-md flex'>
                                <span className="material-icons text-lg mr-1 pt-1">person</span>
                                <p className='mt-1.5'>Sing In</p>
                            </button>
                        </Link>
                    </div>
                </div>


                <div className=" absolute top-36 right-48">

                    <form action="" className='bg-white grid rounded-xl shadow-black shadow-lg' onSubmit={handlerSubmit}>

                        <p className='text-3xl mt-8 text-center'>Sing Up</p>

                        <label className='grid pl-8 pr-8 mt-8'>Email
                            <input type="email" name='email' className="border-b border-black" ref={email} />
                        </label>

                        <label className='grid pl-8 pr-8 mt-3'>Password
                            <input type="password" name='password' className="border-b border-black" ref={password} />
                        </label>

                        <label className='grid pl-8 pr-8 mt-3'>First Name
                            <input type="text" name='firstName' className="border-b border-black" ref={name} />
                        </label>

                        <label className='grid pl-8 pr-8 mt-3'>Last Name
                            <input type="text" name='lastName' className="border-b border-black" ref={lastname} />
                        </label>

                        <label className='grid pl-8 pr-8 mt-3'>Date of birth
                            <input type="date" name='date' ref={dateBirth} />
                        </label>

                        <label className='grid pl-8 pr-8 mt-3'>Country
                            <select name='countries' ref={country}>
                                {countries.sort().map((country) => <option key={`opt-country-${country}`} value={country} > {country} </option>)}
                            </select>
                        </label>

                        <label className='grid pl-8 pr-8 mt-3'>URL photo
                            <input type="url" name='urlPhoto' className="border-b border-black" ref={urlPhoto} />
                        </label>

                        <div className='flex mt-8 mb-10 ml-8 '>
                            <button className=' h-8 w-40 text-sm  bg-indigo-500 hover:bg-indigo-700 text-white font-bold rounded-md'>
                                <p className=''>Sing Up</p>
                            </button>
                            <GoogleLogin
                                text="signup_with"
                                onSuccess={singUpWithGoogle}
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                            />
                        </div>


                    </form>
                </div>
            </div>
        </>
    )
}

export default SingUpComponents