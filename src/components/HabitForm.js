import SubmitButton from "./SubmitButton"
import { createHabit } from "../reducers/routineReducer"
import { useDispatch } from "react-redux"

const HabitForm = ( {routine} ) => {

    const dispatch = useDispatch()

    const handleAddHabit = (event) => {
        event.preventDefault()
        const habit = {
            name: event.target.habitname.value,
            value: event.target.habitvalue.value,
            routine: routine.id
        }
        dispatch(createHabit(habit))
        event.target.habitname.value = ''
        event.target.habitvalue.value = 5
    }

    return (
        <form onSubmit={handleAddHabit}>
        <label>
            Habit name
            <input type="text" name="habitname"/>
        </label>
        <label>
            Habit value
            <input type="number" name="habitvalue" min="5" max="100" step="5"/>
        </label>
        <SubmitButton label="Add habit"/>
    </form>
    )
}

export default HabitForm