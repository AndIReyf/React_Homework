export type ThemeStateType = {
    darkTheme: boolean
}
type ActionType = DarkThemeType;
type DarkThemeType = {
    type: 'DARK-THEME'
    isDarkTheme: boolean
}

const initState = {
    darkTheme: false
}

export const themeReducer = (state: ThemeStateType = initState, action: ActionType): ThemeStateType => {

    switch (action.type) {
        case "DARK-THEME": {
            return {...state, darkTheme: action.isDarkTheme}
        }
        default: return state;
    }
}

export const darkModeAC = (isDarkTheme: boolean): DarkThemeType => ({type: 'DARK-THEME', isDarkTheme})