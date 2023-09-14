import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from 'sweetalert2';
import "./styles.css"

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


export const register = createAsyncThunk("register", async (body) => {
    try {
        const response = await axios.post("http://localhost:2000/api/user/register", body)
        localStorage.setItem("token", response.data.token)
        return response.data
    } catch (error) {
        console.log(error);
        Toast.fire({
            icon: 'error',
            iconColor:"black",
            title: 'Error',
            text:"There is any error, check the data",
            position:"top"
        })
    }

})

export const login = createAsyncThunk("sign_in", async (body) => {
    try {
        const response = await axios.post("http://localhost:2000/api/user/login", body)
        localStorage.setItem("token", response.data.token)
        return response.data
    } catch (error) {
        console.log(error.message.data);
        Toast.fire({
            icon: 'error',
            iconColor:"black",
            title: 'Error',
            text:"Your email or password is wrong",
            position:"top"
        })
    }
})

export const authenticate = createAsyncThunk("authenticate", async () => {
    try {
        const token = localStorage.getItem("token")

        const response = await axios.post("http://localhost:2000/api/user/authenticated",{}, {
            headers: {
                Authorization: "Bearer " + token
            }

        })

        return {
            user: response.data
        }

    } catch (error) {
        console.log(error.message);
    }


})

export const logOut = createAction("reset", () => {

    localStorage.removeItem("token")
    return {
        payload: null
    }

}) 