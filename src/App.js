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
  
  if (!user) {
    return (
      <LoginForm logUser={ userSignIn }/>
    )
  } else {
    return (
      <div>
        <Routines user={ user }/>
      </div>
    )
  }
}

export default App;
