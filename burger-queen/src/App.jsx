import './css/build.css'
import Login from './Components/Login'
import Orders from './Components/Orders'
import { UserProvider } from './context/UserContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
Route

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/orders' element={<Orders />} />
          </Routes>
          {/* otros componentes */}
        </>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
