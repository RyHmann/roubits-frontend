import { useState } from "react"

const LoginForm = ({ logUser }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (event) => {
        event.preventDefault()
        logUser({
            username: username,
            password: password
        })
        clearUser()
    }

    const clearUser = () => {
        setUsername('')
        setPassword('')
    }
    
    return (
        <div>
        <h1>log in to application</h1>
        <form onSubmit = {handleLogin}>
          <div>
        Username
            <input
              type="text"
              value={username}
              name="Username"
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div>
        password
            <input
              type="password"
              value={password}
              name="Password"
              onChange={ ({ target }) => setPassword(target.value)}
            />
          </div>
          <button type="submit">login</button>
        </form>
      </div>
    )
}

export default LoginForm