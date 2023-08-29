import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import '../css/build.css'
import { getProducts } from "../api-fn/api-utils";
import ProductCard from "./ProductCard";
import Sidebar from "./Sidebar";

const CreateOrders = () => {
  const { user, sendUserToContext }  = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [mealTime, setMealTime] = useState('Desayuno');
  const [filteredProducts, setFilteredProducts] = useState(mealTime);

  // TODO por si recarga el usuario
  // let storedUser = sessionStorage.getItem('user');
  // console.log(storedUser.accessToken);

  const fetchProducts = async () => {
    let products = await getProducts(user.accessToken);
    setProducts(products);
  }

  useEffect(() => {
    fetchProducts()
  }, []);

  const handleMealTimeChange = (newMealTime) => {
    setMealTime(newMealTime);
  };

  useEffect(() => {
    console.log(mealTime);
    setFilteredProducts(products.filter((product) => product.type === mealTime))
    console.log(filteredProducts);
  }, [mealTime])

  if (user) {
    return (
      <div className="background">
        <div className="orders">
          <h2>Burger Queen</h2>
          <button className="breakfast" onClick={() => handleMealTimeChange('Desayuno')}>Desayuno</button>
          <button className="lunch" onClick={() => handleMealTimeChange('Almuerzo')}>Almuerzo</button>
          <div className="products">
            <ProductCard products={ filteredProducts } mealTime= { mealTime } />
          </div>
          <Sidebar />
        </div>
      </div>
    )
  }

}

export default CreateOrders