
// COMMENTS

export const COMMENT_ID = "commentID";
export const USER_NAME = "userName";
export const USER_IMAGE = "userImage";
export const USER_COMMENT = "userComment";
export const DATE = "date";
export const COMMENT_REPLIES = "commentReplies";
export const VOTES = "votes";

export const COMMENT = {}
COMMENT[COMMENT_ID] = "";
COMMENT[USER_NAME] = "";
COMMENT[USER_IMAGE] = "";
COMMENT[USER_COMMENT] = "";
COMMENT[DATE] = "";
COMMENT[COMMENT_REPLIES] = []

// POST

export const POST_ID = "postID";
export const POST_IMAGE_URL = "postImageURL";
export const POST_BY = "postBy";
export const POST_COMMENTS = "comments";

export const POST = {};
POST[POST_ID] = "";
POST[POST_IMAGE_URL] = "";
POST[POST_BY] = "";
POST[POST_COMMENTS] = [];

// ACTIONS

export const ADD_POST = "ADD_POST";
export const ADD_COMMENT = "ADD_COMMENT"
export const ADD_REPLY = "ADD_REPLY";
export const UPDATE_CURRENT_POST_ID = "UPDATE_CURRENT_POST_ID"
export const INCREMENT_VOTES = "INCREMENT_VOTES";
export const DECREMENT_VOTES = "DECREMENT_VOTES";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";

// MISC

export const CURR_POST_ID = "currPostID";
export const POSTS = "posts";
export const MONTHS_ARRAY = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];