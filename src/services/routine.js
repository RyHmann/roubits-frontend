import axios from "axios"
const baseUrl = '/api/routines'
const byUserUrl = '/api/users'

let token = null

const setToken = newToken => {
    token = `Bearer ${newToken}`
}

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const getByUserId = async (userId) => {
    const response = await axios.get(`${byUserUrl}/${userId}/routines`)
    return response.data
}

const create = async newRoutine => {
    const config = {
        headers: { Authorization: token }
    }
    const response = await axios.post(baseUrl, newRoutine, config)
    return response.data
}

export default {
    getAll,
    create,
    setToken,
    getByUserId
}