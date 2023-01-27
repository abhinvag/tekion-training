const ID = "id";
const USER_NAME = "userName";
const USER_IMAGE = "userImage";
const USER_COMMENT = "userComment";
const DATE = "date";
const REPLIES = "replies";

const COMMENT = {}
COMMENT[ID] = "";
COMMENT[USER_NAME] = "";
COMMENT[USER_IMAGE] = "";
COMMENT[USER_COMMENT] = "";
COMMENT[DATE] = "";
COMMENT[REPLIES] = []

const POST_ID = "postID";
const POST_IMAGE_URL = "postImageURL";
const POST_BY = "postBy";
const POST_COMMENTS = "comments";

const POST = {};
POST[POST_ID] = "";
POST[POST_IMAGE_URL] = "";
POST[POST_BY] = "";
POST[POST_COMMENTS] = [];

const MONTHS_ARRAY = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];

export {COMMENT, ID, USER_NAME, USER_IMAGE, USER_COMMENT, DATE, REPLIES, MONTHS_ARRAY, POST, POST_ID, POST_IMAGE_URL, POST_BY, POST_COMMENTS};