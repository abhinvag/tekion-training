import { connect } from "react-redux"
import PostDetails from "../components/PostDetails"
import { decrementPostVotes, incrementPostVotes } from "../store/posts/actions"

const mapDispatchToProps = (dispatch) => {
    return {
        incrementPostVotes : (postId) => dispatch(incrementPostVotes(postId)),
        decrementPostVotes : (postId) => dispatch(decrementPostVotes(postId))
    }
}

export const PostDetailsContainer = connect(null, mapDispatchToProps)(PostDetails);