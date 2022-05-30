import * as A from '../action/themeAction';
import {darkTheme, lightTheme} from "../../styles/theme";

const initialState = {
    theme : lightTheme,
};

const themeReducer = (state = initialState ,action) => {
    switch (action.type) {
        case A.SET_DARK_THEME :
            return {
                theme: darkTheme,
            };
        case A.SET_LIGHT_THEME :
            return {
                theme: lightTheme,
            };
        default :
            return state;
    }
};

export default themeReducer;
