import { useContext, useEffect, useState } from "react";
// import { UserContext } from "../context/UserContext";
import '../css/build.css'
import { getOrders, getProducts } from "../api-fn/api-utils";
import ProductCard from "./ProductCards";
import WaiterSidebar from "./WaiterSidebar";
import OrderCards from "./OrderCards";
import { useNavigate } from "react-router-dom";

const CreateOrders = () => {
  const navigate = useNavigate();
  // const { user, sendUserToContext } = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [mealTime, setMealTime] = useState('Desayuno');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [readyOrders, setReadyOrders] = useState([]);
  const [showReadyOrders, setShowReadyOrders] = useState(false);
  const [orderData, setOrderData] = useState(null);
  const [deliverdOrders, setDeliveredOrders] = useState([]);
  const [total, setTotal] = useState(null);

  // let storedUser = sessionStorage.getItem('user');
  // useEffect(() => {
  //   sendUserToContext(JSON.parse(storedUser))
  // }, [])

  // useEffect(() => {
  //   sendUserToContext(JSON.parse(sessionStorage.getItem('user')))
  // },[])

  const fetchProducts = async () => {
    let products = await getProducts(JSON.parse(sessionStorage.getItem('user')).accessToken);
    setProducts(products);
    setFilteredProducts(products.filter((product) => product.type === mealTime));
  }

  useEffect(() => {
    fetchProducts()
  }, []);

  const handleMealTimeChange = (newMealTime) => {
    setMealTime(newMealTime);
    setShowReadyOrders(false);
    setOrderData(null)
  };

  useEffect(() => {
    setFilteredProducts(products.filter((product) => product.type === mealTime))
  }, [mealTime])

  const handleClick = () => {
    fetchOrders()
    setShowReadyOrders(true)
  }

  const fetchOrders = async () => {
    let orders = await getOrders(JSON.parse(sessionStorage.getItem('user')).accessToken);
    setReadyOrders(orders.filter((order) => order.status === 'ready'));
    setDeliveredOrders(orders.filter((order) => order.status === 'delivered'));
  }

  const handleCardClick = (order) => {
    setOrderData(order);
    setTotal(order.total);
  }

  const cleanTotal = () => {
    setTotal(0)
  }

  const handleLogOut = () => {
    sessionStorage.clear();
    navigate('/');
  }

  return (
    <div className="background">
      <main className="orders">
        <h2>Burger Queen</h2>
        <button className="log-out" onClick={() => handleLogOut()}>Cerrar sesión</button>
        <button className="button1" onClick={() => handleMealTimeChange('Desayuno')}>Desayuno</button>
        <button className="button2" onClick={() => handleMealTimeChange('Almuerzo')}>Almuerzo</button>
        <button className="button3" onClick={() => handleClick()}>Listas</button>
        <ol className="products">
          {showReadyOrders === true ? (
            <OrderCards orders={readyOrders} handleCardClick={handleCardClick} />
          ) :
            products.length > 0 ? (
              <ProductCard products={filteredProducts} />
            ) : <h3>Cargando productos...</h3>
          }
        </ol>
        <WaiterSidebar orderData={orderData} total={total} cleanTotal={cleanTotal} onDeliver={fetchOrders}/>
      </main>
    </div>
  )
}

export default CreateOrders