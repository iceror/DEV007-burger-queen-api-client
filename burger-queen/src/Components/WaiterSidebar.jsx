import { useContext, useRef, useState, useEffect } from "react";
import { OrderContext } from "../context/OrderContext";
import Modal from './Modal'
import bin from '../assets/trash-bin.png'

const WaiterSideBar = ({ orderData, readyOrders, onDeliver, deliveredOrders }) => {
  const { products, deleteFromOrder, order, sendClientToContext, orderTotal, sendOrderToApi, updateOrderInApi } = useContext(OrderContext);
  let clientRef = useRef('');
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const clientNameRef = useRef('');
  // const orderRef = useRef('');
  const productInOrderRef = useRef('');

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

  const hanldeDeliverOrder = (orderData) => {
    updateOrderInApi(orderData);
    onDeliver();
    clientNameRef.current.innerHTML = '';
    productInOrderRef.current.innerHTML = '';
  }

  if (orderData === null || orderData === undefined) {
    // don't modify this code, else code in the making
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
  } else if (orderData?.status === 'ready') {
    return (
      <>
        <div className="order-container">
          <div className="client">
            <h3>Cliente</h3>
            <div className="name-input" >
              <h3 className="client-name" ref={clientNameRef}>{orderData ? orderData.client : ''}</h3>
            </div>
          </div>
          <div className="order" >
            <h3>Tu orden:</h3>
            <hr />
            <ol className="order-products">
              {
                orderData.products.map(productInOrder => {
                  if (productInOrder.count > 0) {
                    return (
                      <li className="product-in-order" key={productInOrder.id} ref={productInOrderRef}>
                        <p>{productInOrder.name}</p>
                        <p>{productInOrder.count} </p>
                        <p>{productInOrder.price} </p>
                      </li>
                    )
                  }
                })}
            </ol>
            <div className="total">
              <h3 >Total: </h3>
              <h3>${orderData.total}.00</h3>
            </div>
            <button className="send-to-kitchen" onClick={() => hanldeDeliverOrder(orderData, deliveredOrders)}>Entregar orden</button>
          </div>
        </div>
      </>
    )
  }
}

export default WaiterSideBar