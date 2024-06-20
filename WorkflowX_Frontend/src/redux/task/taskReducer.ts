import { SET_TASKS,SET_SELECTED_TASK , SetTaskAction , SetSelectedTaskAction , TaskData } from "./taskAction";

export type TaskStatusData = {
    [status : string] : TaskData[],
}

export type TaskState = {
    tasks : '{}' | TaskStatusData,
    selectedTask : null | TaskData
}

const initialState : TaskState = {
    tasks : {},
    selectedTask : null
}

export type TaskAction = SetTaskAction | SetSelectedTaskAction;


export const taskReducer = (state = initialState , action : TaskAction) : TaskState =>{
    let taskByCategory ;
    switch(action.type){
        case SET_TASKS:
            taskByCategory = action.payload.reduce((acc : TaskStatusData ,cur) => {
                const status = cur.status;
                if(!acc[status]){
                    acc[status]  = []
                }
                acc[status].push(cur);
                return acc;
            },{} as TaskStatusData)
            return{
                ...state,
                tasks : taskByCategory
            }
        
        case SET_SELECTED_TASK:
            return{
                ...state,
                selectedTask : action.payload
            }
        default:
            return state;
    }
}


