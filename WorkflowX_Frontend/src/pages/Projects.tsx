import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import API from '../config/API';
import AnimateText from '../utils/CustomTags/AnimateText';


type ProjectDataType = {
  projectId: string,
  projectName: string,
  description: string,
  createdAt: string,
  startDate: string,
  endDate: string
}

const Projects = () => {

    const isOptionOpen = useSelector((state : RootState) => state.ui.areOptionsOpen);
    const[projectData , setProjectData] = useState<ProjectDataType[]>([]);

    const fetchProjects = () => {
      API.get('/projects')
      .then((response) => {
        setProjectData(response.data);
      })
      .catch((err) =>{
        console.log(err)
      })
    }

    useEffect(() => {
        document.title = 'WorkflowX | Projects';
        fetchProjects();
    },[])
  return (
    <>
        <div  className={`flex flex-col py-1 px-8  gap-10  transition-transform duration-500 ${isOptionOpen ? 'translate-x-[15%]   w-[85%]' : 'translate-x-0 w-full'}`}>
          <AnimateText duration={300} className='text-2xl font-medium'>My Workspace</AnimateText>
          <div className='flex flex-row items-center gap-4'>
           
              {projectData.map((project , index) =>  (
                <AnimateText duration={300} key={index} className='bg-card dark:bg-dark-card shadow-md drop-shadow-lg w-[300px] h-32 px-4 py-2 rounded-md cursor-pointer'>
                  <p className='text-lg font-medium'>{project.projectName}</p>
                  <p className='text-sm'>{project.description}</p>
                </AnimateText>
              ))}
          </div>
        </div>
    </>
  )
}

export default Projects