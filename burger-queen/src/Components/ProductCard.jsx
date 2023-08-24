import { useContext } from "react";
import { getProducts } from "../api-fn/api-utils";
import { UserContext } from "../context/UserContext";
import '../css/build.css'

const ProductCard = ({ products }) => {
  const { user, sendUserToContext } = useContext(UserContext);
  console.log(user);
  console.log(products);

  return (
    <>
      {products.map(product =>
        <div className="card">
          <img src={product.image} alt="" />
          <div>
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        </div>)
      }
    </>
  )


}

export default ProductCard
