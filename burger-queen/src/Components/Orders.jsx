import { useContext } from "react"
import { UserContext } from "../context/UserContext"

const Orders = () => {
  const { user } = useContext( UserContext);
  console.log(user);

  if(user.user.role === 'cook'){
    return (
      <div className="background">
        <div className="orders">
          <h2>Burger Queen</h2>
          <div className="orders" id="orders"></div>
          <div className="order-container" id="order-container">
            <div className="client">
              <h3>Cliente</h3>
              <div className="name-input">
                <input type="text" className="client-name" />
                <p className="order-num" id="order-num">#</p>
              </div>
            </div>
            <div className="order">
              <h3>Tu orden:</h3>
              <hr />
              <div className="order-products" id="order-products"></div>
              <h3>Total:</h3>
              <button className="order-ready">Listo</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Orders