import { connect } from "react-redux"
import SimpleComment from "../components/SimpleComment"
import { decrementVotes, editComment, incrementVotes } from "../store/posts/actions"

const mapStateToProps = (state) => {
    const currPostID = state.currPostID;
    return {
        currPostID
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