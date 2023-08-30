import { createSlice } from "@reduxjs/toolkit"
import bankService from "../services/bank"
import depositService from "../services/deposit"

const bankSlice = createSlice({
    name: 'bank',
    initialState: null,
    reducers: {
        setBalance(state, action) {
            return action.payload
        },

        addToBalance(state, action) {
            return action.payload.value
        }
    }
})

export const initializeBank = (user) => {
    return async dispatch => {
        const currentBalance = await bankService.getBalance(user)
        dispatch(setBalance(currentBalance.value))
    }
}

export const depositHabit = (user, habit) => {
    return async dispatch => {
        const depositedHabit = await depositService.depositHabit(user, habit)
        dispatch(addToBalance(depositedHabit))
    }
}

export const { setBalance, addToBalance } = bankSlice.actions

export default bankSlice.reducer