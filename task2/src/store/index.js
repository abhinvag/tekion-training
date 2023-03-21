import { postsReducer } from "./posts/reducers";
import {userReducer} from './users/reducer'
import { combineReducers } from "redux";
import { POSTS, USERS } from "../constants";

export const rootReducer = combineReducers({
    [POSTS]: postsReducer,
    [USERS]: userReducer
})

