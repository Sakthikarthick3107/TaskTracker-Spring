export const TASK_DRAWER = 'TASK_DRAWER';


export type TaskDrawerAction = {
    type : typeof TASK_DRAWER,
    payload : boolean
};


export const handleTaskDrawer = (isOpen : boolean) => ({
    type : TASK_DRAWER,
    payload : isOpen
})