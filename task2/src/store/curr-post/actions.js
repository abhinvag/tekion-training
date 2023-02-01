import { UPDATE_CURRENT_POST_ID } from "../../constants"

export const updateCurrPostID = (postId) => {
    return{
        type: UPDATE_CURRENT_POST_ID,
        payload: postId
    }
}
