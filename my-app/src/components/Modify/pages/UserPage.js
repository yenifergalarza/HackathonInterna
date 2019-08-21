import React, { useState, Fragment } from 'react'
import './index.css'
import UserTable from '../tables/UserTable'
import AddUserForm from '../forms/AddUserForm'
import EditUserForm from '../forms/EditUserForm'


export default function UserPage() {

  // Data
  const usersData = [
    { id: 1, name: 'Rocio', username: 'chio' },
    { id: 2, name: 'Laboratoria', username: 'labo' },
    { id: 3, name: 'Diosito', username: 'diosito' },
  ]

  const initialFormState = { id: null, name: '', username: '' }

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

    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  return (

    <div className="container">

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

