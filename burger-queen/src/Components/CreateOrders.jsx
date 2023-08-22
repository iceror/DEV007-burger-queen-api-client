import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import '../css/build.css'
import { getProducts } from "../api-fn/api-utils";


const CreateOrders = () => {
  const { user, sendUserToContext } = useContext(UserContext);
  getProducts()

  return (
    <div className="background">
      <div className="orders">
        <h2>Burger Queen</h2>
        <button className="breakfast">Desayuno</button>
        <button className="lunch">Almuerzo</button>
        <div className="products" id="products"></div>
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
            <button className="send-to-kitchen">Enviar a cocina</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateOrders