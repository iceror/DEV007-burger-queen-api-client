import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { OrderContext } from "../context/OrderContext";
import bin from '../assets/trash-bin.png'


const Sidebar = ({ selectedCard }) => {
  const { user } = useContext(UserContext);
  const { products, deleteFromOrder } = useContext(OrderContext);
  const { sendClientToContext } = useContext(OrderContext);

  const handleClient = (event) => {
    sendClientToContext(event.target.value)
  }

  const handleDeleteFromOrder = (id) => {
    deleteFromOrder(id)
  }

  if (user.user.role === 'waiter') {
    return (
      <div className="order-container">
        <div className="client">
          <h3>Cliente</h3>
          <div className="name-input">
            <input type="text" className="client-name" onChange={(event) => handleClient(event)} />
            <p className="order-num">#</p>
          </div>
        </div>
        <div className="order">
          <h3>Tu orden:</h3>
          <hr />
          <div className="order-products">
            {products.map((productInOrder) => {
              if(productInOrder.count > 0){
                return (
                  <div className="product-in-order" key={productInOrder.id}>
                    <p>{productInOrder.productName}</p>
                    <p>{productInOrder.count} </p>
                    <p>{productInOrder.productPrice} </p>
                    <button className="bin" onClick={() => handleDeleteFromOrder(productInOrder.id)}><img src={bin} alt="" /></button>
                  </div>
                )
              }
            })}
          </div>
          <h3>Total:</h3>
          <button className="send-to-kitchen">Enviar a cocina</button>
        </div>
      </div>
    )
  } else if (user.user.role === 'admin') {
    return (
      <div className="order-container">
        <div className="client">
          <h3>Empleado</h3>
          <div className="name-input">
            <input type="text" className="client-name" />
            <p className="order-num">#</p>
          </div>
        </div>
        <div className="order">
          <h3>Rol empleado</h3>
          <hr />
          <div className="order-products"></div>
          <button className="delete-employee">Eliminar</button>
          <button className="update-data">Actualizar datos</button>
        </div>
      </div>
    )
  } else if (user.user.role === 'cook') {
    return (
      <div className="order-container">
        <div className="client">
          <h3>Cliente</h3>
          <div className="name-input">
            <input type="text" className="client-name" />
            <p className="order-num">#</p>
          </div>
        </div>
        <div className="order">
          <h3>Tu orden:</h3>
          <hr />
          <div className="order-products"></div>
          <h3>Total:</h3>
          <button className="send-to-kitchen">Orden lista</button>
        </div>
      </div>
    )
  }
}

export default Sidebar
