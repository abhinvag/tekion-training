import { COMMENT_ID, POST_ID, ADD_POST, ADD_COMMENT, ADD_REPLY, INCREMENT_VOTES, DECREMENT_VOTES, DELETE_COMMENT, EDIT_COMMENT, USER_COMMENT, INCREMENT_POST_VOTES, DECREMENT_POST_VOTES } from "../../constants";
import { Comment, Post } from "../../types";

export const addPost = (post:Post) => {
    return {
        type: ADD_POST,
        payload: post
    }
}

export const addComment = (postId:string,comment:Comment) => {
    return {
        type: ADD_COMMENT,
        payload: {
            [POST_ID]: postId,
            comment
        }
    }
}

export const addReply = (postId:string, commentId:string, reply:Comment) => {
    return {
        type: ADD_REPLY,
        payload: {
            [POST_ID]: postId,
            [COMMENT_ID]: commentId,
            reply
        }
    }
}

export const incrementVotes = (postId:string, commentId:string) => {
    return {
        type: INCREMENT_VOTES,
        payload: {
            [POST_ID]: postId,
            [COMMENT_ID]: commentId
        }
    }
}

export const decrementVotes = (postId:string, commentId:string) => {
    return {
        type: DECREMENT_VOTES,
        payload: {
            [POST_ID]: postId,
            [COMMENT_ID]: commentId
        }
    }
}

export const incrementPostVotes = (postId:string) => {
    return {
        type: INCREMENT_POST_VOTES,
        payload: {
            [POST_ID]: postId,
        }
    }
}

export const decrementPostVotes = (postId:string) => {
    return {
        type: DECREMENT_POST_VOTES,
        payload: {
            [POST_ID]: postId,
        }
    }
}

export const deleteComment = (postId:string, parentCommentId:string, commentId:string) => {
    return {
        type: DELETE_COMMENT,
        payload: {
            [POST_ID]: postId,
            parentCommentId,
            [COMMENT_ID]: commentId
        }
    }
}

export const editComment = (postId:string, commentId:string, comment:string) => {
    return {
        type: EDIT_COMMENT,
        payload: {
            [POST_ID]: postId,
            [COMMENT_ID]: commentId,
            [USER_COMMENT]: comment 
        }
    }
}
