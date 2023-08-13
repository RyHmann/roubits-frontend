import DeleteButton from "./DeleteButton"
import { deleteHabit } from "../reducers/routineReducer"
import { useDispatch } from "react-redux"

const Habit = ( {habit} ) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteHabit(habit))
    }

    return (
        <div key={ habit.id }>
            {habit.name} {habit.value}
            <DeleteButton 
            label="delete" 
            onClick={handleDelete}>
                Delete Habit
            </DeleteButton>
        </div>
    )
}

export default Habit