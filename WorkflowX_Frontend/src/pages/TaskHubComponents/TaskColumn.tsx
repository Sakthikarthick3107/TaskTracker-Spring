import React from 'react';
import { TaskData } from '../../redux/task/taskAction';
import TaskCard from './TaskCard';

type TaskColumnType = {
    status: string,
    tasks: TaskData[],
    onDrop: (event: React.DragEvent<HTMLDivElement>, newStatus: string) => void,
    onDragOver: (event: React.DragEvent<HTMLDivElement>) => void,
    onDragStart: (event: React.DragEvent<HTMLDivElement>, taskId: string) => void;
}

const TaskColumn: React.FC<TaskColumnType> = ({ status, tasks, onDrop, onDragOver, onDragStart }) => {
    return (
        <div
            onDrop={(event) => onDrop(event, status)}
            onDragOver={onDragOver}
            className='min-w-[300px] 2xl:min-w-[450px] flex flex-col gap-1 items-center'
        >
            <div className='flex flex-row mb-4 items-center justify-center w-full rounded-md bg-secondary dark:bg-dark-secondary drop-shadow-md'>
                <p className='text-center px-2 py-1'>
                    {status}
                </p>
                <p className='text-xs bg-primary text-white font-semibold rounded-full h-5 w-5 flex items-center justify-center'>
                    {tasks ? tasks.length : 0}
                </p>
            </div>
            <div className='flex flex-col h-full w-full gap-2 overflow-y-auto thin-scrollbar'>
                {tasks && tasks.length > 0 ? (
                    tasks.map((task, index) => (
                        <TaskCard task={task} key={index} onDragStart={onDragStart} />
                    ))
                ) : (
                    <p className='text-center text-gray-500 py-4'>No tasks</p>
                )}
            </div>
        </div>
    );
}

export default TaskColumn;
