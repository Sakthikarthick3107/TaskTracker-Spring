import { TaskData } from "../task/taskAction";
import { NOTIFICATION_POPUP, NotificationAction, TASK_DETAIL, TASK_DRAWER , TaskDetailAction, TaskDrawerAction } from "./UiActions";

export type NotificationStatusType = '' | 'success' | 'error' | 'warning'

export type NotificationType = {
    message : string,
    status : NotificationStatusType
}


export type UIState = {
    taskDrawerOpen : boolean,
    notification : NotificationType,
    taskDetail :  TaskData | null
};


const initialState : UIState = {
    taskDrawerOpen : false,
    notification : {
        message : '',
        status : ''
    },
    taskDetail : null
}

type UIManagementAction = TaskDrawerAction | NotificationAction | TaskDetailAction ;

export const UiReducer = (state = initialState , action : UIManagementAction) : UIState => {
    switch(action.type){
        case TASK_DRAWER:
            return{
                ...state,
                taskDrawerOpen : action.payload
            };
        
        case NOTIFICATION_POPUP:
            return {
                ...state,
                notification : {
                    message : action.payload.message,
                    status : action.payload.status
                }
            };
        
        case TASK_DETAIL:
            return{
                ...state,
                taskDetail : action.payload
            };
        
        default:
            return state;
    }
}