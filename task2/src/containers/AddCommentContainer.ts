import { connect, ConnectedProps, ConnectProps } from "react-redux";
import AddComment from "../components/AddComment";
import { CURRENT_USER, USERS } from "../constants";
import { AppDispatch, RootState } from "../store";
import { addComment, addReply } from "../store/posts/actions";
import { Comment } from "../types";

const mapStateToProps = (state:RootState) => {
    const currentUser = state[CURRENT_USER];
    return {
        currentUser
    }
}

const mapDispatchToProps = (dispatch:AppDispatch) => {
    return {
        addComment: (currPostID:string, commentState:Comment) => {dispatch(addComment(currPostID, commentState))},
        addReply: (currPostID:string, commentID:string, commentState:Comment) => {dispatch(addReply(currPostID, commentID, commentState))}
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export type AddCommentContainerReduxProps = ConnectedProps<typeof connector>

export const AddCommentContainer = connector(AddComment);