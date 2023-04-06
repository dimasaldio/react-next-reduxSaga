import axios from "axios";
const urlAPI = 'http://localhost:3002/users'
import {getCookie} from 'cookies-next'

const register = async(data:any)=>{
    try {
        const result = await axios.post(`${urlAPI}/register`,data)
        return result
    } catch (error) {
        return error        
    }
}

const login = async(data:any)=> {
    try {
        const result = await axios.post(`${urlAPI}/login`,data)
        return result
    } catch (error) {
        return error        
    }
}

const profile = async()=>{
    axios.defaults.headers.common = {'Authorization' : `Bearer ${getCookie('access_token')}`}
    try {
        const result = await axios.get(`${urlAPI}/profile`)
        return result
    } catch (error) {
        return error        
    }
}

export default {
    register,
    login,
    profile
}