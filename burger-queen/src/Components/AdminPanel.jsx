import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import Sidebar from "./Sidebar";

const AdminPanel = () => {
  const { user } = useContext( UserContext);
  console.log(user);

  if(user.user.role === 'admin'){
    return (
      <div className="background">
        <div className="orders">
          <h2>Burger Queen</h2>
          <button className="button1">Empleados</button>
          <button className="button2">Productos</button>
          <div className="orders" id="orders"></div>
          <Sidebar/>
        </div>
      </div>
    )
  }
}

export default AdminPanel