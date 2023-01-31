import { ID, POST_COMMENTS, POST_ID, ADD_COMMENT, ADD_POST, ADD_REPLY, UPDATE_CURRENT_POST_ID, CURR_POST_ID, POSTS } from "./components/constants";
import { findCommentAndPushReply } from "./components/helper";
import data from "./data.json"

const initialState = {
    [POSTS]: data,
    [CURR_POST_ID]: "id"
}

export const reducer = (state = initialState, action) => {

    if(action.type == ADD_POST){
        return {
            ...state, 
            [POSTS]: {
                ...state[POSTS],
                [action.payload[POST_ID]]:action.payload
            }
        }
    }

    if(action.type == ADD_COMMENT){
        return {
            ...state,
            [POSTS]: {
                ...state[POSTS],
                [action.payload[POST_ID]] : {
                    ...state[POSTS][action.payload[POST_ID]],
                    [POST_COMMENTS]: [
                        ...state[POSTS][action.payload[POST_ID]][POST_COMMENTS],
                        action.payload.newComment
                    ]
                }
            }
        }
    }

    if(action.type == ADD_REPLY){
        let comments = JSON.parse(JSON.stringify(state[POSTS][action.payload[POST_ID]][POST_COMMENTS]));
        findCommentAndPushReply(action.payload[ID], action.payload.reply, comments);
        return {
            ...state,
            [POSTS]: {
                ...state[POSTS],
                [action.payload[POST_ID]] : {
                    ...state[POSTS][action.payload[POST_ID]],
                    [POST_COMMENTS]: comments
                }
            }
        }
    }

    if(action.type == UPDATE_CURRENT_POST_ID){
        return {
            ...state,
            [CURR_POST_ID]: action.payload
        }
    }

    return state;
}
