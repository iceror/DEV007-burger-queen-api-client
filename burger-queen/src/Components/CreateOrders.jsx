import { useContext, useEffect, useState } from "react";
// import { UserContext } from "../context/UserContext";
import '../css/build.css'
import { getOrders, getProducts } from "../api-fn/api-utils";
import ProductCard from "./ProductCards";
import WaiterSidebar from "./WaiterSidebar";
import OrderCards from "./OrderCards";

const CreateOrders = () => {
  // const { user, sendUserToContext } = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [mealTime, setMealTime] = useState('Desayuno');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [readyOrders, setReadyOrders] = useState([]);
  const [showReadyOrders, setShowReadyOrders] = useState(false);
  const [orderData, setOrderData] = useState(null);
  const [deliverdOrders, setDeliveredOrders] = useState([]);

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
    fetchDeliveredOrders()
    setShowReadyOrders(true)
  }

  const fetchOrders = async () => {
    let orders = await getOrders(JSON.parse(sessionStorage.getItem('user')).accessToken)
    setReadyOrders(orders.filter((order) => order.status === 'ready'))
  }

  const fetchDeliveredOrders = async () => {
    let orders = await getOrders(JSON.parse(sessionStorage.getItem('user')).accessToken)
    setDeliveredOrders(orders.filter((order) => order.status === 'delivered'))
  }

  console.log('LOGGING READY ORDERS IN CREATE ORDERS COMPONENT.............', readyOrders);
  // readyOrders array is modified after double click(?) why? 

  
  const handleCardClick = (order) => {
    setOrderData(order);
  }
  
  // console.log('orderData',orderData);
  return (
    <div className="background">
      <main className="orders">
        <h2>Burger Queen</h2>
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
        <WaiterSidebar orderData={orderData} readyOrders={readyOrders} onDeliver={fetchOrders}/>
      </main>
    </div>
  )
}

export default CreateOrders