import { NotificationStatusType, NotificationType } from "./UiReducer";

export const TASK_DRAWER = 'TASK_DRAWER';
export const NOTIFICATION_POPUP = 'NOTIFICATION_POPUP';
export const OPTIONS_DRAWER = 'OPTIONS_DRAWER';

export type TaskDrawerAction = {
    type : typeof TASK_DRAWER,
    payload : boolean
};

export type NotificationAction = {
    type :  typeof NOTIFICATION_POPUP,
    payload : NotificationType
};


export type OptionsDrawerAction = {
    type : typeof OPTIONS_DRAWER
}


export const handleTaskDrawer = (isOpen : boolean) => ({
    type : TASK_DRAWER,
    payload : isOpen
})

export const handleNotification = (message : string , status : NotificationStatusType) => ({
    type : NOTIFICATION_POPUP,
    payload : { message , status }
});



export const handleOptionsDrawer = () => ({
    type : OPTIONS_DRAWER
})