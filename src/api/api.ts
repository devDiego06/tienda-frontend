import axios from "axios";
import { getAuthToken } from "../store/Auth.store";

const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000
})

//REQUEST: inyecta el JWT en cada llamada
client.interceptors.request.use((config) => {
    const token = getAuthToken()
    if(token) config.headers.Authorization = `Bearer ${token}`
    return config
})

//RESPONSE: manejo de errores globales
client.interceptors.response.use((response) => response, (error) => {
    const status = error.response?.status

    if(status === 401) {
        localStorage.removeItem('token')
        window.location.href = '/login'
    }

    if(status === 403) {
       window.location.href = '/unauthorized'
    }

    return Promise.reject(error)
})


export default client;