// USER

import { Comment, Post } from "./types";

export const USER_ID = "userID";
export const USER_NAME = "userName";
export const USER_IMAGE = "userImage";

// COMMENTS

export const COMMENT_ID = "commentID";
export const USER_COMMENT = "userComment";
export const DATE = "date";
export const COMMENT_REPLIES = "commentReplies";
export const VOTES = "votes";

export const COMMENT : Comment = {
    commentID: "",
    userID: "",
    userComment: "",
    date: "",
    commentReplies: [],
    votes: 0
}


// POST

export const POST_ID = "postID";
export const POST_IMAGE_URL = "postImageURL";
export const POST_COMMENTS = "comments";
export const POST_TEXT = "postText";
export const POST_VOTES = "postVotes";

export const POST:Post = {
    postID: "",
    userID: "",
    postImageURL: "",
    comments: [],
    postText: "",
    postVotes: 0
};


// REDUX

export const ADD_POST = "ADD_POST";
export const ADD_COMMENT = "ADD_COMMENT"
export const ADD_REPLY = "ADD_REPLY";
export const UPDATE_CURRENT_POST_ID = "UPDATE_CURRENT_POST_ID"
export const INCREMENT_VOTES = "INCREMENT_VOTES";
export const DECREMENT_VOTES = "DECREMENT_VOTES";
export const INCREMENT_POST_VOTES = "INCREMENT_POST_VOTES";
export const DECREMENT_POST_VOTES = "DECREMENT_POST_VOTES";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";

// MISC

export const CURR_POST_ID = "currPostID";
export const POSTS = "posts";
export const USERS = "users";
export const CURRENT_USER = "currentUser"
export const MONTHS_ARRAY = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];