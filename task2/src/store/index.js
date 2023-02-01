import { postsReducer } from "./posts/reducers";
import { currPostReducer } from "./curr-post/reducers";
import { combineReducers } from "redux";
import { CURR_POST_ID, POSTS } from "../constants";

export const rootReducer = combineReducers({
    [POSTS]: postsReducer,
    [CURR_POST_ID]: currPostReducer
})

