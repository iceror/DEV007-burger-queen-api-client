import { createContext, useContext, useState } from "react";

export const OrderContext = createContext()

export const useOrderContext = () => useContext(OrderContext)

export const OrderContextProvider = ({children}) => {
  const [ order, setOrder ] = useState([])
  console.log(order);
  const addToOrder = (addedProduct) => {
    productIsInOrder(addedProduct)
  }

  const deleteFromOrder = () => {
    
  }

  const deleteOrder = () => {
    
  }

  const productIsInOrder = (addedProduct) => {
    const isInCart = order.some((product) => addedProduct.id === product.id)

    if (isInCart) {
      updateCount(addedProduct)
    } else {
      setOrder([...order, addedProduct])
    }
  }

  const updateCount = (addedProduct) => {
    const foundProduct = order.find((product) => product.id === addedProduct.id)
    foundProduct.count = addedProduct.count
  }

  return (
    <OrderContext.Provider value={{order, addToOrder, deleteFromOrder, deleteOrder}}>{children}</OrderContext.Provider>
  )
}
