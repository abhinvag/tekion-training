import { connect, ConnectedProps } from "react-redux";
import Post from "../components/Post";
import { getPostIdFromURL } from "../helper";
import { RootState } from "../store";
import { selectPost } from "../store/posts/selector";
import { selectUserFromPost } from "../store/users/selector";


const mapStateToProps = (state:RootState) => {
    const postId = getPostIdFromURL();
    const post = selectPost(state, postId);
    const user = selectUserFromPost(state, postId);
    return {
        post,
        user
    }
}

const connecter = connect(mapStateToProps);

export type PostContainerReduxProps = ConnectedProps<typeof connecter>;

export const PostContainer = connecter(Post);