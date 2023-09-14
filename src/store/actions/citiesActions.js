import { createAction } from "@reduxjs/toolkit";

export const chargeCities = createAction("cargar_eventos", (cities) => {
    return {
        payload: cities
    }
})

export const chargeFilterCities = createAction("charge_filter_cities", (cities) => {   
    return {
        payload: cities
    }
})

export const chargeCitieDetail = createAction("charge_citie_detail", (citie) => {
    return {
        payload: citie
    }
})

export const chargeItinerary = createAction("charge_itinerary", (itinerary) => {
    return {
        payload: itinerary
    }
})