export const SET_DARK_THEME = 'SET_DARK_THEME';

export const SET_LIGHT_THEME = 'SET_LIGHT_THEME';

export const setDarkTheme = () => {
    return {
        type : SET_DARK_THEME,
    };
};

export const setLightTheme = () => {
    return {
        type : SET_LIGHT_THEME,
    };
}
