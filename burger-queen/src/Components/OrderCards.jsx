import '../css/build.css'
import Timer from './OrderTimer'

const OrderCards = ({ orders, handleCardClick }) => {
  return (
    <>
      {orders.map((order) =>
        <li className="order-card" key={order.client + order.id} onClick={event => handleCardClick(order)}>
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
          <section className='timer'>
            <Timer orderData={order}/>
          </section>
        </li>
      )}
    </>
  )
}

export default OrderCards
