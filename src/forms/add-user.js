import React, { useState } from 'react'

const AddUser = (props) => {
    const initialState = { id: null, name: '', username: '' }
    const [user, setUser] = useState(initialState)
    const handlerInputChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }
    const handlerFormSubmit = (event) => {
        event.preventDefault()
        if (!user.name || !user.username) return

        props.addUser(user)
        setUser(initialState)
    }
    return (
        <form onSubmit={handlerFormSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handlerInputChange} />
            <label>Username</label>
            <input type="text" name="username" value={user.username} onChange={handlerInputChange} />
            <button>Add new user</button>
        </form>
    )
}

export default AddUser