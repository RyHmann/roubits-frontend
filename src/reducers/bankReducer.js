import { createSlice } from "@reduxjs/toolkit"
import bankService from "../services/bank"

const bankSlice = createSlice({
    name: 'bank',
    initialState: null,
    reducers: {
        setBalance(state, action) {
            return action.payload
        }
    }
})

export const initializeBank = (user) => {
    return async dispatch => {
        const currentBalance = await bankService.getBalance(user)
        dispatch(setBalance(currentBalance.value))
    }
}

export const { setBalance } = bankSlice.actions

export default bankSlice.reducer