import Habit from "./Habit"
import HabitForm from "./HabitForm"
import Togglable from "./Togglable"
import habitService from '../services/habit'
import { useState, useEffect } from "react"

const Routine = ({ routine }) => {
    const [habits, setHabits] = useState([])

    useEffect(() => {
        setHabits(routine.habits)
    }, [routine.habits])

    const addHabit = async (habitObject) => {
        try {
            const addedHabit = await habitService.create(habitObject)
            setHabits(routine.habits.concat(addedHabit))
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div>
            <h3>{ routine.name }</h3>
            <div>
                { habits.map(habit => 
                    <Habit key={habit.id} habit={habit}/>
                )}
            </div>
            <Togglable buttonLabel="Add habit">
                <div>
                    <p>Add Habit to Routine</p>
                    <HabitForm routine={routine} createHabit={addHabit}/>
                </div>
            </Togglable>
        </div>
    )
}

export default Routine