const AdminSidebar = () => {
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
        <button className="update-data">Actualizar</button>
      </div>
    </div>
  )
}

export default AdminSidebar