import { connect } from "react-redux";
import Post from "../components/Post";
import { POSTS, POST_ID, USERS, USER_ID } from "../constants";
import { useParams } from "react-router-dom";


const MapStateToProps = (state) => {
    const {id} = useParams();
    const posts = state[POSTS];
    const post = posts.find((post) => post[POST_ID] === id);
    const users = state[USERS];
    let user;
    if(post != undefined) user = users[post[USER_ID]];
    return {
        post,
        user
    }
}

export const PostContainer = connect(MapStateToProps)(Post);