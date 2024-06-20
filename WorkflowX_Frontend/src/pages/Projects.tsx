import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import AnimateText from '../utils/CustomTags/AnimateText';
import { useNavigate } from 'react-router-dom';
import { ProjectDataType, setSelectedProject } from '../redux/project/projectAction';




const Projects = () => {

    const isOptionOpen = useSelector((state : RootState) => state.ui.areOptionsOpen);
    const projectData = useSelector((state : RootState) => state.project.projects);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleProjectSelection = ( project :ProjectDataType) => {
      dispatch(setSelectedProject(project));
      navigate(`/workflow-dashboard/project/${project.projectId}/tasks`)
    }
   
  return (
    <>
        <div  className={`flex flex-col py-1 px-8  gap-10  transition-transform duration-500 ${isOptionOpen ? 'translate-x-[15%]   w-[85%]' : 'translate-x-0 w-full'}`}>
          <AnimateText   duration={300} className='text-2xl font-medium'>My Workspace</AnimateText>
          <div className='flex flex-row items-center gap-4'>
           
              {projectData.map((project , index) =>  (
                <AnimateText  duration={300} onClick={() => handleProjectSelection(project)} 
                 key={index} className='bg-card dark:bg-dark-card shadow-md drop-shadow-lg w-[300px] h-32 px-4 py-2 rounded-md cursor-pointer'>
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