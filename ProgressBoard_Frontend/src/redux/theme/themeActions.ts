export const SET_THEME = 'SET_THEME';
export const SET_PRIMARY = 'SET_PRIMARY';

export type ToggleThemeAction = {
    type : typeof SET_THEME
}

export type SetPrimaryAction = {
    type : typeof SET_PRIMARY,
    payload : string
}

export const toggleTheme = () => ({
    type : SET_THEME
})

export const setPrimaryTheme = (primary : string) => ({
    type : SET_PRIMARY,
    payload : primary
})