import { postsReducer } from "./posts/reducers";
import {userReducer} from './users/reducer'
import { combineReducers } from "redux";
import { CURRENT_USER, POSTS, USERS } from "../constants";
import { currentUserReducer } from "./currentUser/reducer";

export const rootReducer = combineReducers({
    [POSTS]: postsReducer,
    [USERS]: userReducer,
    [CURRENT_USER]: currentUserReducer
})

