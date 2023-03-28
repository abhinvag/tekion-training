import { COMMENT_ID, POST_ID, ADD_POST, ADD_COMMENT, ADD_REPLY, INCREMENT_VOTES, DECREMENT_VOTES, DELETE_COMMENT, EDIT_COMMENT, USER_COMMENT, INCREMENT_POST_VOTES, DECREMENT_POST_VOTES } from "../../constants";

export const addPost = (post) => {
    return {
        type: ADD_POST,
        payload: post
    }
}

export const addComment = (postId,comment) => {
    return {
        type: ADD_COMMENT,
        payload: {
            [POST_ID]: postId,
            comment
        }
    }
}

export const addReply = (postId, commentId, reply) => {
    return {
        type: ADD_REPLY,
        payload: {
            [POST_ID]: postId,
            [COMMENT_ID]: commentId,
            reply
        }
    }
}

export const incrementVotes = (postId, commentId) => {
    return {
        type: INCREMENT_VOTES,
        payload: {
            [POST_ID]: postId,
            [COMMENT_ID]: commentId
        }
    }
}

export const decrementVotes = (postId, commentId) => {
    return {
        type: DECREMENT_VOTES,
        payload: {
            [POST_ID]: postId,
            [COMMENT_ID]: commentId
        }
    }
}

export const incrementPostVotes = (postId) => {
    return {
        type: INCREMENT_POST_VOTES,
        payload: {
            [POST_ID]: postId,
        }
    }
}

export const decrementPostVotes = (postId) => {
    return {
        type: DECREMENT_POST_VOTES,
        payload: {
            [POST_ID]: postId,
        }
    }
}

export const deleteComment = (postId, parentCommentId, commentId) => {
    return {
        type: DELETE_COMMENT,
        payload: {
            [POST_ID]: postId,
            parentCommentId,
            [COMMENT_ID]: commentId
        }
    }
}

export const editComment = (postId, commentId, comment) => {
    return {
        type: EDIT_COMMENT,
        payload: {
            [POST_ID]: postId,
            [COMMENT_ID]: commentId,
            [USER_COMMENT]: comment 
        }
    }
}
