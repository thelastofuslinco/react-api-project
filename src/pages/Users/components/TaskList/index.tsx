import { useEffect, useState } from 'react'
import axios from 'axios'
import { TaskListContainer } from './styles'
import { Task as TaskModel } from '../../../../models/Task'
import { Task } from './components'

interface Props {
  userId: string
}

export const TaskList = ({ userId }: Props) => {
  const [tasks, setTasks] = useState<TaskModel[]>([])

  useEffect(() => {
    axios
      .get(`http://localhost:3000/task?user_id=${userId}`)
      .then((res) => setTasks(res.data))
  }, [userId])

  return (
    <>
      {tasks.length > 0 ? (
        <TaskListContainer>
          Tasks
          {tasks.map((task) => {
            return <Task key={task.id} task={task} />
          })}
        </TaskListContainer>
      ) : (
        <h2>Professional has no tasks</h2>
      )}
    </>
  )
}
