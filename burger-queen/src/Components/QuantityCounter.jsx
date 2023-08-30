import { useState } from "react"
import '../css/build.css'

const QuantityCounter = ({onQuantityChange}) => {
  const [count, setCount] = useState(1)

  const substract = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      onQuantityChange(newCount); // Pass the updated count
    }
  }

  const add = () => {
    const newCount = count + 1;
    console.log(newCount);
    setCount(newCount);
    onQuantityChange(newCount); 
  }

  return (
    <div className="counter">
      <button onClick={substract} className="counter-button">-</button>
      <p>{count}</p>
      <button onClick={add} className="counter-button">+</button>
    </div>
  )
}

export default QuantityCounter
