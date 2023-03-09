import { postsReducer } from "./posts/reducers";
import { currPostReducer } from "./curr-post/reducers";
import {userReducer} from './users/reducer'
import { combineReducers } from "redux";
import { CURR_POST_ID, POSTS, USERS } from "../constants";

export const rootReducer = combineReducers({
    [POSTS]: postsReducer,
    [CURR_POST_ID]: currPostReducer,
    [USERS]: userReducer
})

