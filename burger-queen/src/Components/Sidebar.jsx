import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const Sidebar = () => {
  const { user } = useContext(UserContext);
  const [ clientName, setClientName] = useState('');

  const handleClient = () => {
    setClientName(event.target.value)
    // console.log(clientName);
  }


  if(user.user.role === 'waiter'){
    return ( 
      <div className="order-container">
              <div className="client">
                <h3>Cliente</h3>
                <div className="name-input">
                  <input type="text" className="client-name" value={ clientName } onChange={ handleClient }/>
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
  } else if (user.user.role === 'admin'){
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
  } else if (user.user.role === 'cook'){
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
