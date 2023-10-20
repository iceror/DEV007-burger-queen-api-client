import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserProvider, useUserContext } from './context/UserContext'
import Login from './Components/Login'
import CreateOrders from './Components/CreateOrders'
import Orders from './Components/Orders'
import AdminPanel from './Components/AdminPanel'
import { OrderContextProvider } from './context/OrderContext'
import './css/build.css'

function App() {
  // checar si el usuario existe en el context o jalarlo de session storage 
  // const {sendUserToContext} = useUserContext()

  // console.log("App Load")
  // useEffect(() => {
  //   let storedUser = sessionStorage.getItem("user")
  //   console.log(storedUser);
  // }, []);

  return (
    <UserProvider>
      <BrowserRouter>
        <OrderContextProvider>
          <>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/create-orders' element={<CreateOrders />} />
              <Route path='/orders' element={<Orders />} />
              <Route path='/admin-panel' element={<AdminPanel />} />
            </Routes>
          </>
        </OrderContextProvider>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
