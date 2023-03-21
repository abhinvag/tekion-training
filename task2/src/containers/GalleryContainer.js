import { connect } from "react-redux";
import Gallery from "../components/Gallery";
import { POSTS, USERS } from "../constants";

const mapStateToProps = (state) => {
    const posts = state[POSTS];
    const users = state[USERS];
    return {
        posts,
        users,
    }
}

export const GalleryContainer = connect(mapStateToProps)(Gallery);