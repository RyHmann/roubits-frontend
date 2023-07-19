import { useState } from "react"

const HabitForm = ( {routine, createHabit} ) => {

    const [habitName, setHabitName] = useState('')
    const [habitValue, setHabitValue] = useState('5')

    const addHabit = (event) => {
        event.preventDefault()
        createHabit({
            name: habitName,
            value: habitValue,
            routine: routine.id
        })
        clearHabitState()
    }

    const clearHabitState = () => {
        setHabitName('')
        setHabitValue('5')
    }

    return (
        <form onSubmit={addHabit}>
        <label>
            Habit name
            <input type="text" value={habitName} onChange={ ({target}) => setHabitName(target.value)}/>
        </label>
        <label>
            Habit value
            <input type="number" min="5" max="100" step="5" value={habitValue} onChange={ ({ target }) => setHabitValue(target.value)}/>
        </label>
        <button type="submit">Add habit</button>
    </form>
    )
}

export default HabitForm