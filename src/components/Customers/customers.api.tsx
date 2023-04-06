import axios from "axios";

const urlAPI = 'http://localhost:3002/users'

const list = async () => {
    try {
        const result = await axios.get(`${urlAPI}/customer/`)
        return result.data
    } catch (error:any) {
        return await error.message
    }
}
const deleted = async (data:any) => {
    try {
        const result = await axios.delete(`${urlAPI}/customer/${data.customerId}`)
        return result
    } catch (error:any) {
        return await error.message
    }
}

const create = async (payload:any) => {
    try {
        const result = await axios.post(`${urlAPI}/customer/`, payload)
        return result
    } catch (error:any) {
        return await error.message
    }
}


const update = async (data:any) => {
    try {
        const result = await axios.put(`${urlAPI}/customer/${data.customerId}`, data)
        return result
    } catch (error:any) {
        return await error.message
    }
}

export default { list, deleted, create, update }