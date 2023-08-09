import { useState } from "react"
import SubmitButton from "./SubmitButton"

const RoutineForm = ({ createRoutine }) => {
    const [routineName, setRoutineName] = useState('')

    const addRoutine = (event) => {
        event.preventDefault()
        createRoutine({
            name: routineName
        })
        setRoutineName('')
    }

    return (
        <div>
            <h1>Add Routine</h1>
            <form onSubmit={addRoutine}>
                <label>Routine name
                    <input type="text" value={routineName} onChange={ ({ target }) => setRoutineName(target.value)}></input>
                </label>
                <SubmitButton label="Create" />
            </form>
        </div>
    )
}

export default RoutineForm