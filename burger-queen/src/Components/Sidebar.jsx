const Sidebar = () => {
  // if its waiter/cook view show order, if its admin view show employee info
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
              <button className="send-to-kitchen">Enviar a cocina</button>
            </div>
          </div>
  )
}

export default Sidebar
