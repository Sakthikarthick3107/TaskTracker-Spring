import { SET_TASKS, SetTaskAction , TaskData } from "./taskAction";

export type TaskStatusData = {
    [status : string] : TaskData[]
}

export type TaskState = {
    tasks : '{}' | TaskStatusData
}

const initialState : TaskState = {
    tasks : {}
}

export type TaskAction = SetTaskAction;


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
        default:
            return state;
    }
}


