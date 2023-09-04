import { useContext, useState } from "react"
import '../css/build.css'
import { OrderContext } from "../context/OrderContext"

const QuantityCounter = ({ product }) => {
  const [count, setCount] = useState(0)
  const { addToOrder, deleteFromOrder } = useContext(OrderContext)


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
