//import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./store/index";

//const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

//export const store = createStore(reducer, enhancer);

export const store = configureStore({
    reducer: rootReducer
})