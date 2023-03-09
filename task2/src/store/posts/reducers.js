import { COMMENT_ID, POST_COMMENTS, POST_ID, ADD_COMMENT, ADD_POST, ADD_REPLY, INCREMENT_VOTES, VOTES, DECREMENT_VOTES, COMMENT, COMMENT_REPLIES, DELETE_COMMENT, EDIT_COMMENT, USER_COMMENT } from "../../constants";
import postsData from "../../data/postsData.json"
import produce from "immer";
import { createComment, createPost, findCommentAndReturn } from "../../helper";

export const postsReducer = produce((state = postsData, action) => {

    const findComment = (id) => {
        let post = state.find((post) => post[POST_ID] == action.payload[POST_ID]);
        let comments = post[POST_COMMENTS];
        let comment = findCommentAndReturn(id, comments);
        return comment;
    }

    if(action.type == ADD_POST){
        state.push(createPost(action.payload))
    }

    if(action.type == ADD_COMMENT){
        let newComment = createComment(action.payload.comment);
        let post = state.find((post) => post[POST_ID] == action.payload[POST_ID]);
        post[POST_COMMENTS].push(newComment);
    }

    if(action.type == ADD_REPLY){
        let reply = createComment(action.payload.reply);
        let comment = findComment(action.payload[COMMENT_ID]);
        comment[COMMENT_REPLIES].push(reply);
    }

    if(action.type == INCREMENT_VOTES){
        let comment = findComment(action.payload[COMMENT_ID]);
        comment[VOTES]++;
    }

    if(action.type == DECREMENT_VOTES){
        let comment = findComment(action.payload[COMMENT_ID]);
        comment[VOTES]--;
    }

    if(action.type == DELETE_COMMENT){
        if(action.payload.parentCommentId == "root"){
            let post = state.find((post) => post[POST_ID] == action.payload[POST_ID]);
            let comments = post[POST_COMMENTS];
            let newComments = [];
            for(let i=0;i<comments.length;i++){
                if(comments[i][COMMENT_ID] != action.payload[COMMENT_ID]){
                    newComments.push(comments[i])
                }
            }
            post[POST_COMMENTS] = newComments;
        }
        else{
            let comment = findComment(action.payload.parentCommentId);
            let commentReplies = comment[COMMENT_REPLIES];
            let newCommentReplies = [];
            for(let i=0;i<commentReplies.length;i++){
                if(commentReplies[i][COMMENT_ID] != action.payload[COMMENT_ID]){
                    newCommentReplies.push(commentReplies[i])
                }
            }
            comment[COMMENT_REPLIES] = newCommentReplies;
        }
    }

    if(action.type == EDIT_COMMENT){
        let comment = findComment(action.payload[COMMENT_ID]);
        comment[USER_COMMENT] = action.payload[USER_COMMENT];
    }

    return state;
}, postsData)
