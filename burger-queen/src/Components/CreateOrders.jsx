import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import '../css/build.css'
import { getProducts } from "../api-fn/api-utils";
import ProductCard from "./ProductCard";
import Sidebar from "./Sidebar";

const CreateOrders = () => {
  const { user } = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [mealTime, setMealTime] = useState('Desayuno');
  const [filteredProducts, setFilteredProducts] = useState([]);

  // TODO por si recarga el usuario
  // let storedUser = sessionStorage.getItem('user');
  // console.log(storedUser.accessToken);

  const fetchProducts = async () => {
    let products = await getProducts(user.accessToken);
    setProducts(products);
    setFilteredProducts(products.filter((product) => product.type === mealTime));
  }

  useEffect(() => {
    fetchProducts()
  }, []);

  const handleMealTimeChange = (newMealTime) => {
    setMealTime(newMealTime);
  };

  useEffect(() => {
    setFilteredProducts(products.filter((product) => product.type === mealTime))
  }, [mealTime])

  if (user) {
    return (
      <div className="background">
        <div className="orders">
          <h2>Burger Queen</h2>
          <button className="breakfast" onClick={() => handleMealTimeChange('Desayuno')}>Desayuno</button>
          <button className="lunch" onClick={() => handleMealTimeChange('Almuerzo')}>Almuerzo</button>
          <div className="products">
            {products.length > 0 ?
              <ProductCard products={filteredProducts} /> :
              <p>No hay productos 😔</p>
            }
          </div>
          <Sidebar />
        </div>
      </div>
    )
  }
}

export default CreateOrders