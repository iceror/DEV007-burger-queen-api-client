import './css/build.css'
import Login from './Components/Login'
import CreateOrders from './Components/CreateOrders'
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
            <Route path='/create-orders' element={<CreateOrders />} />
          </Routes>
          {/* otros componentes */}
        </>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
