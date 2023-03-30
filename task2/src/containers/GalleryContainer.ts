import { connect, ConnectedProps, ConnectProps } from "react-redux";
import Gallery from "../components/Gallery";
import { POSTS, USERS } from "../constants";
import { RootState } from "../store";

const mapStateToProps = (state:RootState) => {
    const posts = state[POSTS];
    const users = state[USERS];
    return {
        posts,
        users,
    }
}

const connector = connect(mapStateToProps);

export type GalleryContainerReduxProps = ConnectedProps<typeof connector>;

export const GalleryContainer = connector(Gallery);