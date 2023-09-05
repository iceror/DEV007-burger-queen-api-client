import { useContext, useRef, useState } from "react";
import { UserContext } from "../context/UserContext";
import { OrderContext } from "../context/OrderContext";
import bin from '../assets/trash-bin.png'
import Modal from './Modal'

const Sidebar = () => {
  const { user } = useContext(UserContext);
  const { products, deleteFromOrder, order, sendClientToContext, orderTotal, sendOrderToApi } = useContext(OrderContext);
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  let clientRef = useRef('');

  const handleClient = (event) => {
    sendClientToContext(event.target.value)
    clientRef.current.value = event.target.value
  }

  const handleDeleteFromOrder = (id) => {
    deleteFromOrder(id)
  }

  const handlePostOrder = () => {
    if (order.client && order.products.length > 0) {
      sendOrderToApi()
      clientRef.current.value = ''
    } else if (!order.client) {
      setShow(true)
      setErrorMessage('Por favor ingrese nombre de cliente')
    } else if (order.products.length === 0) {
      setShow(true)
      setErrorMessage('Por favor ingrese productos')
    }
  }

  if (user.user.role === 'waiter') {
    return (
      <>
        <div className="order-container">
          <div className="client">
            <h3>Cliente</h3>
            <div className="name-input">
              <input type="text" className="client-name" onChange={(event) => handleClient(event)} ref={clientRef} />
              {/* <p className="order-num">#</p> */}
            </div>
          </div>
          <div className="order">
            <h3>Tu orden:</h3>
            <hr />
            <div className="order-products">
              {products.map((productInOrder) => {
                if (productInOrder.count > 0) {
                  return (
                    <div className="product-in-order" key={productInOrder.id}>
                      <p>{productInOrder.name}</p>
                      <p>{productInOrder.count} </p>
                      <p>{productInOrder.price} </p>
                      <button className="bin" onClick={() => handleDeleteFromOrder(productInOrder.id)} ><img src={bin} alt="" /></button>
                    </div>
                  )
                }
              })}
            </div>
            <div className="total">
              <h3 >Total: </h3>
              <h3>${orderTotal()}.00</h3>
            </div>
            <button className="send-to-kitchen" onClick={handlePostOrder}>Enviar a cocina</button>
          </div>
        </div>
        <Modal show={show} onHide={() => setShow(false)}>
          {errorMessage}
        </Modal>
      </>
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
            {/* <input type="text" className="client-name" /> */}
            {/* TODO show client name && order id */}
            <h3 className="client-name"></h3>
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
