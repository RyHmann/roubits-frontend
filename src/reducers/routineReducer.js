import { createSlice } from "@reduxjs/toolkit"
import routineService from "../services/routine"
import habitService from "../services/habit"

const routineSlice = createSlice({
    name: 'routines',
    initialState: [],
    reducers: {
        addRoutine(state, action) {
            state.push(action.payload)
        },

        setRoutines(state, action) {
            return action.payload
        },

        populateRoutine(state, action) {
            const routine = state.find(routine => routine.id === action.payload.routine)
            const updatedRoutine = {...routine, habits: routine.habits.push(action.payload)}
            state.map(routines => routines.id !== updatedRoutine.id ? routines : updatedRoutine)
        }
    }
})

export const createRoutine = (content) => {
    return async dispatch => {
        const newRoutine = {
            name: content
        }
        const addedRoutine = await routineService.create(newRoutine)
        dispatch(addRoutine(addedRoutine))
    }
}

export const createHabit = (content) => {
    return async dispatch => {
        const newHabit = {
            name: content.name,
            value: content.value,
            routine: content.routine
        }
        const addedHabit = await habitService.create(newHabit)
        dispatch(populateRoutine(addedHabit))
    }
}

export const initializeRoutines = (userId) => {
    return async dispatch => {
        const routines = await routineService.getByUserId(userId)
        dispatch(setRoutines(routines))
    }
}

export const { addRoutine, setRoutines, populateRoutine, addHabit } = routineSlice.actions

export default routineSlice.reducer