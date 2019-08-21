import React, { useState } from 'react'

const AddUserForm = props => {
  const initialFormState = { id: null, name: '', direccion: '', distrito: '', planta: '', dni: '', contraseña: '' }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!user.name || !user.direccion || !user.distrito || !user.planta || !user.dni || !user.contraseña) return

        props.addUser(user)
        setUser(initialFormState)
      }}
    >
      <label>Nombre</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>direccion</label>
      <input type="text" name="direccion" value={user.direccion} onChange={handleInputChange} />
      <label>distrito</label>
      <input type="text" name="distrito" value={user.distrito} onChange={handleInputChange} />
      <label>planta</label>
      <input type="text" name="planta" value={user.planta} onChange={handleInputChange} />
      <label>dni</label>
      <input type="text" name="dni" value={user.dni} onChange={handleInputChange} />
      <label>contraseña</label>
      <input type="number" name="contraseña" value={user.contraseña} onChange={handleInputChange} />
      <button>Agregar Usuario</button>
    </form>
  )
}

export default AddUserForm