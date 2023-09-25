import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import '../css/build.css'
import { getProducts } from "../api-fn/api-utils";
import ProductCard from "./ProductCards";
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
        <main className="orders">
          <h2>Burger Queen</h2>
          <button className="button1" onClick={() => handleMealTimeChange('Desayuno')}>Desayuno</button>
          <button className="button2" onClick={() => handleMealTimeChange('Almuerzo')}>Almuerzo</button>
          {/* TO DO añadir vista para entregar pedidos */}
          <button className="button3">Listas</button>
          <ol className="products">
            {products.length > 0 ?
              <ProductCard products={filteredProducts} /> :
              <p>No hay productos 😔</p>
            }
          </ol>
          <Sidebar />
        </main>
      </div>
    )
  }
}

export default CreateOrders