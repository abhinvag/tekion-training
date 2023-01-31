import { ID, POST_ID, ADD_POST, ADD_COMMENT, ADD_REPLY, UPDATE_CURRENT_POST_ID } from "./components/constants";

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
            newComment: comment
        }
    }
}

export const addReply = (postId, commentId, reply) => {
    return {
        type: ADD_REPLY,
        payload: {
            [POST_ID]: postId,
            [ID]: commentId,
            reply: reply
        }
    }
}

export const updateCurrPostID = (postId) => {
    return{
        type: UPDATE_CURRENT_POST_ID,
        payload: postId
    }
}
