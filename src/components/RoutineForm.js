// import { useState } from "react"
import SubmitButton from "./SubmitButton"
import { useDispatch } from "react-redux"
import { createRoutine } from "../reducers/routineReducer"

const RoutineForm = () => {

    const dispatch = useDispatch()

    const addRoutine = async (event) => {
        event.preventDefault()
        const routine = event.target.routine.value
        event.target.value = ''
        dispatch(createRoutine(routine))
    }

    return (
        <div>
            <h1>Add Routine</h1>
            <form onSubmit={addRoutine}>
                <label>Routine name
                    <input type="text" name="routine"/>
                </label>
                <SubmitButton label="Create" />
            </form>
        </div>
    )
}

export default RoutineForm