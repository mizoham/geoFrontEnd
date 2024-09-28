import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api'

const axiosInstance = axios.create({baseURL : BASE_URL})


export const getEvents = async ()=>{
    return (await axiosInstance.get('events')).data
}


