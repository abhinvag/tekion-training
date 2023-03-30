import userData from "../../data/userData.json";
import { Users } from "../../types";

const userDataTyped:Users = userData;

export const userReducer = (state=userDataTyped, action:any) => {
    return state;
}