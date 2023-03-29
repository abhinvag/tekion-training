import { connect } from "react-redux"
import SimpleComment from "../components/SimpleComment"
import { CURRENT_USER, USER_ID } from "../constants";
import { decrementVotes, editComment, incrementVotes } from "../store/posts/actions"
import { selectUserFromComment } from "../store/users/selector";

const mapStateToProps = (state, props) => {
    const user = selectUserFromComment(state, props);
    const currUserID = state[CURRENT_USER][USER_ID]
    return {
        user,
        currUserID
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementVotes : (postID, commentID) => {dispatch(incrementVotes(postID, commentID))},
        decrementVotes: (postID, commentID) => {dispatch(decrementVotes(postID, commentID))},
        editCommentRedux: (postID, commentID, comment) => {dispatch(editComment(postID, commentID, comment))}
    }
}

export const SimpleCommentContainer = connect(mapStateToProps, mapDispatchToProps)(SimpleComment)