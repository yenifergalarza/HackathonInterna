import React, { useState } from 'react'

const AddUserForm = props => {
  const initialFormState = { id: null, name: '', username: '' }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!user.name || !user.username) return

        props.addUser(user)
        setUser(initialFormState)
      }}
    >
      <label>Nombre</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Nombre de Usuario</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} />
      <button>Agregar Usuario</button>
    </form>
  )
}

export default AddUserForm