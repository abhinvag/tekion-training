import {createSelector} from "reselect";
import { POSTS, POST_ID } from "../../constants";
import { RootState } from "../../store";

export const selectPosts = (state:RootState) => state[POSTS];

export const selectCurrentPostId = (state:RootState, postId:string) => {
    return postId;
}

export const selectPost = createSelector([selectPosts, selectCurrentPostId], (posts, postId) => {
    return posts.find((post) => post[POST_ID] === postId)
});