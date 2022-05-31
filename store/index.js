import {combineReducers} from "redux";
import {HYDRATE} from "next-redux-wrapper";
import themeReducer from "./reducer/themeReducer";
import headerReducer from "./reducer/headerReducer";

const rootReducer = ( state , action ) => {
    switch (action.type) {
        case HYDRATE :
            return action.payload;

        default :
            return combineReducers({
                themeReducer,
                headerReducer
            })(state, action);
    }
};

export default rootReducer;
