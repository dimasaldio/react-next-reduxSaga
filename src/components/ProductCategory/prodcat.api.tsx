import axios from "axios";

const urlAPI = 'http://localhost:3002/users'

const list = async () => {
    try {
        const result = await axios.get(`${urlAPI}/prodcat/`)
        return result.data
    } catch (error:any) {
        return await error.message
    }
}
const deleted = async (data:any) => {
    try {
        const result = await axios.delete(`${urlAPI}/prodcat/${data.productCategoryId}`)
        return result
    } catch (error:any) {
        return await error.message
    }
}

const create = async (payload:any) => {
    try {
        const result = await axios.post(`${urlAPI}/prodcat/`, payload)
        return result
    } catch (error:any) {
        return await error.message
    }
}


const update = async (data:any) => {
    try {
        const result = await axios.put(`${urlAPI}/prodcat/${data.productCategoryId}`, data)
        return result
    } catch (error:any) {
        return await error.message
    }
}

export default { list, deleted, create, update }