import axios from "axios";

const urlAPI = 'http://localhost:3002/users'

const list = async () => {
    try {
        const result = await axios.get(`${urlAPI}/order`)
        return result.data
    } catch (error:any) {
        return await error.message
    }
}
const deleted = async (data:any) => {
    try {
        const result = await axios.delete(`${urlAPI}/order/${data.ordersId}`)
        return result
    } catch (error:any) {
        return await error.message
    }
}

const create = async (payload:any) => {
    try {
        const result = await axios.post(`${urlAPI}/order`, payload)
        return result
    } catch (error:any) {
        return await error.message
    }
}


const update = async (data:any) => {
    try {
        const result = await axios.put(`${urlAPI}/order/${data.ordersId}`, data)
        return result
    } catch (error:any) {
        return await error.message
    }
}

export default { list, deleted, create, update }