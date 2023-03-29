import { connect } from "react-redux"
import AddPost from "../components/AddPost"
import { CURRENT_USER, USERS } from "../constants";
import { addPost } from "../store/posts/actions"

const mapStateToProps = (state) => {
    const currentUser = state[CURRENT_USER];
    return {
        currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => {dispatch(addPost(post))}
    }
}

export const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost);