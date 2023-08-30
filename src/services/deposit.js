import axios from "axios"

const baseUrl = 'api/deposit'

const depositHabit = async (user, habit) => {
    const config = {
        headers: { Authorization: `Bearer ${user.token}`}
    }

    const response = await axios.post(`${baseUrl}/${user.id}`, habit, config)
    return response.data
}

export default {
    depositHabit
}