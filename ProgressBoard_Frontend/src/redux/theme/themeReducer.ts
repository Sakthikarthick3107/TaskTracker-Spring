import { SET_THEME, ToggleThemeAction } from "./themeActions";

export type ThemeState = {
    isDark : boolean
}

export type ThemeAction = ToggleThemeAction ;

const initialState : ThemeState = {
    isDark : localStorage.getItem('isDark') === 'true'
}

let newIsDark; 

export const themeReducer = (state = initialState , action : ThemeAction) : ThemeState =>{
    switch(action.type){
        case SET_THEME:
            newIsDark = !state.isDark;
            localStorage.setItem('isDark' , newIsDark.toString());
            return{
                ...state,
                isDark : !state.isDark
            }
        default:
            return state
    }
}