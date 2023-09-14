import { createReducer } from "@reduxjs/toolkit";
import { authenticate, logOut, login, register } from "../actions/userActions";

const initialState = {

    user: {
        email: "",
        _id: "",
    }
}

export const usersReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(register.fulfilled, (state, action) => {
            return {
                user: action.payload.user,
                token: action.payload.token
            }
        })
        .addCase(login.fulfilled, (state, action) => {
            return {
                user: action.payload
            }
        })
        .addCase(authenticate.fulfilled, (state, action) => {
            return {
                user: action.payload.user,
                token: action.payload.token
            }
        })
        .addCase(logOut, (state, action) => {
            return {
                user: {
                    email: "",
                    _id: "",
                }
            }
        })

})