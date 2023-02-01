import { COMMENT_ID, POST_COMMENTS, POST_ID, ADD_COMMENT, ADD_POST, ADD_REPLY } from "../../constants";
import data from "../../data.json"
import produce from "immer";
import { createComment, createPost, findCommentAndPushReply } from "../../helper";

export const postsReducer = produce((state = data, action) => {

    if(action.type == ADD_POST){
        state.push(createPost(action.payload))
    }

    if(action.type == ADD_COMMENT){
        let newComment = createComment(action.payload.comment);
        let post = state.find((post) => post[POST_ID] == action.payload[POST_ID]);
        post[POST_COMMENTS].push(newComment);
    }

    if(action.type == ADD_REPLY){
        let post = state.find((post) => post[POST_ID] == action.payload[POST_ID]);
        let comments = post[POST_COMMENTS];
        let reply = createComment(action.payload.reply);
        let newComments = findCommentAndPushReply(action.payload[COMMENT_ID], reply, comments);
        post[POST_COMMENTS] = newComments
    }

    return state;
}, data)
