import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const register = createAsyncThunk("register", async (body) => {
    try {
        const response = await axios.post("http://localhost:2000/api/user/register", body)
        localStorage.setItem("token", response.data.token)
        return response.data
    } catch (error) {
        console.log(error);
    }

})

export const login = createAsyncThunk("sign_in", async (body) => {
    try {
        const response = await axios.post("http://localhost:2000/api/user/login", body)
        localStorage.setItem("token", response.data.token)
        return response.data
    } catch (error) {
        console.log(error.message.data);
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