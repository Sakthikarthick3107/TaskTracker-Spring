import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TaskHub from '../pages/TaskHub'
import Projects from '../pages/Projects'
import Header from '../utils/Header'
import Options from '../utils/Options'
import NewTask from '../utils/NewTask'
import TaskDetail from '../utils/TaskDetail'

const WFDashboardRoute = () => {
  return (
    <div className={`w-full h-full text-text dark:text-dark-text   bg-background dark:bg-dark-background py-16  overflow-y-hidden`}>
        <Header/>
        <Options/>
        <NewTask/>
        <TaskDetail/>
        <Routes>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/task' element={<TaskHub/>}/>
        </Routes>
    </div>
  )
}

export default WFDashboardRoute