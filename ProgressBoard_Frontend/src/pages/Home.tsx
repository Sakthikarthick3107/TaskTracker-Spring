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
import { handleTaskDrawer } from '../redux/UIManagement/UiActions';
import '../index.css'

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

  useEffect(() => {
    fetchAllTasks();
  },[userTasks])

  const openTaskDrawer = () => {
    dispatch(handleTaskDrawer(true));
  }


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
        {Object.entries(userTasks).map(([status,tasks]) =>(
          <div className='w-full flex flex-col gap-1 items-center' key={status}>
            <div  className='flex flex-row items-center justify-center w-full rounded-md  bg-secondary dark:bg-dark-secondary drop-shadow-md'>
              <p className='text-center  px-2 py-1 '>
                {status}
              </p>
              
              <p className='text-xs bg-primary text-white font-semibold rounded-full h-5 w-5 flex items-center justify-center'>
                {tasks.length}
              </p>
            </div>
            <div className='flex flex-col h-full w-full gap-2 overflow-y-auto thin-scrollbar'>
                {tasks.map((task,index) => (
                <TaskCard task={task} key={index}/>
                ))}
            </div>
            
            
          </div>
        ))}
      </div>
      </>
  )
}

export default Home