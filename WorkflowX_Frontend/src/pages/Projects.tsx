import React, { useEffect } from 'react'

const Projects = () => {

    useEffect(() => {
        document.title = 'WorkflowX | Projects';
    },[])
  return (
    <div className={`w-full h-full text-text dark:text-dark-text   bg-background dark:bg-dark-background py-16  overflow-y-hidden`}>
        
    </div>
  )
}

export default Projects