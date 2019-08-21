import React from 'react'

const UserTable = props => (
  <div className
    ="table-responsive">
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Dirección</th>
          <th>Distrito</th>
          <th>Planta</th>
          <th>DNI</th>
          <th>Contraseña</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map(user => (
            <tr className="table-active" key={user.id}>
              <td className="table-active">{user.name}</td>
              <td className="table-primary">{user.direccion}</td>
              <td className="table-secondary">{user.distrito}</td>
              <td className="table-success">{user.planta}</td>
              <td className="table-danger">{user.dni}</td>
              <td className="table-light">{user.contraseña}</td>
              <td className="table-dark">
                <button onClick={() => { props.editRow(user) }} type="submit" className='btn btn-color'> Editar</button>
                <button onClick={() => props.deleteUser(user.id)} type="submit" className='btn btn-color'>
                  Eliminar
</button>
              </td>
            </tr>
          ))
        ) : (
            <tr className="table-info">
              <td className="table-danger" colSpan={3}>No hay Usuarios</td>
            </tr>
          )}
      </tbody>
    </table>
  </div>

)

export default UserTable