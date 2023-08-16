import '../css/build.css'

const Login = () => {
  return (
    <>
      <h1>Burger Queen</h1>
      <form className='login-form'>
        <div>
          <label htmlFor="user">usuario</label>
          <input type="text" name="user" />
        </div>
        <div>
          <label htmlFor="password">contraseña</label>
          <input type="text" name="password" />
        </div>
        <button type="submit">iniciar</button>
      </form>
    </>
  )
}

export default Login
