import { connect } from "react-redux";
import Post from "../components/Post";


const mapStateToProps = (state) => {
    const posts = state.posts;
    const currPostID = state.currPostID;
    return {
        posts,
        currPostID
    }
}

export const PostContainer = connect(mapStateToProps)(Post);