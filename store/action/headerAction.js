export const SET_HEADER_MAIN = 'SET_HEADER_MAIN';

export const SET_HEADER_GUIDE = 'SET_HEADER_GUIDE';

export const SET_HEADER_LOGIN = 'SET_HEADER_LOGIN';

export const SET_HEADER_DEFAULT = 'SET_HEADER_DEFAULT';

export const setHeaderMain = () => {
    return {
        type : SET_HEADER_MAIN,
    };
};

export const setHeaderGuide = () => {
    return {
        type : SET_HEADER_GUIDE,
    };
};

export const setHeaderLogin = () => {
    return {
        type : SET_HEADER_LOGIN,
    };
}

export const setHeaderDefault = () => {
    return {
        type : SET_HEADER_DEFAULT,
    };
};
