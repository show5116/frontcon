import {applyMiddleware, compose, createStore} from "redux";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./index";
import {composeWithDevTools} from "redux-devtools-extension";

const isProduction = process.env.NODE_ENV === "production";

const makeStore = (initialState , options) => {
    const middlewares = [];
    const enhancer = isProduction
        ? compose(applyMiddleware(...middlewares))
        : composeWithDevTools(applyMiddleware(...middlewares));

    const store = createStore(rootReducer, initialState, enhancer);

    return store;
}

const wrapper = createWrapper(makeStore , { debug: !isProduction})

export default wrapper;
