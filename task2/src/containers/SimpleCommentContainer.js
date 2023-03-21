import { connect } from "react-redux"
import SimpleComment from "../components/SimpleComment"
import { decrementVotes, editComment, incrementVotes } from "../store/posts/actions"
import { selectUserFromComment } from "../store/users/selector";

const mapStateToProps = (state, props) => {
    const user = selectUserFromComment(state, props);
    return {
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