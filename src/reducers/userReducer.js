import { createSlice } from "@reduxjs/toolkit"
import loginService from "../services/login"
import routineService from "../services/routine"

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        setUser(state, action) {
            return action.payload
        }
    }
})

export const loginUser = (user) => {
    return async dispatch => {
        const loggedUser = await loginService.login(user)
        dispatch(setUser(loggedUser))
    }
}

export const logoutUser = () => {
    return async dispatch => {
        window.localStorage.removeItem('loggedRoubitsAppUser')
        dispatch(setUser(null))
    }
}

export const initializeUser = (user) => {
    return async dispatch => {
        routineService.setToken(user.token)
        dispatch(setUser(user))
    }
}


export const { setUser } = userSlice.actions

export default userSlice.reducer