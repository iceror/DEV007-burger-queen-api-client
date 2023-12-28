import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../context/UserContext";
import { OrderContext } from "../context/OrderContext";
import bin from '../assets/trash-bin.png'
import Modal from './Modal'
import Timer from "./OrderTimer";

const Sidebar = ({ orderData }) => {
  const { user } = useContext(UserContext);
  const { products, deleteFromOrder, order, sendClientToContext, orderTotal, sendOrderToApi, updateOrderInApi } = useContext(OrderContext);
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [timerVisible, setTimerVisible] = useState(true);
  let clientRef = useRef('');
  let clientNameRef = useRef(null);
  let orderIdRef = useRef(null)
  let orderRef = useRef(null)
  let timerRef = useRef(null)

  useEffect(() => {
    
  }, [orderData])

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

  const handleUpdateOrder = (orderData) => {
    updateOrderInApi(orderData);
    clientNameRef.current.textContent = '';
    orderIdRef.current.textContent = '';
    orderRef.current.innerHTML = '';
    setTimerVisible(false)
  }

  if (user.user.role === ('cook') && orderData) {
    return (
      <div className="order-container">
        <div className="client">
          <h3>Cliente</h3>
          <div className="name-input" >
            {/* <input type="text" className="client-name" /> */}
            <h3 className="client-name" ref={clientNameRef}>{orderData ? orderData.client : ''}</h3>
            <p className="order-num" ref={orderIdRef}>{orderData ? '#' + orderData.id : ''}</p>
          </div>
        </div>
        <div className="order">
          <h3>Tu orden:</h3>
          <hr />
          <ol className="order-products" key={orderData ? orderData.id : null} ref={orderRef}>
            {orderData ?
              orderData.products.map(product =>
                <li className="product-in-order" key={orderData.id + product.id}>
                  <p>{product.name}</p>
                  <p>{product.count}</p>
                </li>
              ) : ''}
          </ol>
          {timerVisible && <Timer orderData={orderData} />}
          <button className="send-to-kitchen" onClick={() => handleUpdateOrder(orderData)}>Orden lista</button>
        </div>
      </div>
    )
  } else if (user.user.role === 'waiter') {
    return (
      <>
        <div className="order-container">
          <div className="client">
            <h3>Cliente</h3>
            <div className="name-input">
              <input type="text" className="client-name" onChange={(event) => handleClient(event)} ref={clientRef} />
            </div>
          </div>
          <div className="order">
            <h3>Tu orden:</h3>
            <hr />
            <ol className="order-products">
              {products.map((productInOrder) => {
                if (productInOrder.count > 0) {
                  return (
                    <li className="product-in-order" key={productInOrder.id}>
                      <p>{productInOrder.name}</p>
                      <p>{productInOrder.count} </p>
                      <p>{productInOrder.price} </p>
                      <button className="bin" onClick={() => handleDeleteFromOrder(productInOrder.id)} ><img src={bin} alt="" /></button>
                    </li>
                  )
                }
              })}
            </ol>
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
  }
}

export default Sidebar
