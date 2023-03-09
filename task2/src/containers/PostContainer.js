import { connect } from "react-redux";
import Post from "../components/Post";
import { CURR_POST_ID, POSTS, POST_ID, USERS, USER_ID } from "../constants";


const mapStateToProps = (state) => {
    const posts = state[POSTS];
    const currPostID = state[CURR_POST_ID];
    const post = posts.find((post) => post[POST_ID] === currPostID);
    const users = state[USERS];
    const user = users[post[USER_ID]];
    return {
        post,
        user
    }
}

export const PostContainer = connect(mapStateToProps)(Post);