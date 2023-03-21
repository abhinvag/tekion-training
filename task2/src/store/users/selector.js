import { createSelector } from "reselect";
import { USERS, USER_ID } from "../../constants";
import { selectPost } from "../posts/selector";

export const selectUsers = (state, props) => state[USERS];

export const selectUserIdFromComment = (state, props) => props.comment[USER_ID];

export const selectUserIdFromPost = createSelector([selectPost], (post) => {
    return post[USER_ID];
})

export const selectUserFromComment = createSelector([selectUsers, selectUserIdFromComment], (users, userID) => {
    return users[userID];
})

export const selectUserFromPost = createSelector([selectUsers, selectUserIdFromPost], (users, userId) => {
    return users[userId];
})