import { NotificationStatusType, NotificationType } from "./UiReducer";

export const TASK_DRAWER = 'TASK_DRAWER';
export const NOTIFICATION_POPUP = 'NOTIFICATION_POPUP';

export type TaskDrawerAction = {
    type : typeof TASK_DRAWER,
    payload : boolean
};

export type NotificationAction = {
    type :  typeof NOTIFICATION_POPUP,
    payload : NotificationType
}


export const handleTaskDrawer = (isOpen : boolean) => ({
    type : TASK_DRAWER,
    payload : isOpen
})

export const handleNotification = (message : string , status : NotificationStatusType) => ({
    type : NOTIFICATION_POPUP,
    payload : { message , status }
})