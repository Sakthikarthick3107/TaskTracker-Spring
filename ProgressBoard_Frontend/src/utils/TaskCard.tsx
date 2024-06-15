import React from 'react'
import { TaskData } from '../redux/task/taskAction'

type TaskCardType = {
    task : TaskData
}

const TaskCard : React.FC<TaskCardType> = ({task}) => {
  return (
    <div className='w-full bg-card dark:bg-dark-card drop-shadow-md p-2 rounded-lg min-h-[18vh] group cursor-pointer'>
        <p className='font-medium text-lg text-primary'>{task.taskname}</p>
        <p className='text-sm'>{task.description}</p>
        <div className='flex'>
            <p className='px-4 text-sm my-2 py-[2px] rounded-full bg-secondary dark:bg-dark-secondary flex '>{task.priority}</p>
        </div>
        
        <p className='opacity-0 text-xs -drop-shadow-md bg-background dark:bg-dark-background px-4 pt-1 rounded-t-2xl transition duration-300 ease-in-out translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 absolute bottom-0 left-1/3'>
            {task.endDate ? task.endDate : 'Deadline not set'}
        </p>
    </div>
  )
}

export default TaskCard