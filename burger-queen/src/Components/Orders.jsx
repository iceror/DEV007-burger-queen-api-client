import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import Sidebar from "./Sidebar";
import { getOrders } from "../api-fn/api-utils";

const Orders = () => {
  const { user } = useContext( UserContext);
  const [ orders, setOrders] = useState([])
  // console.log(user);

  const fetchOrders = async () => {
    const fetchedOrders = await getOrders(user.accessToken)
    console.log(fetchedOrders);
    setOrders(fetchedOrders)
  }
  
  useEffect(() => {
    fetchOrders()
  }, []);


  // TO DO create timer from order entry to when it is done 


  if(user.user.role === 'cook'){
    return (
      <div className="background">
        <div className="orders">
          <h2>Burger Queen</h2>
          <div className="orders" id="orders">
            <OrderCards orders={orders}/>
          </div>
          <Sidebar></Sidebar>
        </div>
      </div>
    )
  }
}

export default Orders