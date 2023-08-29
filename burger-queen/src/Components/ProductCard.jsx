import { useContext, useEffect } from "react";
import { getProducts } from "../api-fn/api-utils";
import { UserContext } from "../context/UserContext";
import '../css/build.css'
import QuantityCounter from "./QuantityCounter";

const ProductCard = ({ products, mealTime }) => {
  // const { user, sendUserToContext } = useContext(UserContext);
  // console.log(user);

  return (
    <>
      {products.map(product =>
        <div className="card">
          <img src={product.image} alt="" />
          <div className="text">
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
          <QuantityCounter/>
        </div>)
      }
    </>
  )


}

export default ProductCard
