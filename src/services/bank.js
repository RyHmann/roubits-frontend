import axios from 'axios'
const baseUrl = '/api/balance'

const getBalance = async user => {
    const config = {
        headers: { Authorization: `Bearer ${user.token}` }
    }
    const response = await axios.get(`${baseUrl}/${user.id}`, config)
    return response.data
}

export default {
    getBalance
}