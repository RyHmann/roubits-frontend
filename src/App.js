import { useEffect } from 'react'
import LoginForm from './components/LoginForm'
import Routines from './components/Routines'
import Bank from './components/Bank'
import { useDispatch, useSelector } from 'react-redux'
import { initializeUser, logoutUser } from './reducers/userReducer'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const loggedUser = window.localStorage.getItem('loggedRoubitsAppUser')
    if (loggedUser) {
      const user = JSON.parse(loggedUser)
      dispatch(initializeUser(user))
    }
  }, [dispatch])

  const user = useSelector(state => state.user)

  const handleLogout = () => {
    dispatch(logoutUser())
  }
  
  if (!user) {
    return (
      <LoginForm/>
    )
  } else {
    return (
      <div className="flex flex-row">
        <div className="basis-1/2">
          <Routines/>
        </div>
        <div className="basis-1/2">
          <Bank/>
          <h1>My Rewards</h1>
        </div>
        <button onClick={ handleLogout }>Logout</button>
      </div>
    )
  }
}

export default App;
