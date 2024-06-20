import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import TaskHub from '../pages/TaskHubComponents/TaskHub'
import Projects from '../pages/Projects'
import Header from '../utils/Header'
import Options from '../utils/Options'
import { useDispatch, useSelector } from 'react-redux'
import { setAllProjects } from '../redux/project/projectAction'
import API from '../config/API'
import { RootState } from '../redux/store'

const WFDashboardRoute = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state : RootState) => state.project.projects);
  const fetchProjects = () => {
    API.get('/projects')
    .then((response) => {
      dispatch(setAllProjects(response.data))
    })
    .catch((err) =>{
      console.log(err)
    })
  }

  useEffect(() => {
    fetchProjects();
  },[projects])


  return (
    <div className={`w-full h-full text-text dark:text-dark-text   bg-background dark:bg-dark-background py-16  overflow-y-hidden`}>
        <Header/>
        <Options/>
        <Routes>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/project/:projectId/tasks' element={<TaskHub/>}/>
        </Routes>
    </div>
  )
}

export default WFDashboardRoute