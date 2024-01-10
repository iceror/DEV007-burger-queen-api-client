import { useContext, useRef, useState } from "react";
import Timer from "./OrderTimer";
import { OrderContext } from "../context/OrderContext";

const CookSidebar = ({ orderData, onReady }) => {
  const { updateOrderInApi } = useContext(OrderContext);
  let clientNameRef = useRef(null);
  let orderIdRef = useRef(null);
  let orderRef = useRef(null);
  const [timerVisible, setTimerVisible] = useState(true);

  const handleUpdateOrder = (orderData) => {
    // send time passed from timer in the update order in api function 
    updateOrderInApi(orderData);
    onReady();
    clientNameRef.current.textContent = '';
    orderIdRef.current.textContent = '';
    orderRef.current.innerHTML = '';
    setTimerVisible(false);
  }

  return (
    <div className="order-container">
      <div className="client">
        <h3>Cliente</h3>
        <div className="name-input">
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
}

export default CookSidebar