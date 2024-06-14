export const SET_TASKS = 'SET_TASKS';


export type TaskData = {
    taskid: number,
    taskname: string,
    description: string,
    dateCreated: string,
    status: string
  }

  export type SetTaskAction = {
    type : typeof SET_TASKS,
    payload : TaskData[]

  }

export const setTaskData = ( tasks : TaskData[])  => ({
    type : SET_TASKS,
    payload : tasks
});