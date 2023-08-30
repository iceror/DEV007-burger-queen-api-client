import { useContext, useEffect, useState } from "react";
import { getProducts } from "../api-fn/api-utils";
import { UserContext } from "../context/UserContext";
import '../css/build.css'
import QuantityCounter from "./QuantityCounter";
import { OrderContext } from "../context/OrderContext";

const ProductCard = ({ products }) => {
  // const { user, sendUserToContext } = useContext(UserContext);
  // console.log(user);
  // console.log(products);
  const [quantity, setQuantity] = useState(1);
  const { addToOrder } = useContext(OrderContext)

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity)
  }

  const handleAdd = (product) => {
    let id = product.id;
    let productName = product.name;
    let productPrice = product.price;
    const addedProduct = {
      id,
      productName,
      productPrice,
      quantity: quantity
    }
    // console.log(addedProduct);
    addToOrder(addedProduct)
  }

  return (
    <>
      {products.map(product =>
        <div className="card" key={product.id} onClick={() => handleAdd(product)}>
          <img src={product.image} alt="" />
          <div className="text">
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
          <QuantityCounter onQuantityChange={handleQuantityChange} />
        </div>)
      }
    </>
  )
}

export default ProductCard
