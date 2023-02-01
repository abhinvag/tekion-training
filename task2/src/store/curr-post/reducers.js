import { UPDATE_CURRENT_POST_ID} from "../../constants";
import produce from "immer";

const initalState = "id";

export const currPostReducer = produce((state = initalState, action) => {

    if(action.type == UPDATE_CURRENT_POST_ID){
        return action.payload;
    }

    return state;
}, initalState)