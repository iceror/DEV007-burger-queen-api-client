import '../css/build.css'

const OrderCards = ({orders}) => {
  // console.log('INSIDE ORDERCARDS', orders);
  return (
    <>
      {orders.map((order) => 
        <div className="order-card">
          <p>{order.client}</p>
          <p>#{order.id}</p>
          <hr />
          <div className="products-list">
            {order.products.map((product) => 
            <>
              <p>{product.name}</p>
              <p>{product.count}</p>
              <div className="timer">timer ⏱️</div>
            </>
              ) }
          </div>
        </div>
      )

      }
    </>
  )
}

export default OrderCards
