import { useState } from 'react'
import { getAuth } from '../api-fn/api-utils'
import '../css/build.css'

const Login = () => {
  //use useState or useRef to get data from inputs
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const handleUser = (event) => {
    setUser(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Here, you can perform actions like sending the data to a server for authentication
    console.log('Username:', user);
    console.log('Password:', password);
    getAuth(user, password)
  }

  return (
    <>
      <h1>Burger Queen</h1>
      <form className='login-form'>
        <div>
          <label htmlFor="user">usuario</label>
          <input type="text" name="user" value={user} onChange={handleUser}/>
        </div>
        <div>
          <label htmlFor="password">contraseña</label>
          <input type="password" name="password" value={password} onChange={handlePassword}/>
        </div>
        <button type='button' onClick={handleClick}>iniciar</button>
      </form>
    </>
  )
}

export default Login
