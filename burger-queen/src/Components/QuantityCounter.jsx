import { useContext, useEffect, useState } from "react"
import '../css/build.css'
import { OrderContext } from "../context/OrderContext"

const QuantityCounter = ({ product }) => {
  const [count, setCount] = useState(0)
  const { addToOrder, deleteFromOrder, order } = useContext(OrderContext)

  useEffect(() => {
    if (order.products && count > 0) {
      let foundMatch = false; // Initialize a flag to false
  
      order.products.forEach((productInOrder) => {
        if (productInOrder.id === product.id) {
          foundMatch = true; // Set the flag to true if a match is found
        } 
      });
  
      if (!foundMatch) {
        setCount(0);
      }
    }

  }, [order])

  const substract = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      update(newCount)
    }
  }

  const add = () => {
    const newCount = count + 1;
    setCount(newCount);
    update(newCount)
  }

  const update = (newCount) => {
    if (newCount === 0) {
      deleteFromOrder(product.id);
    } else {
      const addedProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        count: newCount,
      };
      addToOrder(addedProduct);
    }
  };

  return (
    <div className="counter" >
      <button onClick={substract} className="counter-button">-</button>
      <p>{count}</p>
      <button onClick={add} className="counter-button">+</button>
    </div>
  )
}

export default QuantityCounter
