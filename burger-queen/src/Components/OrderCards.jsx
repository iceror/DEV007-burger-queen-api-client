import '../css/build.css'
import Sidebar from './Sidebar'

const OrderCards = ({ orders, handleCardClick }) => {
  // console.log('INSIDE ORDERCARDS', orders);
  return (
    <>
      {orders.map((order) =>
        <li className="order-card" key={order.id} onClick={event => handleCardClick(order)}>
          <div className='client'>
            <p>{order.client}</p>
            <p>#{order.id}</p>
          </div>
          <hr />
          {order.products.map((product) =>
            <div className="products-list" >
              <p>{product.name}</p>
              <p>{product.count}</p>
            </div>
          )}
        </li>
      )
      }
    </>
  )
}

export default OrderCards
