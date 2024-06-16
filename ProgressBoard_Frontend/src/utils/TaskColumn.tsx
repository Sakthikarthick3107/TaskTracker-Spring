import React from 'react'
import { TaskData } from '../redux/task/taskAction'
import TaskCard from './TaskCard';

type TaskColumnType = {
    status : string,
    tasks : TaskData[],
    onDrop : (event : React.DragEvent<HTMLDivElement> , newStatus : string) => void,
    onDragOver: (event: React.DragEvent<HTMLDivElement>) => void,
    onDragStart: (event: React.DragEvent<HTMLDivElement>, taskId: string) => void;
}

const TaskColumn : React.FC<TaskColumnType> = ({ status, tasks, onDrop, onDragOver, onDragStart }) => {
  return (
    <div 
        onDrop={(event) => onDrop(event, status)}
        onDragOver={onDragOver}
    
        className='w-full flex flex-col gap-1 items-center'>
        <div className='flex flex-row items-center justify-center w-full rounded-md bg-secondary dark:bg-dark-secondary drop-shadow-md'>
        <p className='text-center px-2 py-1'>
            {status}
        </p>
        <p className='text-xs bg-primary text-white font-semibold rounded-full h-5 w-5 flex items-center justify-center'>
            {tasks.length}
        </p>
        </div>
        <div className='flex flex-col h-full w-full gap-2 overflow-y-auto thin-scrollbar'>
        {tasks.map((task, index) => (
            <TaskCard task={task} key={index} onDragStart={onDragStart} />
        ))}
        </div>
    </div> 
  )
}

export default TaskColumn