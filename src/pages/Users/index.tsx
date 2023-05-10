import { useEffect, useState } from 'react'
import axios from 'axios'
import { UsersContainer } from './styles'
import { TaskList } from './components'
import { User } from '../../models/User'
import { Button } from '../../components'

export const Users = () => {
  const [users, setUsers] = useState<User[]>([])
  const [selectedUser, setSelectedUser] = useState<User>()

  useEffect(() => {
    axios.get('http://localhost:3000/user?professional=true').then((res) => {
      setUsers(res.data)
    })
  }, [])

  return (
    <UsersContainer>
      <div className="usersContainer">
        <h2>Professional List</h2>
        {users.map((user) => {
          return (
            <div key={user.id} onClick={() => setSelectedUser(user)}>
              <div className="userData">
                <span>Name: {user.name}</span>
                <span>Email: {user.email}</span>
                <span>phone: {user.phone}</span>
              </div>

              <div>
                {selectedUser?.id === user.id && (
                  <TaskList userId={selectedUser.id} />
                )}
              </div>

              <Button>Create new task</Button>
            </div>
          )
        })}
      </div>
    </UsersContainer>
  )
}
