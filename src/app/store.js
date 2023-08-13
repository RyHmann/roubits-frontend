import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../reducers/userReducer"
import routineReducer from "../reducers/routineReducer"

export default configureStore({
    reducer: {
        routines: routineReducer,
        user: userReducer
    }
})
