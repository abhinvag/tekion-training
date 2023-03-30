import { connect, ConnectedProps } from "react-redux";
import DeleteModal from "../components/DeleteModal";
import { AppDispatch } from "../store";
import { deleteComment } from "../store/posts/actions";

const mapDispatchToProps = (dispatch:AppDispatch) => {
    return {
        deleteComment: (postId:string, parentCommentId:string, commentId:string) => {dispatch(deleteComment(postId, parentCommentId, commentId))}
    }
}

const connector = connect(null, mapDispatchToProps);

export type DeleteModalContainerReduxProps = ConnectedProps<typeof connector>;

export const DeleteModalContainer = connector(DeleteModal)