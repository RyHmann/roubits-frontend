import DeleteButton from "./DeleteButton"
import CompleteButton from "./CompleteButton"
import { deleteHabit } from "../reducers/routineReducer"
import { useDispatch, useSelector } from "react-redux"
import { depositHabit } from "../reducers/bankReducer"

const Habit = ( {habit} ) => {

    const dispatch = useDispatch()

    const user = useSelector(state => state.user)

    const handleDelete = () => {
        dispatch(deleteHabit(habit))
    }

    const handleComplete = habit => {
        if (window.confirm('Complete habit?') === true) {
            dispatch(depositHabit(user, habit))
        }
    }

    return (
        <div key={ habit.id }>
            {habit.name} {habit.value}
            <DeleteButton 
            label="delete" 
            onClick={handleDelete}>
                Delete Habit
            </DeleteButton>
            <CompleteButton label="Complete" onClick={() => handleComplete(habit)}/>
        </div>
    )
}

export default Habit