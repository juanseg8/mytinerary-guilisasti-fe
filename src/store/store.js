import {configureStore } from "@reduxjs/toolkit";
import { citiesReducer, detailCitieReducer, filterCitieReducer, itineraryReducer  } from "./reducers/citiesReducers";
import { usersReducer } from "./reducers/usersReducers";

export const store = configureStore({
    reducer:{
        filterCities: filterCitieReducer,
        cities: citiesReducer,
        detail: detailCitieReducer,
        itinerary: itineraryReducer,
        user: usersReducer
    }
})

