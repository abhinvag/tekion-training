import produce from "immer";

const demoState = {
    "userID": "sherlock",
    "userName": "Sherlock Holmes",
    "userImage": "https://pyxis.nymag.com/v1/imgs/f47/788/caac0f6d9bc8edc26a8c8b17d69a41e447-02-sherlock.rsquare.w330.jpg",
    "likedPosts": [],
    "likedComments": []
}

export const currentUserReducer = produce((state = demoState, action) => {

}, demoState)