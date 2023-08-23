import { useContext } from "react";
import { getProducts } from "../api-fn/api-utils";
import { UserContext } from "../context/UserContext";

const ProductCard = () => {
  const { user, sendUserToContext } = useContext(UserContext);
  console.log(user);

  const renderProducts = async () => {
    let products = await getProducts(user.accessToken);
    console.log(products);
    products.forEach(product => {
      
      console.log(product);
    })
  }

  renderProducts()

  return (
      <>
      Product cards 
      </>
    )
}

export default ProductCard
