import { nanoid } from "nanoid";
import { DATE, COMMENT_ID, MONTHS_ARRAY, USER_ID, POST_COMMENTS, POST_ID, POST_IMAGE_URL, COMMENT_REPLIES, VOTES, POST_TEXT } from "./constants";

export const calculateDate = () => {
    let date = new Date();
    let currentDate = date.getDate() + " " + MONTHS_ARRAY[date.getUTCMonth()];
    return currentDate
}

export const findCommentAndReturn = (id, comments) => {

    for(let i=0;i<comments.length;i++){
        if(comments[i][COMMENT_ID] === id){
            return comments[i];
        }
        else if(comments[i][COMMENT_REPLIES].length != 0){
            let temp = findCommentAndReturn(id, comments[i][COMMENT_REPLIES]);
            if(temp != null) return temp;
        }
    }

    return null;
}

export const checkImage = (url) => {

    try { 
        new URL(url); 
    }
    catch(e){ 

        return false; 
    }

    url = url.split('?')[0];
    var parts = url.split('.');
    var extension = parts[parts.length-1];
    var imageTypes = ['jpg','jpeg','tiff','png','gif','bmp'];
    if(imageTypes.indexOf(extension) !== -1) {
        return true;   
    }

    return false;
}

export const createPost = ({postImageURL, userID, postText}) => {
    return {
        [POST_ID]: nanoid(),
        [USER_ID]: userID,
        [POST_COMMENTS]: [],
        [POST_IMAGE_URL]: postImageURL,
        [POST_TEXT]: postText
    }
}

export const createComment = (comment) => {
    return {
        ...comment,
        [COMMENT_ID]: nanoid(),
        [DATE]: calculateDate(),
        [VOTES]: 0
    }
}

export const getPostIdFromURL = () => {
    const id = window.location.pathname.split("/")[2];
    return id;
}   

