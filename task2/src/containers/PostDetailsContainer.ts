import { connect, ConnectedProps } from "react-redux"
import PostDetails from "../components/PostDetails"
import { AppDispatch } from "../store"
import { decrementPostVotes, incrementPostVotes } from "../store/posts/actions"

const mapDispatchToProps = (dispatch:AppDispatch) => {
    return {
        incrementPostVotes : (postId:string) => dispatch(incrementPostVotes(postId)),
        decrementPostVotes : (postId:string) => dispatch(decrementPostVotes(postId))
    }
}

const connector = connect(null, mapDispatchToProps);

export type PostDetailsContainerReduxProps = ConnectedProps<typeof connector>

export const PostDetailsContainer = connector(PostDetails);