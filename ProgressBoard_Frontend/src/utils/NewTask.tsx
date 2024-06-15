import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleTaskDrawer } from '../redux/UIManagement/UiActions'
import { RootState } from '../redux/store'
import { ArrowLeftRounded } from '@mui/icons-material'
import LineInput from './CustomTags/LineInput'




const NewTask : React.FC = () => {
    const newTaskOpen = useSelector((state : RootState) => state.ui.taskDrawerOpen);
    const[newTask , setNewTask] = useState({
                                            taskName : '',
                                            description : ''
                                        });

    const dispatch = useDispatch();
    const drawerRef = useRef<HTMLDivElement>(null);

    const closeTaskDrawer = () => {
        dispatch(handleTaskDrawer(false));
      }

    const handleClickOutside = (event : MouseEvent) => {
        if(drawerRef.current && !drawerRef.current.contains(event.target as Node)){
            closeTaskDrawer();
        }
    }

    const handleNewTaskData = (event : ChangeEvent<HTMLInputElement>) => {
        const {name , value} = event.target;
        setNewTask({ ...newTask , [name] : value });
    }

    useEffect(() => {
        document.addEventListener('mousedown' , handleClickOutside);
        return () => document.removeEventListener('mousedown' , handleClickOutside);
    },[]);

  return (
    <div ref={drawerRef} className={`bg-text2 
                dark:bg-dark-text2 z-50 drop-shadow-lg
                 fixed top-0   
                 rounded-l-3xl 
                 right-0 w-1/2 h-full
                 transition duration-500 ease-in-out
                ${newTaskOpen ? 'translate-x-0' : 'translate-x-[100%]' }
                p-4
             `}>

    <button onClick={closeTaskDrawer}><ArrowLeftRounded fontSize='large' />Close</button>

    <form>
        <LineInput placeholder='New Task Name' name='taskName' value={newTask.taskName} onChange={handleNewTaskData}  />

    </form>

    </div>
  )
}

export default NewTask