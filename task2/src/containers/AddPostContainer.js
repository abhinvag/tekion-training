import { connect } from "react-redux"
import AddPost from "../components/AddPost"
import { USERS } from "../constants";
import { addPost } from "../store/posts/actions"

const mapStateToProps = (state) => {
    const users = state[USERS];
    return {
        users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => {dispatch(addPost(post))}
    }
}

export const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost);