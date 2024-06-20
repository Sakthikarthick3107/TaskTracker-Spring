export const SET_TASKS = 'SET_TASKS';
export const SET_SELECTED_TASK = 'SET_SELECTED_TASK';

export type TaskData = {
    taskid: number,
    taskname: string,
    description: string,
    startDate : string,
    endDate : string,
    priority : string
    status: string,
    project : string
  }

  export type SetTaskAction = {
    type : typeof SET_TASKS,
    payload : TaskData[]
  };

  export type SetSelectedTaskAction = {
    type : typeof SET_SELECTED_TASK,
    payload : TaskData
  }

export const setTaskData = ( tasks : TaskData[])  => ({
    type : SET_TASKS,
    payload : tasks
});

export const setSelectedTask = (task : TaskData) => ({
  type : SET_SELECTED_TASK,
  payload : task
})