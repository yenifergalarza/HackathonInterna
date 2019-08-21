
import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser)
  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [props]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]
  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }



  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Nombre</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Dirección</label>
      <input type="text" name="direccion" value={user.direccion} onChange={handleInputChange} />
      <label>Distrito</label>
      <input type="text" name="distrito" value={user.distrito} onChange={handleInputChange} />
      <label>Planta</label>
      <input type="text" name="planta" value={user.planta} onChange={handleInputChange} />
      <label>DNI</label>
      <input type="number" name="dni" value={user.dni} onChange={handleInputChange} />
      <label>Contraseña</label>
      <input type="text" name="contraseña" value={user.contraseña} onChange={handleInputChange} />
      <button>Actualizar Usuario</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancelar
      </button>
    </form>
  )
}

export default EditUserForm