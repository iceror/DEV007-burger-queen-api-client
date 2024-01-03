import { useContext, useEffect, useState } from "react"
// import { UserContext } from "../context/UserContext"
import { getOrders } from "../api-fn/api-utils";
import OrderCards from "./OrderCards"
import CookSidebar from "./CookSidebar";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const navigate = useNavigate();
  // const { user } = useContext(UserContext);
  const [orders, setOrders] = useState([])
  const [orderData, setOrderData] = useState()
  const [filteredOrders, setFilteredOrders] = useState([])
  const [orderStatus, setOrderStatus] = useState('pending')

  const fetchOrders = async () => {
    const fetchedOrders = await getOrders(JSON.parse(sessionStorage.getItem('user')).accessToken)
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

  const handleLogOut = () => {
    sessionStorage.clear()
    navigate('/')
  }

  return (
    <div className="background">
      <main className="orders">
        <h2>Burger Queen</h2>
        <button className="log-out" onClick={() => handleLogOut()}>Cerrar sesión</button>
        <button className="button1" onClick={() => handleStatusButtonClick('pending')}>Pendientes</button>
        <button className="button2" onClick={() => handleStatusButtonClick('ready')}>Listas</button>
        <ol className="products" >
          {orders.length > 0 ?
            <OrderCards orders={filteredOrders} handleCardClick={handleCardClick} /> :
            <h3>No hay órdenes pendientes</h3>
          }
        </ol>
        <CookSidebar orderData={orderData} />
      </main>
    </div>
  )
}

export default Orders