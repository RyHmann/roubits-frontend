import axios from "axios"
const baseUrl = '/api/habits'
const routineUrl = '/api/routines'

const create = async newHabit => {
    const response = await axios.post(baseUrl, newHabit)
    return response.data
}

const getHabitsByRoutineId = async (routineId) => {
    const response = await axios.get(`${routineUrl}/${routineId}/habits`)
    console.log(response.data)
}

export default {
    create,
    getHabitsByRoutineId
}