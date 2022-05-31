export const SET_HEADER_MAIN = 'SET_HEADER_MAIN';

export const SET_HEADER_GUIDE = 'SET_HEADER_GUIDE';

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

export const setHeaderDefault = () => {
    return {
        type : SET_HEADER_DEFAULT,
    };
};
