import { connect } from "react-redux";
import Gallery from "../components/Gallery";
import {updateCurrPostID} from "../store/curr-post/actions"

const mapStateToProps = (state) => {
    const posts = state.posts;
    const currPostID = state.currPostID;
    return {
        posts,
        currPostID
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCurrPostID: (postID) => dispatch(updateCurrPostID(postID))
    }
}

export const GalleryContainer = connect(mapStateToProps, mapDispatchToProps)(Gallery);