import { connect } from "react-redux";
import Gallery from "../components/Gallery";
import { CURR_POST_ID, POSTS } from "../constants";
import {updateCurrPostID} from "../store/curr-post/actions"

const mapStateToProps = (state) => {
    const posts = state[POSTS];
    const currPostID = state[CURR_POST_ID];
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