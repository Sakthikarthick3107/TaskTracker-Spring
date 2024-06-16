import React from 'react'
import { useEffect } from 'react';
import API from '../config/API';
import Header from '../utils/Header';
import AnimateText from '../utils/CustomTags/AnimateText';
import { useDispatch, useSelector } from 'react-redux';
import { setTaskData } from '../redux/task/taskAction';
import Button from '../utils/CustomTags/Button';
import { RootState } from '../redux/store'
import Tooltip from '../utils/CustomTags/Tooltip';
import TaskCard from '../utils/TaskCard';
import { handleNotification, handleTaskDrawer } from '../redux/UIManagement/UiActions';
import '../index.css'
import { TaskStatusData } from '../redux/task/taskReducer';
import TaskColumn from '../utils/TaskColumn';
import BrowserNotification from '../config/BrowserNotification';

const Home = () => {
    const dispatch = useDispatch();
  const userTasks  = useSelector((state : RootState) => state.task.tasks);

  const fetchAllTasks = () => {
    try {
      API.get('/tasks')
      .then(response => dispatch(setTaskData(response.data)));
    } catch (error) {
      console.log(error)
    }
  }

  const taskOrder : (keyof TaskStatusData)[] = ['Todo', 'Progress', 'Completed', 'Withdrawn']

  useEffect(() => {
    fetchAllTasks();
  },[userTasks])

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
    <>
    <div  className='flex flex-row w-full items-center justify-between'>
        <div>
          <AnimateText className='text-4xl text-primary font-bold' duration={200}>Hello Sakthikarthick</AnimateText>
          <AnimateText duration={500}>Welcome back</AnimateText>
        </div>
        <Tooltip message='Create New Task' >
          <Button onClick={openTaskDrawer}>Add Task</Button> 
        </Tooltip>
        
      </div>
      
      <div className='w-full h-[75vh]  flex flex-row justify-around my-2 gap-2'>
      {taskOrder.map(status => (
          userTasks[status] && (
            <TaskColumn
                key={status}
                status={status}
                tasks={userTasks[status]}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              /> 
          )
        ))}
      </div>
      </>
  )
}

export default Home