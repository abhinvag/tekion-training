import { connect } from "react-redux";
import DeleteModal from "../components/DeleteModal";
import { deleteComment } from "../store/posts/actions";

const mapDispatchToProps = (dispatch) => {
    return {
        deleteComment: (postId, parentCommentId, commentId) => {dispatch(deleteComment(postId, parentCommentId, commentId))}
    }
}

export const DeleteModalContainer = connect(null, mapDispatchToProps)(DeleteModal)