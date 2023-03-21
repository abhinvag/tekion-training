import { connect } from "react-redux";
import Post from "../components/Post";
import { getPostIdFromURL } from "../helper";
import { selectPost } from "../store/posts/selector";
import { selectUserFromPost } from "../store/users/selector";


const mapStateToProps = (state) => {
    const postId = getPostIdFromURL();
    const post = selectPost(state, postId);
    const user = selectUserFromPost(state, postId);
    return {
        post,
        user
    }
}

export const PostContainer = connect(mapStateToProps)(Post);