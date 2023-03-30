import { connect, ConnectedProps } from "react-redux"
import SimpleComment from "../components/SimpleComment"
import { CURRENT_USER, USER_ID } from "../constants";
import { AppDispatch, RootState } from "../store";
import { decrementVotes, editComment, incrementVotes } from "../store/posts/actions"
import { selectUserFromComment } from "../store/users/selector";
import { Comment } from "../types";

const mapStateToProps = (state:RootState, props:any) => {
    const user = selectUserFromComment(state, props);
    const currUserID = state[CURRENT_USER][USER_ID]
    return {
        user,
        currUserID
    }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        incrementVotes : (postID:string, commentID:string) => {dispatch(incrementVotes(postID, commentID))},
        decrementVotes: (postID:string, commentID:string) => {dispatch(decrementVotes(postID, commentID))},
        editCommentRedux: (postID:string, commentID:string, comment:string) => {dispatch(editComment(postID, commentID, comment))}
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export type SimpleCommentContainerPropsFromRedux = ConnectedProps<typeof connector>

export const SimpleCommentContainer = connector(SimpleComment);

