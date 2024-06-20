import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { handleNotification } from '../../redux/UIManagement/UiActions';
import AnimateText from '../../utils/CustomTags/AnimateText';
import InputField from '../../utils/CustomTags/InputField';
import SelectInput from '../../utils/CustomTags/SelectInput';
import DateInput from '../../utils/CustomTags/DateInput';
import Button from '../../utils/CustomTags/Button';
import API from '../../config/API';
import { DeleteOutline } from '@mui/icons-material';
import Tooltip from '../../utils/CustomTags/Tooltip';
import { useLocation, useNavigate } from 'react-router-dom';
import { setSelectedTask } from '../../redux/task/taskAction';

const TaskDetail = () => {
  const task = useSelector((state : RootState) => state.task.selectedTask);
  const dispatch = useDispatch();
  const taskRef = useRef<HTMLDivElement>(null);

  const location = useLocation();
  const navigate = useNavigate();

  const[editTask , setEditTask] = useState({
                                          taskid : 0,
                                          taskname : '',
                                          description : '',
                                          status : '',
                                          endDate : '',
                                          priority : ''
                                      });
    
        useEffect(() => {
          const queryParams = new URLSearchParams(location.search);
          const taskId = queryParams.get('taskId');
                                    
          if (taskId) {
            if (!task || task.taskid.toString() !== taskId) {
              API.get(`/project/PR-2/tasks/${taskId}`)
                .then((response) => {
                  
                  if (response.status === 200) {
                    dispatch(setSelectedTask(response.data));
                  }
                })
                .catch((err) => {
                  // console.log(err)
                  dispatch(handleNotification(err.response.data.err, 'error'));
                });
            }
          } else {
            dispatch(setSelectedTask(null));
          }
        }, [location.search, dispatch]);
  
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
        const queryParams = new URLSearchParams(location.search);
        queryParams.set('taskId',`${task.taskid}`),
        navigate({search : queryParams.toString()} , {replace : true});
      }
      else{
        const queryParams = new URLSearchParams(location.search);
        queryParams.delete('taskId'),
        navigate({search : queryParams.toString()} , {replace : true});
        // navigate(-1);
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
        dispatch(setSelectedTask(null));
        const queryParams = new URLSearchParams(location.search);
        queryParams.delete('taskId'),
        navigate({search : queryParams.toString()} , {replace : true});
        // navigate(`${location.pathname}`, { replace: true });
        // window.location.reload();
      }
    }
  }

  const handleEditedTaskData = (event : ChangeEvent<HTMLInputElement| HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name , value} = event.target;
    setEditTask({ ...editTask , [name] : value });
}

  const updateTaskData = () => {
    API.put(`project/task/put/${task?.taskid}` , editTask)
    .then((response) => {
      if(response.status === 200){
        dispatch(handleNotification(`Updated Task ${task?.taskname}` , 'success'));
        dispatch(setSelectedTask(null));
      }
    })
    .catch((err) => {
      dispatch(handleNotification( err , 'error'));
    })
  }

  const deleteTask = () => {
    API.delete(`project/task/delete/${task?.taskid}`)
    .then((response) => {
      if(response.status === 200){
        dispatch(handleNotification(`Deleted ${task?.taskname}` , 'success'));
        dispatch(setSelectedTask(null));
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