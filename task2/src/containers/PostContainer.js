import { connect } from "react-redux";
import Post from "../components/Post";
import { selectPost } from "../store/posts/selector";
import { selectUserFromPost } from "../store/users/selector";


const mapStateToProps = (state) => {
    const post = selectPost(state);
    const user = selectUserFromPost(state);
    return {
        post,
        user
    }
}

export const PostContainer = connect(mapStateToProps)(Post);