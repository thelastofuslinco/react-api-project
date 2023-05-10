import React from 'react'
import type { Task as TaskModel } from '../../../../../../models/Task'
import { TaskContainer } from './styles'
import { Button } from '../../../../../../components'

interface Props {
  task: TaskModel
}

export const Task = ({ task }: Props) => {
  console.log(task)

  return (
    <TaskContainer taskStatus={task.status}>
      {task.description} {task.status} <Button>edit task</Button>
    </TaskContainer>
  )
}
