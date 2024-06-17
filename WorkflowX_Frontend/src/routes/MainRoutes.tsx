import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TaskHub from '../pages/TaskHub'
import Welcome from '../pages/Welcome'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Welcome/>} />
        <Route path='/tasks' element={<TaskHub/>} />
    </Routes>
  )
}

export default MainRoutes