import { TaskData } from "../task/taskAction";
import { NOTIFICATION_POPUP, NotificationAction, OPTIONS_DRAWER, OptionsDrawerAction, TASK_DRAWER , TaskDrawerAction } from "./UiActions";

export type NotificationStatusType = '' | 'success' | 'error' | 'warning'

export type NotificationType = {
    message : string,
    status : NotificationStatusType
}


export type UIState = {
    taskDrawerOpen : boolean,
    notification : NotificationType,
    taskDetail :  TaskData | null,
    areOptionsOpen : boolean
};


const initialState : UIState = {
    taskDrawerOpen : false,
    notification : {
        message : '',
        status : ''
    },
    taskDetail : null,
    areOptionsOpen : localStorage.getItem('drawer') === 'true' 
}

type UIManagementAction = TaskDrawerAction | NotificationAction  | OptionsDrawerAction ;

export const UiReducer = (state = initialState , action : UIManagementAction) : UIState => {
    let drawerOpen
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

        case OPTIONS_DRAWER:
            drawerOpen = !state.areOptionsOpen;
            localStorage.setItem('drawer' , drawerOpen.toString() )
            return{
                ...state,
                areOptionsOpen : !state.areOptionsOpen
            }

        default:
            return state;
    }
}