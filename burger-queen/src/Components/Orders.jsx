import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import Sidebar from "./Sidebar";
import { getOrders } from "../api-fn/api-utils";
import OrderCards from "./OrderCards"

const Orders = () => {
  const { user } = useContext(UserContext);
  const [orders, setOrders] = useState([])
  // console.log(user);

  const fetchOrders = async () => {
    const fetchedOrders = await getOrders(user.accessToken)
    setOrders(fetchedOrders)
    // console.log(fetchedOrders);
  }

  useEffect(() => {
    fetchOrders()
  }, []);

  // TO DO create timer from order entry to when it is done 

  if (user.user.role === 'cook') {
    return (
      <div className="background">
        <div className="orders">
          <h2>Burger Queen</h2>
          <button className="button1">Pendientes</button>
          <button className="button2">Listas</button>
          <div className="products" >
            { orders.length > 0 ?
              <OrderCards orders={orders} /> :
              <p>No hay órdenes pendientes 😄</p>
            }
          </div>
          <Sidebar />
        </div>
      </div>
    )
  }
}

export default Orders