import axios from "axios"
const baseUrl = '/api/habits'

const create = async newHabit => {
    const response = await axios.post(baseUrl, newHabit)
    return response.data
}

export default {
    create
}