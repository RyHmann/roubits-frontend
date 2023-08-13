import SubmitButton from "./SubmitButton"
import { loginUser } from "../reducers/userReducer"
import { useDispatch } from "react-redux"
import loginService from "../services/login"
import routineService from "../services/routine"

const LoginForm = () => {

    const dispatch = useDispatch()

    const handleLogin = async (event) => {
        event.preventDefault()
        const user = {
            username: event.target.username.value,
            password: event.target.password.value
        }
        try {
          const loggedUser = await loginService.login(user)
          if (loggedUser) {
            window.localStorage.setItem('loggedRoubitsAppUser', JSON.stringify(loggedUser))
            routineService.setToken(loggedUser.token)
            dispatch(loginUser(user))
          }
        } catch (error) {
          console.log(error.message)
        }
        event.target.username.value = ''
        event.target.password.value = ''
    }

    return (
        <div>
        <h1>log in to application</h1>
        <form onSubmit = {handleLogin}>
          <div>
        Username
            <input type="text" name="username"/>
          </div>
          <div>
        password
            <input type="password" name="password"/>
          </div>
          <SubmitButton type="submit" label="login"/>
        </form>
      </div>
    )
}

export default LoginForm