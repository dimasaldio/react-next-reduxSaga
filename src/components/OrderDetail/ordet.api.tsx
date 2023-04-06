import axios from "axios";

const urlAPI = 'http://localhost:3002/users'

const list = async () => {
    try {
        const result = await axios.get(`${urlAPI}/ordet`)
        return result.data
    } catch (error:any) {
        return await error.message
    }
}
const deleted = async (data:any) => {
    try {
        const result = await axios.delete(`${urlAPI}/ordet/${data.orderDetailId}`)
        return result
    } catch (error:any) {
        return await error.message
    }
}

const create = async (payload:any) => {
    try {
        const result = await axios.post(`${urlAPI}/ordet`, payload)
        return result
    } catch (error:any) {
        return await error.message
    }
}


const update = async (data:any) => {
    try {
        const result = await axios.put(`${urlAPI}/ordet/${data.orderDetailId}`, data)
        return result
    } catch (error:any) {
        return await error.message
    }
}

export default { list, deleted, create, update }