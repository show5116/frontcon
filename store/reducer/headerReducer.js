import * as A from '../action/headerAction';

const initialState = {
    headState : "default",
};

const headerReducer = (state = initialState ,action) => {
    switch (action.type) {
        case A.SET_HEADER_MAIN :
            return {
                headState: "main",
            };
        case A.SET_HEADER_GUIDE :
            return {
                headState: "guide",
            };
        case A.SET_HEADER_DEFAULT :
            return {
                headState: "default",
            };
        default :
            return state;
    }
};

export default headerReducer;
