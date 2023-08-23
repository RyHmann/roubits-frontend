import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../reducers/userReducer"
import routineReducer from "../reducers/routineReducer"
import bankReducer from "../reducers/bankReducer"

export default configureStore({
    reducer: {
        routines: routineReducer,
        user: userReducer,
        bank: bankReducer
    }
})
