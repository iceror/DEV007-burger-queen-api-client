import './css/build.css'
import Login from './Components/Login'
import { UserProvider } from './context/UserContext'

function App() {
  return (
    <UserProvider>
      <>
        <Login />
      </>
    </UserProvider>
  )
}

export default App
