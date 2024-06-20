export const SET_ALL_PROJECTS = 'SET_ALL_PROJECTS';
export const SET_PROJECT = 'SET_PROJECT';

export type ProjectDataType = {
    projectId: string,
    projectName: string,
    description: string,
    createdAt: string,
    startDate: string,
    endDate: string
  }

export type SetAllProjectsAction = {
    type : typeof SET_ALL_PROJECTS,
    payload : ProjectDataType[]
}

export type SetSelectedProjectAction = {
    type : typeof SET_PROJECT,
    payload : ProjectDataType
}

export const setAllProjects = (projects : ProjectDataType[] ) => ({
    type : SET_ALL_PROJECTS,
    payload : projects
})

export const setSelectedProject = (project : ProjectDataType ) => ({
    type : SET_PROJECT,
    payload : project
})