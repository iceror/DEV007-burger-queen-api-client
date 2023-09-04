import { useContext, useEffect, useState } from "react";
import { getProducts } from "../api-fn/api-utils";
import { UserContext } from "../context/UserContext";
import '../css/build.css'
import QuantityCounter from "./QuantityCounter";
import { OrderContext } from "../context/OrderContext";

const ProductCard = ({ products, onCardClick }) => {
  // console.log(products);

  

  return (
    <>
      {products.map(product =>
        <div className="card" key={product.id} >
          <img src={product.image} alt="" />
          <div className="text">
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
          <QuantityCounter product={product} />
        </div>)
      }
    </>
  )
}

export default ProductCard
