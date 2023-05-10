import { User } from './User'

export interface Task {
  id: string
  description: string
  owner: User
  user_id: string
  status: string
}
