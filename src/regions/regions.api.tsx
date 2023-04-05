import axios from "axios";

const urlAPI = 'http://localhost:3002/api'

const list = async () => {
    try {
        const result = await axios.get(`${urlAPI}/regions/`)
        return result.data
    } catch (error:any) {
        return await error.message
    }
}
const deleted = async (data:any) => {
    try {
        const result = await axios.delete(`${urlAPI}/regions/${data.regionId}`)
        return result
    } catch (error:any) {
        return await error.message
    }
}

const create = async (payload:any) => {
    try {
        const result = await axios.post(`${urlAPI}/regions/`, payload)
        return result
    } catch (error:any) {
        return await error.message
    }
}

const upload = async (payload:any) => {
    try {
        const result = await axios.post(`${urlAPI}/regions/upload`, payload)
        return result
    } catch (error:any) {
        return await error.message
    }
}

const update = async (data:any) => {
    try {
        const result = await axios.put(`${urlAPI}/regions/${data.regionId}`, data)
        return result
    } catch (error:any) {
        return await error.message
    }
}

const findOne = async (regionId:any) => {
    try {
        const result = await axios.get(`${urlAPI}/regions/${regionId}`)
        return result.data
    } catch (error:any) {
        return await error.message
    }
}

export default { list, deleted, create, update, findOne, upload }