import { NOTIFICATION_POPUP, NotificationAction, TASK_DRAWER , TaskDrawerAction } from "./UiActions";

export type NotificationStatusType = '' | 'success' | 'error' 

export type NotificationType = {
    message : string,
    status : NotificationStatusType
}


export type UIState = {
    taskDrawerOpen : boolean,
    notification : NotificationType
};


const initialState : UIState = {
    taskDrawerOpen : false,
    notification : {
        message : '',
        status : ''
    }
}

type UIManagementAction = TaskDrawerAction | NotificationAction ;

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
            }
        default:
            return state;
    }
}