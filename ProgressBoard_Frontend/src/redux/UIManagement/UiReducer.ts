import { TASK_DRAWER , TaskDrawerAction } from "./UiActions";



export type UIState = {
    taskDrawerOpen : boolean
};


const initialState : UIState = {
    taskDrawerOpen : false
}

type UIManagementAction = TaskDrawerAction;

export const UiReducer = (state = initialState , action : UIManagementAction) : UIState => {
    switch(action.type){
        case TASK_DRAWER:
            return{
                ...state,
                taskDrawerOpen : action.payload
            };
        default:
            return state;
    }
}