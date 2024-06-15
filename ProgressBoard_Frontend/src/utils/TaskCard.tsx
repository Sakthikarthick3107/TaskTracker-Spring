import React from 'react'
import { TaskData } from '../redux/task/taskAction'

type TaskCardType = {
    task : TaskData
}

const TaskCard : React.FC<TaskCardType> = ({task}) => {
  return (
    <div className='w-full bg-card dark:bg-dark-card drop-shadow-md p-2 rounded-sm'>
        <p className='font-medium text-primary'>{task.taskname}</p>
                
        <p className='text-sm'>{task.description}</p>
    </div>
  )
}

export default TaskCard