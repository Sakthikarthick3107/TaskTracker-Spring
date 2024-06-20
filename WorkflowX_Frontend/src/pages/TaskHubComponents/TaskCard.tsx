import React from 'react'
import { TaskData, setSelectedTask } from '../../redux/task/taskAction'
import { useDispatch } from 'react-redux'
import AnimateText from '../../utils/CustomTags/AnimateText'
import BrowserNotification from '../../config/BrowserNotification'

type TaskCardType = {
    task : TaskData,
    onDragStart ?: (event : React.DragEvent<HTMLDivElement> , taskId : number) => void
}

const TaskCard : React.FC<TaskCardType> = ({task , onDragStart}) => {

  const dispatch = useDispatch();

  const setTaskDetail = () => {
    dispatch(setSelectedTask(task));
  }

  const getDueStatus = () => {
    if (task.endDate) {
        const endDate = new Date(task.endDate);
        const currentDate = new Date();
        const diffTime = endDate.getTime() - currentDate.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays < 0) {
            BrowserNotification(task.taskname, `Task "${task.taskname}" is delayed by ${Math.abs(diffDays)} days.`);
            return `Due delayed - ${Math.abs(diffDays)} days`;
        }
    }
    return task.endDate ? task.endDate : 'Deadline not set';
};
  


  return (
    <AnimateText duration={300} draggable onDragStart={(event) => onDragStart(event,task.taskid)}  onClick={setTaskDetail}
        className='w-full bg-card dark:bg-dark-card drop-shadow-md p-2 rounded-lg min-h-[18vh] group cursor-pointer'>
        <p className='font-medium text-lg text-primary'>{task.taskname}</p>
        <p className='text-sm'>{task.description}</p>
        <div className='flex'>
            <p className='px-4 text-sm my-2 py-[2px] rounded-full bg-secondary dark:bg-dark-secondary flex '>{task.priority}</p>
        </div>
        
        <div className='opacity-0 w-full flex flex-row items-center justify-center text-xs -drop-shadow-md  transition duration-300 ease-in-out translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 absolute bottom-0 left-0'>
          <p className='bg-primary text-white px-4 pt-1 rounded-t-2xl'>
              {getDueStatus()}
          </p>
        </div>
        
    </AnimateText>
  )
}

export default TaskCard