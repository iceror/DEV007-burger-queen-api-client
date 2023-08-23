import { useContext, useEffect, useState } from 'react'
import { UserContext, UserProvider } from './context/UserContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import CreateOrders from './Components/CreateOrders'
import Orders from './Components/Orders'
import AdminPanel from './Components/AdminPanel'
import './css/build.css'

function App() {
  // const { user, sendUserToContext } = useContext(UserContext);

  console.log("App Load")
  const [userData, setUserData] = useState(() => {
    const user = sessionStorage.getItem("user");
    return JSON.parse(user) || null;
  });

  useEffect(() => {
    console.log("userData updated, persist state");
    sessionStorage.getItem("user", JSON.stringify(userData));
  }, [userData]);

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
