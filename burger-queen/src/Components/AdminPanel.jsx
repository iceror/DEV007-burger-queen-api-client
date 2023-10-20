// import { useContext } from "react"
// import { UserContext } from "../context/UserContext"
import AdminSidebar from "./AdminSidebar";

const AdminPanel = () => {
  // const { user } = useContext( UserContext);
  console.log(JSON.parse(sessionStorage.getItem('user')));

    return (
      <div className="background">
        <div className="orders">
          <h2>Burger Queen</h2>
          <button className="button1">Empleados</button>
          <button className="button2">Productos</button>
          <div className="orders" id="orders"></div>
          <AdminSidebar/> 
        </div>
      </div>
    )
}

export default AdminPanel