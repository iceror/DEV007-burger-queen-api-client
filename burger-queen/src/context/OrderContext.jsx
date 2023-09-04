import { createContext, useContext, useEffect, useState } from "react";

export const OrderContext = createContext()

export const useOrderContext = () => useContext(OrderContext)

export const OrderContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [client, setClient] = useState('');
  const [order, setOrder] = useState({})
  // console.log('ORDER', client , products);

  const sendClientToContext = (client) => {
    setClient(client)
  }

  useEffect(() => {
    if (client && products.length > 0) {
      const newOrder = {
        client: client,
        products: products,
      };
      setOrder(newOrder);
      console.log(newOrder);
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



  return (
    <OrderContext.Provider value={{ products, sendClientToContext, addToOrder, deleteFromOrder, deleteOrder }}>{children}</OrderContext.Provider>
  )
}
