import { useContext, useEffect } from "react";
import { getProducts } from "../api-fn/api-utils";
import { UserContext } from "../context/UserContext";
import '../css/build.css'
import QuantityCounter from "./QuantityCounter";

const ProductCard = ({ products }) => {
  // const { user, sendUserToContext } = useContext(UserContext);
  // console.log(user);
  // console.log(products);

  return (
    <>
      {products.map(product =>
        <div className="card" key={product.id}> 
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
