import React, { useState, Fragment } from 'react'

import UserTable from '../tables/UserTable'
import AddUserForm from '../forms/AddUserForm'
import EditUserForm from '../forms/EditUserForm'
import Header from '../../../components/header'

export default function UserPage() {

  // Data
  const usersData = [
    { id: 1, name: 'Juan', direccion: 'av. 124 mz 5', distrito: 'Lurín', planta: 'Molino Santa Rosa', dni: '71127957', contraseña: '12345' },
    { id: 2, name: 'Maria', direccion: 'Calle 5 mz 6', distrito: 'SJL', planta: 'Plan callao', dni: 'Planta callao', contraseña: '2345535' },
    { id: 3, name: 'Roberto', direccion: 'jr chamana lt 5', distrito: 'Villa María', planta: 'Molino Santa Rosa', dni: '75674836', contraseña: '12334' },
    { id: 4, name: 'Carlos', direccion: 'jr chamana lt 5', distrito: 'Villa María', planta: 'Molino Santa Rosa', dni: '4569984', contraseña: '12334' },
    { id: 5, name: 'Filomena', direccion: 'jr quillca lt 12', distrito: 'Comas', planta: 'Planta callao', dni: '43456543', contraseña: '12334' },
    { id: 6, name: 'Judith', direccion: 'calle Gallegos N°243', distrito: 'Ancon', planta: 'Planta Nicovita', dni: '32345655', contraseña: '12334' },
    { id: 7, name: 'Alex', direccion: 'asoc Marko Jara lt 233', distrito: 'Santa Rosa', planta: 'Planta Nicovita', dni: '7876574', contraseña: '12334' }


  ]

  const initialFormState = { id: null, name: '', direccion: '', distrito: '', planta: '', dni: '', contraseña: '' }

  // Setting state
  const [users, setUsers] = useState(usersData)
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  // CRUD operations
  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = id => {
    setEditing(false)

    setUsers(users.filter(user => user.id !== id))
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)

    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  const editRow = user => {
    setEditing(true)

    setCurrentUser({ id: user.id, name: user.name, direccion: user.direccion, distrito: user.distrito, planta: user.planta, dni: user.dni, contraseña: user.contraseña })
  }

  return (

    <div className="container">
      <Header />
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <h2>Edita Usuario</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
              <Fragment>
                <h2>Agregar Usuario</h2>
                <AddUserForm addUser={addUser} />
              </Fragment>
            )}
        </div>
        <div className="flex-large">
          <h2>Usuarios</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}

