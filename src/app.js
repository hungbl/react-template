import React, { useState } from 'react'
import UserTable from './tables/user-table'
import AddUser from './forms/add-user'
import EditUser from './forms/edit-user'

const App = () => {
    const usersData = [
        { id: 1, name: 'Tania', username: 'floppydiskette' },
        { id: 2, name: 'Craig', username: 'siliconeidolon' },
        { id: 3, name: 'Ben', username: 'benisphere' },
    ]
    const initialUser = { id: null, name: '', username: '' }
    const [users, setUsers] = useState(usersData)
    const [editing, setEditing] = useState(false)
    const [currentUser, setCurrentUser] = useState(initialUser)
    const addUser = (user) => {
        user.id = users.length + 1
        setUsers([...users, user])
    }
    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id))
    }
    const editUser = (user) => {
        setEditing(true)
        setCurrentUser({ id: user.id, name: user.name, username: user.username })
    }
    const updateUser = (id, updatedUser) => {
        setEditing(false)

        setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
    }

    return (
        <div className="container">
            <h1>CRUD App with Hooks</h1>
            <div className="flex-row">
                <div className="flex-large half">
                    {
                        editing
                        ? ( <div>
                            <h2>Edit user</h2>
                            <EditUser
                                setEditing={setEditing}
                                currentUser={currentUser}
                                updateUser={updateUser}
                            />
                        </div>)
                        : (<div>
                                <h2>Add user</h2>
                                <AddUser addUser={addUser} />
                            </div>)
                    }
                </div>
                <div className="flex-large half">
                    <h2>View users</h2>
                    <UserTable users={users} deleteUser={deleteUser} editUser={editUser} />
                </div>
            </div>
        </div>
    )
}

export default App