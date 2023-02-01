import { COMMENT_ID, POST_ID, ADD_POST, ADD_COMMENT, ADD_REPLY } from "../../constants";

export const addPost = (imageURL) => {
    return {
        type: ADD_POST,
        payload: {
            imageURL
        }
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
