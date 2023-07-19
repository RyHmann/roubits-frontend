import { useState, useEffect } from "react"
import Routine from "./Routine"
import RoutineForm from "./RoutineForm"
import routineService from "../services/routine"

const Routines = ({ user }) => {
    const [routines, setRoutines] = useState([])

    useEffect(() => {
        routineService.getByUserId(user.id)
                      .then(routines => {
                        setRoutines(routines)
                      })
    }, [user.id])

    const addRoutine = async (routineObject) => {
        try {
          const addedRoutine = await routineService.create(routineObject)
          setRoutines(routines.concat(addedRoutine))
        } catch (error) {
          console.log(error.message)
        }
      }

    return (
        <div>
            <h1>My Routines</h1>
            <div>
                {routines.map(routine => 
                    <Routine key={ routine.id } routine={ routine }/>
                )}
            </div>
            <RoutineForm createRoutine={ addRoutine }/>
        </div>
    )
}

export default Routines