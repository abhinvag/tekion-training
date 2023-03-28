// USER

export const USER_ID = "userID";
export const USER_NAME = "userName";
export const USER_IMAGE = "userImage";

// COMMENTS

export const COMMENT_ID = "commentID";
export const USER_COMMENT = "userComment";
export const DATE = "date";
export const COMMENT_REPLIES = "commentReplies";
export const VOTES = "votes";

export const COMMENT = {}
COMMENT[COMMENT_ID] = "";
COMMENT[USER_ID] = "";
COMMENT[USER_COMMENT] = "";
COMMENT[DATE] = "";
COMMENT[COMMENT_REPLIES] = []

// POST

export const POST_ID = "postID";
export const POST_IMAGE_URL = "postImageURL";
export const POST_COMMENTS = "comments";
export const POST_TEXT = "postText";
export const POST_VOTES = "postVotes";

export const POST = {};
POST[POST_ID] = "";
POST[POST_IMAGE_URL] = "";
POST[USER_ID] = "";
POST[POST_COMMENTS] = [];
POST[POST_TEXT] = "";
POST[POST_VOTES] = 0;

// ACTIONS

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
export const MONTHS_ARRAY = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];