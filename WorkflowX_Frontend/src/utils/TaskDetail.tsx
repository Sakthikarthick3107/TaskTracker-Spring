import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { handleNotification, setTaskData } from '../redux/UIManagement/UiActions';
import AnimateText from './CustomTags/AnimateText';
import InputField from './CustomTags/InputField';
import SelectInput from './CustomTags/SelectInput';
import DateInput from './CustomTags/DateInput';
import Button from './CustomTags/Button';
import API from '../config/API';
import { DeleteOutline } from '@mui/icons-material';
import Tooltip from './CustomTags/Tooltip';

const TaskDetail = () => {
  const task = useSelector((state : RootState) => state.ui.taskDetail);
  const dispatch = useDispatch();
  const taskRef = useRef<HTMLDivElement>(null);

  const[editTask , setEditTask] = useState({
                                          taskid : 0,
                                          taskname : '',
                                          description : '',
                                          status : '',
                                          endDate : '',
                                          priority : ''
                                      });
  
    useEffect(() => {
      if (task) {
        setEditTask({
          taskid: task.taskid,
          taskname: task.taskname,
          description: task.description,
          status: task.status,
          endDate: task.endDate,
          priority: task.priority
        });
      }
    }, [task]);

  const hasUnsavedChanges = () => {
      return (
        task &&
        (editTask.status !== task.status ||
        editTask.priority !== task.priority ||
        editTask.endDate !== task.endDate)
      );
    };
  

  const handleClickOutside = (event : MouseEvent) => {
    if(taskRef.current && !taskRef.current.contains(event.target as Node)){
      if(hasUnsavedChanges()){
        dispatch(handleNotification('Save changes before closing!', 'warning'));
      }
      else{
        dispatch(setTaskData(null));
      }
    }
  }

  const handleEditedTaskData = (event : ChangeEvent<HTMLInputElement| HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name , value} = event.target;
    setEditTask({ ...editTask , [name] : value });
}

  const updateTaskData = () => {
    API.put(`tasks/${task?.taskid}` , editTask)
    .then((response) => {
      if(response.status === 200){
        dispatch(handleNotification(`Updated Task ${task?.taskname}` , 'success'));
        dispatch(setTaskData(null));
      }
    })
    .catch((err) => {
      dispatch(handleNotification( err , 'error'));
    })
  }

  const deleteTask = () => {
    API.delete(`tasks/${task?.taskid}`)
    .then((response) => {
      if(response.status === 200){
        dispatch(handleNotification(`Deleted ${task?.taskname}` , 'success'));
        dispatch(setTaskData(null));
      }
    })
    .catch((err) =>{
      dispatch(handleNotification(err.response.data.message , 'error'));
    })
  }


  useEffect(() =>{
      window.addEventListener('mousedown' , handleClickOutside);
      return () => window.removeEventListener('mousedown' , handleClickOutside);
  },[editTask,task])

  
  
  if(!task){
    return null;
  }

  

  return (
    <AnimateText duration={200} className={`fixed 
                      inset-0 w-[100%] 
                      h-full top-0  z-50 
                      flex flex-col items-center 
                      justify-center`}>


        <div ref={taskRef} className={`w-[90%] h-[95%] bg-background
                        p-8 flex flex-col
                     dark:bg-dark-background drop-shadow-2xl 
                     border-[1px] rounded-xl border-primary`}>
            <div className='w-full p-2 border-b border-primary'>
               <p  className='text-primary text-3xl font-semibold'>{task.taskname}</p>
               <p>Created at {task.startDate}</p>
            </div>
            
            <div className='flex flex-col w-full p-10 gap-2'>
              <InputField onChange={handleEditedTaskData} placeholder='Description' type='textarea' value={editTask.description}/>
              <SelectInput onChange={handleEditedTaskData}   name='status' value={editTask.status} options={['Todo','Progress','Completed' , 'Withdrawn']}  />
              <SelectInput onChange={handleEditedTaskData} name='priority' value={editTask.priority} options={['Low' , 'Medium' , 'High']} />
              <DateInput onChange={handleEditedTaskData}  name='endDate' value={editTask.endDate} />
            </div>
        
            <div className='absolute bottom-10 flex flex-row items-center justify-end gap-2 w-[90%]'>

              {hasUnsavedChanges() && 
              <Tooltip message='Updates the task'>
                <Button onClick={updateTaskData}>Update</Button>
              </Tooltip>
              }
              <Tooltip message='Deletes the task'>
                <Button onClick={deleteTask} className='bg-red-800 hover:bg-red-900 flex gap-1 flex-row items-center'>
                    Delete
                    <DeleteOutline/>
                </Button>
              </Tooltip>
            </div>
            
        </div>
    </AnimateText>
  )
}

export default TaskDetail