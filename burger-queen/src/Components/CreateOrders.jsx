import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import '../css/build.css'
import { getProducts } from "../api-fn/api-utils";
import ProductCard from "./ProductCard";
import Sidebar from "./Sidebar";

const CreateOrders = () => {
  const { user, sendUserToContext } = useContext(UserContext);
  const [products, setProducts] = useState([])
  console.log(user);

  // TODO por si recarga el usuario
  let storedUser = sessionStorage.getItem('user');
  console.log(storedUser.accessToken);

  const fetchProducts = async () => {
    let products = await getProducts(user.accessToken);
    setProducts(products);
  }

  useEffect(() => {
    console.log('inside in create orders useeffect');
    fetchProducts()
  }, []);

  if (user) {

    return (
      <div className="background">
        <div className="orders">
          <h2>Burger Queen</h2>
          <button className="breakfast">Desayuno</button>
          <button className="lunch">Almuerzo</button>
          <div className="products">
            <ProductCard products={products} />
          </div>
          <Sidebar />
        </div>
      </div>
    )
  }

}

export default CreateOrders