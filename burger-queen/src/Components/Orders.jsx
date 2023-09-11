import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import Sidebar from "./Sidebar";
import { getOrders } from "../api-fn/api-utils";
import OrderCards from "./OrderCards"

const Orders = () => {
  const { user } = useContext(UserContext);
  const [orders, setOrders] = useState([])
  const [orderData, setOrderData] = useState()
  const [filteredOrders, setFilteredOrders] = useState([])
  const [orderStatus, setOrderStatus ] = useState('pending')

  const fetchOrders = async () => {
    const fetchedOrders = await getOrders(user.accessToken)
    setOrders(fetchedOrders)
    setFilteredOrders(fetchedOrders.filter((order) => order.status === orderStatus))
  }

  useEffect(() => {
    fetchOrders()
  }, [filteredOrders]);

  const handleStatusButtonClick = (orderStatus) => {
    setOrderStatus(orderStatus)
  }

  useEffect(() => {
    setFilteredOrders(orders.filter((order) => order.status === orderStatus))
  }, [orderStatus])

  const handleCardClick = (order) => {
    setOrderData(order)
  }

  if (user.user.role === 'cook') {
    return (
      <div className="background">
        <main className="orders">
          <h2>Burger Queen</h2>
          <button className="button1" onClick={() => handleStatusButtonClick('pending')}>Pendientes</button>
          <button className="button2" onClick={() => handleStatusButtonClick('ready')}>Listas</button>
          <ol className="products" >
            {orders.length > 0 ?
              <OrderCards orders={filteredOrders} handleCardClick={handleCardClick} /> :
              <h3>No hay órdenes pendientes 😄</h3>
            }
          </ol>
          <Sidebar orderData={orderData} />
        </main>
      </div>
    )
  }
}

export default Orders