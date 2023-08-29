import { useState } from "react"
import '../css/build.css'

const QuantityCounter = () => {
  const [count, setCount] = useState(1)

  const substract = () => {
    count > 1 ? setCount(count - 1) : count;
  }

  const add = () => {
    setCount(count + 1)
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
