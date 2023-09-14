import axios from "axios";

const Cities = axios.create({
    baseURL: "http://localhost:2000"
})

export const getAllCities = async (queryParams = "") => {
    try {
        const respuesta = await Cities("/api/cities" + queryParams)
        return respuesta.data.Cities
    } catch (error) {
        return []
    }

}

export const getCitie = async (_id) => {
    try {
        const respuesta = await Cities("/api/cities/")
        const cities = respuesta.data.Cities
        const citie = cities.find(e => e._id === _id)
        return citie
    } catch (error) {
        return []
    }

}