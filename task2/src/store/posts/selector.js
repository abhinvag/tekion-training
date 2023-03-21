import {createSelector} from "reselect";
import { POSTS, POST_ID } from "../../constants";
import { getPostIdFromURL } from "../../helper";

export const selectPosts = (state) => state[POSTS];

export const selectCurrentPostId = (state, postId) => {
    return postId;
}

export const selectPost = createSelector([selectPosts, selectCurrentPostId], (posts, postId) => {
    return posts.find((post) => post[POST_ID] === postId)
});