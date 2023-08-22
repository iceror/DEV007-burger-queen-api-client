import './css/build.css'
import Login from './Components/Login'
import Orders from './Components/Orders'
import { UserProvider } from './context/UserContext'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <>
          <Login />
          <Orders />
          {/* otros componentes */}
        </>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
