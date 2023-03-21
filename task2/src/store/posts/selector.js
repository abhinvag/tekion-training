import {createSelector} from "reselect";
import { POSTS, POST_ID } from "../../constants";
import { getPostIdFromURL } from "../../helper";

export const selectPosts = (state) => state[POSTS];

export const selectPost = createSelector([selectPosts], (posts) => {
    const id = getPostIdFromURL();
    return posts.find((post) => post[POST_ID] === id)
});