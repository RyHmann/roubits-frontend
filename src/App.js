import { useState, useEffect } from 'react'
import routineService from './services/routine'
import loginService from './services/login'
import LoginForm from './components/LoginForm'
import Routines from './components/Routines'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUser = window.localStorage.getItem('loggedRoubitsAppUser')
    if (loggedUser) {
      const user = JSON.parse(loggedUser)
      setUser(user)
      routineService.setToken(user.token)
    }
  }, [])

  const userSignIn = async (userObject) => {
    try {
      const loggedUser = await loginService.login(userObject)
      console.log('logged user: ', loggedUser)
      if (loggedUser) {
        window.localStorage.setItem('loggedRoubitsAppUser', JSON.stringify(loggedUser))
        routineService.setToken(loggedUser.token)
        setUser(loggedUser)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleLogout = () => {
    window.localStorage.removeItem('loggedRoubitsAppUser')
    setUser(null)
  }
  
  if (!user) {
    return (
      <LoginForm logUser={ userSignIn }/>
    )
  } else {
    return (
      <div className="flex flex-row">
        <div className="basis-1/2">
          <Routines user={ user }/>
        </div>
        <div className="basis-1/2">
          <h1>My Bank</h1>
          <h1>My Rewards</h1>
        </div>
        <button onClick={ handleLogout }>Logout</button>
      </div>
    )
  }
}

export default App;
