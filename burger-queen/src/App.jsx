import './css/build.css'
import Login from './Components/Login'
import CreateOrders from './Components/CreateOrders'
import Orders from './Components/Orders'
import { UserProvider } from './context/UserContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminPanel from './Components/AdminPanel'

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/create-orders' element={<CreateOrders />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/admin-panel' element={<AdminPanel />} />

          </Routes>
        </>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
