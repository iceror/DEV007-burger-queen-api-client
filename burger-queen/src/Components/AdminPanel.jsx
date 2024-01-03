// import { useContext } from "react"
// import { UserContext } from "../context/UserContext"
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

const AdminPanel = () => {
  const navigate = useNavigate();
  // const { user } = useContext( UserContext);
  console.log(JSON.parse(sessionStorage.getItem('user')));

  const handleLogOut = () => {
    sessionStorage.clear()
    navigate('/')
  }

  return (
    <div className="background">
      <div className="orders">
        <h2>Burger Queen</h2>
        <button className="log-out" onClick={() => handleLogOut()}>Cerrar sesión</button>
        <button className="button1">Empleados</button>
        <button className="button2">Productos</button>
        <div className="orders" id="orders"></div>
        <AdminSidebar />
      </div>
    </div>
  )
}

export default AdminPanel