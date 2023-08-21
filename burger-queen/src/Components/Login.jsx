import { useContext, useState } from 'react'
import { getAuth } from '../api-fn/api-utils'
import '../css/build.css'
import { UserContext } from '../context/UserContext'

const Login = () => {
  //use useState or useRef to get data from inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // si quiero usar el user en otro componente:
  const { user, sendUserToContext } = useContext(UserContext);

  const handleUser = (event) => {
    setUsername(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleClick = async (event) => {
    event.preventDefault();
    const response = await getAuth(username, password);
    // console.log(response.user);
    sendUserToContext(response)
  }

  return (
    <>
      <h1>Burger Queen</h1>
      <form className='login-form'>
        <div>
          <label htmlFor="user">usuario</label>
          <input type="text" name="username" value={username} onChange={handleUser} />
        </div>
        <div>
          <label htmlFor="password">contraseña</label>
          <input type="password" name="password" value={password} onChange={handlePassword} />
        </div>
        <button type='button' onClick={handleClick}>iniciar</button>
      </form>
    </>
  )
}

export default Login
