import Habit from "./Habit"
import HabitForm from "./HabitForm"
import Togglable from "./Togglable"
import { useSelector } from "react-redux"

const Routine = ({ routine }) => {

    const routineId = routine.id
    const habits = useSelector(state => state.routines.find(routine => routine.id === routineId)).habits

    return (
        <div className="shadow-lg p-4">
            <h3 className="text-lg text-sky-800">{ routine.name }</h3>
                { habits.map(habit => 
                    <Habit key={habit.id} habit={habit}/>
                )}
            <Togglable buttonLabel="Add habit">
                    <p>Add Habit to Routine</p>
                    <HabitForm routine={routine}/>
            </Togglable>
        </div>
    )
}

export default Routine