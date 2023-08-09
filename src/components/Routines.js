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
        <div className="outline outline-offset-2 outline-blue-500">
            <h1 className="text-2xl font-bold">My Routines</h1>
              {routines.map(routine => 
                  <Routine key={ routine.id } routine={ routine }/>
              )}
            <RoutineForm createRoutine={ addRoutine }/>
        </div>
    )
}

export default Routines