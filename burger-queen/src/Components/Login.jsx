import { useContext, useState } from 'react'
import { getAuth } from '../api-fn/api-utils'
import '../css/build.css'
import { UserContext } from '../context/UserContext'
import Modal from './Modal'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  //use useState or useRef to get data from inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // si quiero usar el user en otro componente:
  const { user, sendUserToContext } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleUser = (event) => {
    setUsername(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleClick = async (event) => {
    event.preventDefault();
    const response = await getAuth(username, password);
    if (response.accessToken) {
      sendUserToContext(response);
      console.log(response);
      let storedUser = sessionStorage.setItem('user', JSON.stringify(response));
      if(response.user.role === 'waiter'){
        navigate('create-orders')
      } else if(response.user.role === 'cook') {
        navigate('orders')
      } else if(response.user.role === 'admin'){
        navigate('admin-panel')
      }
    } else {
      setShow(true)
      setErrorMessage(response.response.data)
    }
  }

  return (
    <>
      <h1>Burger Queen</h1>
      <form className='login-form'>
        <div>
          <label htmlFor="username">usuario</label>
          <input type="text" name="username" value={username} onChange={handleUser} />
        </div>
        <div>
          <label htmlFor="password">contraseña</label>
          <input type="password" name="password" value={password} onChange={handlePassword} />
        </div>
        <button type='button' onClick={handleClick}>iniciar</button>
      </form>
      <Modal  show={show} onHide={() => setShow(false) }>
        { errorMessage }
      </Modal>
    </>
  )
}

export default Login
