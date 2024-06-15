import { TaskData } from "../task/taskAction";
import { NotificationStatusType, NotificationType } from "./UiReducer";

export const TASK_DRAWER = 'TASK_DRAWER';
export const NOTIFICATION_POPUP = 'NOTIFICATION_POPUP';
export const TASK_DETAIL = 'TASK_DETAIL';

export type TaskDrawerAction = {
    type : typeof TASK_DRAWER,
    payload : boolean
};

export type NotificationAction = {
    type :  typeof NOTIFICATION_POPUP,
    payload : NotificationType
};

export type TaskDetailAction = {
    type : typeof TASK_DETAIL,
    payload : TaskData | null
};


export const handleTaskDrawer = (isOpen : boolean) => ({
    type : TASK_DRAWER,
    payload : isOpen
})

export const handleNotification = (message : string , status : NotificationStatusType) => ({
    type : NOTIFICATION_POPUP,
    payload : { message , status }
});

export const setTaskData = (data : TaskData) => ({
    type : TASK_DETAIL,
    payload : data
});