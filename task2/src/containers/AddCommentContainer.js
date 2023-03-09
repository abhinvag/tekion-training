import { connect } from "react-redux";
import AddComment from "../components/AddComment";
import { CURR_POST_ID, USERS } from "../constants";
import { addComment, addReply } from "../store/posts/actions";

const mapStateToProps = (state) => {
    const currPostID = state[CURR_POST_ID];
    const users = state[USERS];
    return {
        currPostID,
        users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (currPostID, commentState) => {dispatch(addComment(currPostID, commentState))},
        addReply: (currPostID, commentID, commentState) => {dispatch(addReply(currPostID, commentID, commentState))}
    }
}

export const AddCommentContainer = connect(mapStateToProps, mapDispatchToProps)(AddComment);