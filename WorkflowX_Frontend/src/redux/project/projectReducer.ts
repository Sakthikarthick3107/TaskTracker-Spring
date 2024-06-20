import { SET_ALL_PROJECTS , SET_PROJECT , ProjectDataType , SetAllProjectsAction , SetSelectedProjectAction } from "./projectAction";

export type ProjectState = {
    projects : [] | ProjectDataType[],
    project : null | ProjectDataType
}

export const initialState : ProjectState = {
    projects : [],
    project : null
}

type ProjectAction = SetAllProjectsAction | SetSelectedProjectAction;


export const projectReducer = (state = initialState , action : ProjectAction) : ProjectState => {
    switch(action.type){
        case SET_ALL_PROJECTS:
            return{
                ...state,
                projects : action.payload
            }
        case SET_PROJECT:
            return{
                ...state,
                project : action.payload
            }
        default :
            return state
    }
}