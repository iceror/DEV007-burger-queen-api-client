import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import Sidebar from "./Sidebar";

const Orders = () => {
  const { user } = useContext( UserContext);
  console.log(user);

  if(user.user.role === 'cook'){
    return (
      <div className="background">
        <div className="orders">
          <h2>Burger Queen</h2>
          <div className="orders" id="orders"></div>
          <Sidebar></Sidebar>
        </div>
      </div>
    )
  }
}

export default Orders