import { connect, ConnectedProps } from "react-redux"
import AddPost from "../components/AddPost"
import { CURRENT_USER, USERS } from "../constants";
import { AppDispatch, RootState } from "../store";
import { addPost } from "../store/posts/actions"
import { Post } from "../types";

const mapStateToProps = (state:RootState) => {
    const currentUser = state[CURRENT_USER];
    return {
        currentUser
    }
}

const mapDispatchToProps = (dispatch:AppDispatch) => {
    return {
        addPost: (post:Post) => {dispatch(addPost(post))}
    }
}

export const connector = connect(mapStateToProps, mapDispatchToProps);

export type AddPostContainerReduxProps = ConnectedProps<typeof connector>

export const AddPostContainer = connector(AddPost);