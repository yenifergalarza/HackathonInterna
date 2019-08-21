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
       <div class="form-group">
      <label>Nombre</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
</div>
<div class="form-group"> 
      <label>direccion</label>
      <input type="text" name="direccion" value={user.direccion} onChange={handleInputChange} /></div>
      <div class="form-group"> 
      <label  class="form-control"  >distrito</label>
      <input type="text" name="distrito" value={user.distrito} onChange={handleInputChange} />
   </div> <div class="form-group"> 
      <label class="form-control"  >planta</label>
      <input type="text" name="planta" value={user.planta} onChange={handleInputChange} />
      </div><div class="form-group"> 
      <label class="form-control"  >dni</label>
      <input type="text" name="dni" value={user.dni} onChange={handleInputChange} />
      </div>
      <div class="form-group"> 
      <label class="form-control" >contraseña</label>
      <input type="number" name="contraseña" value={user.contraseña} onChange={handleInputChange} />
      </div>
      <button class="btn btn-danger" >Agregar Usuario</button>
    </form>
  )
}

export default AddUserForm