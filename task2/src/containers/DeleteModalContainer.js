import { connect } from "react-redux";
import DeleteModal from "../components/DeleteModal";
import { CURR_POST_ID } from "../constants"
import { deleteComment } from "../store/posts/actions";

const mapStateToProps = (state) => {
    const currPostID = state.currPostID;
    return {
        currPostID
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteComment: (postId, parentCommentId, commentId) => {dispatch(deleteComment(postId, parentCommentId, commentId))}
    }
}

export const DeleteModalContainer = connect(mapStateToProps, mapDispatchToProps)(DeleteModal)