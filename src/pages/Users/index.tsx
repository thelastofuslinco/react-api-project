import { useEffect, useState } from 'react'
import axios from 'axios'
import { UsersContainer } from './styles'

interface User {
  id: String
  name: String
  email: String
  phone: String
  gender: String
  age: number
  password: String
  professional: Boolean
  created_at: Date
}

export const Users = () => {
  const [users, setUsers] = useState<User[]>([])
  const [selectedUser, setSelectedUser] = useState<User>()

  useEffect(() => {
    axios.get('http://localhost:3000/user').then((res) => {
      setUsers(res.data)
    })
  }, [])

  return (
    <UsersContainer>
      <div className="usersContainer">
        Users:
        {users.map((user, index) => {
          return (
            <div key={index} onClick={() => setSelectedUser(user)}>
              <span>Name: {user.name}</span>
              <span>Email: {user.email}</span>
              <span>phone: {user.phone}</span>
            </div>
          )
        })}
      </div>

      {selectedUser && (
        <div className="selectedContainer">
          Selected user:
          <span>Name: {selectedUser.name}</span>
          <span>Email: {selectedUser.email}</span>
          <span>phone: {selectedUser.phone}</span>
        </div>
      )}
    </UsersContainer>
  )
}
