import { createReducer } from "@reduxjs/toolkit";
import { chargeCities, chargeFilterCities, chargeCitieDetail, chargeItinerary } from "../actions/citiesActions";

const initialState1 = {
    Cities: [],
}

const initialState2 = {
    filterCities: [],
}

const initialState3 = {
    citieDeatil: []
}

const initialState4 = {
    itinerary: []
}

export const citiesReducer = createReducer(initialState1, (builder) =>

    builder
        .addCase(chargeCities, (state, action) => {
            return {
                ...state,
                cities: action.payload
            }
        })
)

export const filterCitieReducer = createReducer(initialState2, (builder) =>
    builder
        .addCase(chargeFilterCities, (state, action) => {
            return {
                ...state,
                filterCities: action.payload
            }
        })
)

export const detailCitieReducer = createReducer(initialState3, (builder) =>
    builder
        .addCase(chargeCitieDetail, (state, action) => {
            return {
                ...state,
                citieDeatil: action.payload
            }
        })
)

export const itineraryReducer = createReducer(initialState4, (builder) =>
    builder
        .addCase(chargeItinerary, (state, action) => {
            return {
                ...state,
                itinerary: action.payload
            }
        })
)