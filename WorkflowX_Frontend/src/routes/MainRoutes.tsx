import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TaskHub from '../pages/TaskHub'
import Welcome from '../pages/Welcome'
import WFDashboardRoute from './WFDashboardRoute'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Welcome/>} />
        <Route path='/workflow-dashboard/*' element={<WFDashboardRoute/>}/>
    </Routes>
  )
}

export default MainRoutes