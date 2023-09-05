import '../css/build.css'

const OrderCards = ({ orders }) => {
  // console.log('INSIDE ORDERCARDS', orders);
  return (
    <>
      {orders.map((order) =>
        <div className="order-card" key={order.id}>
          <div className='client'>
          <p>{order.client}</p>
          <p>#{order.id}</p>
          </div>
          <hr />
          {order.products.map((product) =>
            <div className="products-list">
              <p>{product.name}</p>
              <p>{product.count}</p>
            </div>
          )}
          <div className="timer">timer ⏱️</div>
        </div>
      )

      }
    </>
  )
}

export default OrderCards
