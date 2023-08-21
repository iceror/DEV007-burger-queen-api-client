import './css/build.css'
import Login from './Components/Login'
import { UserProvider } from './context/UserContext'

function App() {
  return (
    <UserProvider>
      <>
        <Login />
        {/* otros componentes */}
      </>
    </UserProvider>
  )
}

export default App
