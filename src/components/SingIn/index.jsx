import React from "react";
import "./styles.css"
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions/userActions";
import { GoogleLogin } from '@react-oauth/google';
import decode from "jwt-decode";
import Swal from "sweetalert2";


function SingInComponents() {

    const email = useRef()
    const password = useRef()

    const dispatch = useDispatch()
    const navigate = useNavigate()

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

    const handlerSingIn = (e) => {
        e.preventDefault()
        const body = {
            email: email.current.value,
            password: password.current.value
        }
        dispatch(login(body)).then((response) => {
            if (response.payload.success) {
                Toast.fire({
                    icon: 'success',
                    iconColor:"black",
                    title: 'Signed in successfully',
                })
                navigate("/")
            }
        })
    }

    const singInWithGoogle = (credentialResponse) => {
        const dataUser = decode(credentialResponse.credential)
        const bodyGoogleLogin = {
            email: dataUser.email,
            password: dataUser.sub
        }
        dispatch(login(bodyGoogleLogin)).then((response) => {
            if (response.payload.success) {
                Toast.fire({
                    icon: 'success',
                    iconColor:"black",
                    title: 'Signed in successfully',
                })
                navigate("/")
            }
            
        })
    }

    return (
        <>
            <div className=' static h-screen w-screen bg-center bg-no-repeat bg-cover grid grid-cols-1' style={{ backgroundImage: `url("https://miro.medium.com/v2/resize:fit:1400/1*ud6vOQx-CvFkoZWJQjFhhg.jpeg")` }}>

                <div className='NavBar'>
                    <h4 className=' w-screen text-3xl ml-40 flex sm:ml-20 sm:text-2xl '>
                        <img className='h-14 w-auto pb-3 mr-2 sm:10 sm:pb-5 ' src="https://images.vexels.com/media/users/3/207228/isolated/preview/affec54749806d2752556ed7e77378c6-mapa-de-ubicacion-colorido-icono-trazo.png" alt="logo" />
                        My Tinerary</h4>
                    <div className=' w-screen flex gap-8 justify-end mr-40 sm:mr-10'>
                        <Link to="/" className='Home mt-2 hover:font-semibold text-xl '>Home</Link>
                        <Link to="/cities" className='Cities mt-2 hover:font-semibold text-xl '>Cities</Link>

                        <Link to="/singup">
                            <button className=' h-8 text-sm mt-2  bg-indigo-500 hover:bg-indigo-700 text-white font-bold px-4 rounded-md flex'>
                                <span className="material-icons text-lg mr-1 pt-1">person</span>
                                <p className='mt-1.5'>Sing Up</p>
                            </button>
                        </Link>
                    </div>
                </div>


                <div className=" absolute top-64 right-60">


                    <form action="" className='bg-white grid rounded-xl shadow-black shadow-lg' onSubmit={handlerSingIn}>

                        <p className='text-3xl mt-8 text-center'>Sing In</p>

                        <label className='grid pl-8 pr-8 mt-8'>Email
                            <input type="email" name='email' className="border-b border-black" ref={email} />
                        </label>

                        <label className='grid pl-8 pr-8 mt-3'>Password
                            <input type="password" name='password' className="border-b border-black" ref={password} />
                        </label>

                        <div className="mt-8 mb-10 ml-8 mr-8 grid gap-2">
                            <button className=' h-8 text-sm bg-indigo-500 hover:bg-indigo-700 text-white font-bold rounded-md'>
                                <p className=''>Sing In</p>
                            </button>
                            <GoogleLogin
                                text="signin_with"
                                onSuccess={singInWithGoogle}
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

export default SingInComponents