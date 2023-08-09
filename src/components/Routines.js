import { useEffect } from "react"
import Routine from "./Routine"
import RoutineForm from "./RoutineForm"
import { useDispatch, useSelector } from "react-redux"
import { initializeRoutines } from "../reducers/routineReducer"

const Routines = ({ user }) => {

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(initializeRoutines(user.id))
    }, [dispatch, user.id])

    const routines = useSelector(state => state.routines)

    return (
        <div className="outline outline-offset-2 outline-blue-500">
            <h1 className="text-2xl font-bold">My Routines</h1>
              {routines.map(routine => 
                  <Routine key={ routine.id } routine={ routine }/>
              )}
            <RoutineForm/>
        </div>
    )
}

export default Routines