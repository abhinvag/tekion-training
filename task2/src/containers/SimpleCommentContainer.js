import { connect } from "react-redux"
import SimpleComment from "../components/SimpleComment"
import { CURR_POST_ID, USERS, USER_ID } from "../constants";
import { decrementVotes, editComment, incrementVotes } from "../store/posts/actions"

const mapStateToProps = (state, props) => {
    const currPostID = state[CURR_POST_ID];
    const users = state[USERS];
    const comment = props.comment;
    const userID = comment[USER_ID];
    const user = users[userID];
    return {
        currPostID,
        user
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