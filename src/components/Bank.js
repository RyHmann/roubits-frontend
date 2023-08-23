import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { initializeBank } from "../reducers/bankReducer"

const Bank = () => {

    const dispatch = useDispatch()

    const user = useSelector(state => state.user)

    useEffect(() => {
        dispatch(initializeBank(user))
    }, [dispatch, user])

    const currentBalance = useSelector(state => state.bank)

    return (
        <div>
            <h1>My Bank</h1>
            <h3>{ currentBalance }</h3>
        </div>
    )
}


export default Bank