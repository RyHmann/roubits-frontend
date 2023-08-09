const Habit = ( {habit} ) => {
    return (
        <div key={ habit.id }>
            {habit.name} {habit.value}
        </div>
    )
}

export default Habit