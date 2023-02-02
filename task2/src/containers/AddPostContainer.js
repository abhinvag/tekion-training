import { connect } from "react-redux"
import AddPost from "../components/AddPost"
import { addPost } from "../store/posts/actions"

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (imageURL) => {dispatch(addPost(imageURL))}
    }
}

export const AddPostContainer = connect(null, mapDispatchToProps)(AddPost);