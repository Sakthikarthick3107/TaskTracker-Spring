import { SET_THEME ,
        SET_PRIMARY ,  
        ToggleThemeAction ,
        SetPrimaryAction
    } from "./themeActions";

export type ThemeState = {
    isDark : boolean,
    primary : string
}

export type ThemeAction = ToggleThemeAction | SetPrimaryAction ;

const initialState : ThemeState = {
    isDark : localStorage.getItem('isDark') === 'true',
    primary : localStorage.getItem('primary') || '#24689c'
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
        case SET_PRIMARY:
            localStorage.setItem('primary' ,action.payload);
            return{
                ...state,
                primary : action.payload
            }
        default:
            return state
    }
}