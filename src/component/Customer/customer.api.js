import axios from "axios";

const urlAPI = 'http://localhost:3002/users'

const list = async () => {
    try {
        const result = await axios.get(`${urlAPI}/customer/`)
        return result.data
    } catch (error) {
        return await error.message
    }
}
const deleted = async (data) => {
    try {
        const result = await axios.delete(`${urlAPI}/customer/${data.customerId}`)
        return result
    } catch (error) {
        return await error.message
    }
}

const create = async (payload) => {
    try {
        const result = await axios.post(`${urlAPI}/customer/`, payload)
        return result
    } catch (error) {
        return await error.message
    }
}

const upload = async (payload) => {
    try {
        const result = await axios.post(`${urlAPI}/customer/upload`, payload)
        return result
    } catch (error) {
        return await error.message
    }
}

const update = async (data) => {
    try {
        const result = await axios.put(`${urlAPI}/customer/${data.customerId}`, data)
        return result
    } catch (error) {
        return await error.message
    }
}

const findOne = async (customerId) => {
    try {
        const result = await axios.get(`${urlAPI}/customer/${customerId}`)
        return result.data
    } catch (error) {
        return await error.message
    }
}

export default { list, deleted, create, update, findOne, upload }