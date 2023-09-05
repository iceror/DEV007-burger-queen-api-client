import { createContext, useContext, useEffect, useState } from "react";
import { postOrder } from "../api-fn/api-utils";
import { UserContext } from "./UserContext";

export const OrderContext = createContext()

export const useOrderContext = () => useContext(OrderContext)

export const OrderContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [client, setClient] = useState('');
  const [order, setOrder] = useState({})
  const {user} = useContext(UserContext)
  // console.log('ORDER', client , products);

  const sendClientToContext = (client) => {
    setClient(client)
  }

  useEffect(() => {
    if (client || products.length > 0) {
      const newOrder = {
        client: client,
        products: products,
      };
      setOrder(newOrder);
      // console.log(newOrder);
    }
  }, [client, products]);

  const addToOrder = (addedProduct) => {
    productIsInOrder(addedProduct)
  }

  const deleteFromOrder = (id) => {
    setProducts(products.filter(product => product.id !== id));
  }

  const deleteOrder = () => {

  }

  const productIsInOrder = (addedProduct) => {
    const isInOrder = products.some((product) => addedProduct.id === product.id)

    if (isInOrder) {
      updateCount(addedProduct)
    } else {
      setProducts([...products, addedProduct])
    }
  }

  const updateCount = (addedProduct) => {
    const updatedOrder = products.map((product) =>
      product.id === addedProduct.id ? { ...product, count: addedProduct.count } : product
    );
    setProducts(updatedOrder);
  }

  const orderTotal = () => {
    const total = products.reduce((acc, product) => acc + Number(product.price.slice(1)) * product.count, 0)
    return total
  }

  const sendOrderToApi = () => {
    postOrder(order, user.accessToken)
    setClient('')
    setProducts([])
  }

  return (
    <OrderContext.Provider value={{ order, products, sendClientToContext, addToOrder, deleteFromOrder, deleteOrder, orderTotal, sendOrderToApi }}>{children}</OrderContext.Provider>
  )
}
