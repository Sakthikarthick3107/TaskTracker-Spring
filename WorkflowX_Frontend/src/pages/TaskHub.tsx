import React, { ChangeEvent, useState } from 'react'
import { useEffect } from 'react';
import API from '../config/API';
import Header from '../utils/Header';
import { useDispatch, useSelector } from 'react-redux';
import { setTaskData } from '../redux/task/taskAction';
import Button from '../utils/CustomTags/Button';
import { RootState } from '../redux/store'
import Tooltip from '../utils/CustomTags/Tooltip';
import { handleNotification, handleTaskDrawer } from '../redux/UIManagement/UiActions';
import '../index.css'
import { TaskStatusData } from '../redux/task/taskReducer';
import TaskColumn from '../utils/TaskColumn';
import NewTask from '../utils/NewTask';
import TaskDetail from '../utils/TaskDetail';
import Options from '../utils/Options';
import InputField from '../utils/CustomTags/InputField';
import SelectInput from '../utils/CustomTags/SelectInput';

const TaskHub = () => {
  const dispatch = useDispatch();
  const userTasks  = useSelector((state : RootState) => state.task.tasks);
  const isOptionOpen = useSelector((state : RootState) => state.ui.areOptionsOpen);
  const [filterPriority , setFilterPriority] = useState<string>('');
  const [filterName , setFilterName] = useState<string>('');

  const fetchAllTasks = () => {
    let url = '/tasks';
    if(filterPriority !== ''){
      url += `/priority=${filterPriority}`;
    }
    if(filterName !== ''){
      url += `/name=${filterName}`;
    }
    try {
      API.get(`${url}`)
      .then(response => dispatch(setTaskData(response.data)));
    } catch (error) {
      console.log(error)
    }
  }

  const taskOrder : (keyof TaskStatusData)[] = ['Todo', 'Progress', 'Completed', 'Withdrawn']

  useEffect(() => {
    document.title = 'WorkflowX | TaskHub'
    fetchAllTasks();
  },[userTasks , filterPriority , filterName])

  const openTaskDrawer = () => {
    dispatch(handleTaskDrawer(true));
  }

  const handleDragStart = (event : React.DragEvent<HTMLDivElement> , taskId : number) => {
    event.dataTransfer.setData('text/plain' , taskId.toString());
    event.currentTarget.style.opacity = '100';
  }

  const handleDrop = (event : React.DragEvent<HTMLDivElement> , newStatus : string) => {
    const taskId = parseInt(event.dataTransfer.getData('text/plain') , 10);

    API.patch(`/tasks/${taskId}/status` , newStatus , {
      headers:{
        'Content-Type' : 'text/plain'
      }
    })
    .then((response) =>{
      if(response.status === 200){
        fetchAllTasks();
        // BrowserNotification('Update' , 'Task updated successfully');
        dispatch(handleNotification('Task status updated!' , 'success'));
      }

    })
    .catch((err) => {
      dispatch(handleNotification(err , 'error'));
    })
    
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.currentTarget.style.opacity = '1';
  };

  return (
    <div className={`w-full h-full text-text dark:text-dark-text   bg-background dark:bg-dark-background py-16  overflow-y-hidden`}>
    <div  className={`flex flex-row py-1 px-8 items-end gap-10 justify-between transition-transform duration-500 ${isOptionOpen ? 'translate-x-[15%]   w-[85%]' : 'translate-x-0 w-full'}`}>
          <div className='flex-1 flex-row items-end'>
            <InputField  value={filterName} onChange={(e : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFilterName(e.target.value)}   type='text' placeholder='Search task' />
          </div>
          
          <div className='flex flex-row items-end gap-10'>
            <SelectInput name='priority' value={filterPriority} onChange={(e : ChangeEvent<HTMLSelectElement>) => setFilterPriority(e.target.value)}   options={['','Low' , 'Medium' , 'High']} />
            <Tooltip message='Create New Task' position='top' >
              <Button onClick={openTaskDrawer}>Add Task</Button> 
            </Tooltip>
          </div>
          
        
      </div>
      
      <div className={`h-[75vh] thin-scrollbar px-8  flex flex-row justify-around my-2 gap-2  thin-scrollbar overflow-x-auto transition-transform duration-500 ${isOptionOpen ? 'translate-x-[18%] 2xl:translate-x-[12%] w-[80%] 2xl:w-[85%]' : 'translate-x-0 w-full' }`}>
      {taskOrder.map(status => (
          
            <TaskColumn
                key={status}
                status={status}
                tasks={userTasks[status]}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              /> 
          // )
        ))}
      </div>
        
      <Header/>
      <Options/>
      <NewTask/>
      <TaskDetail/>
      </div>
  )
}

export default TaskHub