import { COMMENT_ID, POST_COMMENTS, POST_ID, ADD_COMMENT, ADD_POST, ADD_REPLY, INCREMENT_VOTES, VOTES, DECREMENT_VOTES, COMMENT, COMMENT_REPLIES, DELETE_COMMENT, EDIT_COMMENT, USER_COMMENT, INCREMENT_POST_VOTES, POST_VOTES, DECREMENT_POST_VOTES } from "../../constants";
import postsData from "../../data/postsData.json"
import produce from "immer";
import { createComment, createPost, findCommentAndReturn } from "../../helper";
import { Comment } from "../../types";

export const postsReducer = produce((state = postsData, action) => {

    const findComment = (id:string) : Comment | null => {
        let post = state.find((post) => post[POST_ID] == action.payload[POST_ID]);
        let comments = post?.[POST_COMMENTS];
        let comment = findCommentAndReturn(id, comments);
        return comment;
    }

    if(action.type == ADD_POST){
        state.push(createPost(action.payload))
    }

    if(action.type == ADD_COMMENT){
        let newComment = createComment(action.payload.comment);
        let post = state.find((post) => post[POST_ID] == action.payload[POST_ID]);
        post?.[POST_COMMENTS].push(newComment);
    }

    if(action.type == ADD_REPLY){
        let reply = createComment(action.payload.reply);
        let comment = findComment(action.payload[COMMENT_ID]);
        if(comment != null) comment[COMMENT_REPLIES].push(reply);
    }

    if(action.type == INCREMENT_VOTES){
        let comment = findComment(action.payload[COMMENT_ID]);
        if(comment != null) comment[VOTES]++;
    }

    if(action.type == DECREMENT_VOTES){
        let comment = findComment(action.payload[COMMENT_ID]);
        if(comment != null) comment[VOTES]--;
    }

    if(action.type == INCREMENT_POST_VOTES){
        let post = state.find((post) => post[POST_ID] == action.payload[POST_ID]);
        if(post != undefined) post[POST_VOTES]++;
    }

    if(action.type == DECREMENT_POST_VOTES){
        let post = state.find((post) => post[POST_ID] == action.payload[POST_ID]);
        if(post != undefined) post[POST_VOTES]--;
    }

    if(action.type == DELETE_COMMENT){
        if(action.payload.parentCommentId == "root"){
            let post = state.find((post) => post[POST_ID] == action.payload[POST_ID]);
            let comments = post?.[POST_COMMENTS];
            let newComments = [];
            if(comments != undefined){
                for(let i=0;i<comments.length;i++){
                    if(comments[i][COMMENT_ID] != action.payload[COMMENT_ID]){
                        newComments.push(comments[i])
                    }
                }
            }
            if(post != undefined) post[POST_COMMENTS] = newComments;
        }
        else{
            let comment = findComment(action.payload.parentCommentId);
            let commentReplies = comment?.[COMMENT_REPLIES];
            let newCommentReplies = [];
            if(commentReplies != undefined){
                for(let i=0;i<commentReplies.length;i++){
                    if(commentReplies[i][COMMENT_ID] != action.payload[COMMENT_ID]){
                        newCommentReplies.push(commentReplies[i])
                    }
                }
            }
            if(comment != null) comment[COMMENT_REPLIES] = newCommentReplies;
        }
    }

    if(action.type == EDIT_COMMENT){
        let comment = findComment(action.payload[COMMENT_ID]);
        if(comment != null) comment[USER_COMMENT] = action.payload[USER_COMMENT];
    }

    return state;
}, postsData)
