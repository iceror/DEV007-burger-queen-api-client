import { useContext, useEffect, useState } from "react";
// import { UserContext } from "../context/UserContext";
import '../css/build.css'
import { getOrders, getProducts } from "../api-fn/api-utils";
import ProductCard from "./ProductCards";
import Sidebar from "./Sidebar";
import OrderCards from "./OrderCards";

const CreateOrders = () => {
  // const { user, sendUserToContext } = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [mealTime, setMealTime] = useState('Desayuno');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [readyOrders, setReadyOrders] = useState([])
  const [showReadyOrders, setShowReadyOrders] = useState(false)
  const [orderData, setOrderData] = useState(null)

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
    fecthOrders()
    setShowReadyOrders(true)
  }

  const fecthOrders = async () => {
    let orders = await getOrders(user.accessToken)
    setReadyOrders(orders.filter((order) => order.status === 'ready'))
  }

  const handleCardClick = (order) => {
    setOrderData(order);
  }

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
        {/* <Sidebar orderData={orderData} /> */}
      </main>
    </div>
  )
}

export default CreateOrders