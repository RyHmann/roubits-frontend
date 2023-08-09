import { createSlice } from "@reduxjs/toolkit"
import routineService from "../services/routine"

const routineSlice = createSlice({
    name: 'routines',
    initialState: [],
    reducers: {
        addRoutine(state, action) {
            state.push(action.payload)
        },

        setRoutines(state, action) {
            return action.payload
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

export const initializeRoutines = (id) => {
    return async dispatch => {
        const routines = await routineService.getByUserId(id)
        dispatch(setRoutines(routines))
    }
}

export const { addRoutine, setRoutines } = routineSlice.actions

export default routineSlice.reducer