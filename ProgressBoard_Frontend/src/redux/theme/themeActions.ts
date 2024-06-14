export const SET_THEME = 'SET_THEME';


export type ToggleThemeAction = {
    type : typeof SET_THEME
}

export const toggleTheme = () => ({
    type : SET_THEME
})