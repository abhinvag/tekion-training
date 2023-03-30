import { nanoid } from "nanoid";
import { DATE, COMMENT_ID, MONTHS_ARRAY, USER_ID, POST_COMMENTS, POST_ID, POST_IMAGE_URL, VOTES, POST_TEXT, POST_VOTES } from "./constants";
import { comment, post } from "./types";

export const calculateDate = () : string => {
    let date = new Date();
    let currentDate = date.getDate() + " " + MONTHS_ARRAY[date.getUTCMonth()];
    return currentDate
}

export const findCommentAndReturn = (id: string, comments?: comment[]) : comment | null => {

    if(comments != undefined){
        for(let i=0;i<comments.length;i++){
            if(comments[i].commentID=== id){
                return comments[i];
            }
            else if(comments[i].commentReplies.length != 0){
                let temp = findCommentAndReturn(id, comments[i].commentReplies);
                if(temp != null) return temp;
            }
        }
    }

    return null;
}

export const checkImage = (url:string) : boolean => {

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

export const createPost = ({postImageURL, userID, postText} : {postImageURL: string,userID: string, postText: string}) : post => {
    return {
        [POST_ID]: nanoid(),
        [USER_ID]: userID,
        [POST_COMMENTS]: [],
        [POST_IMAGE_URL]: postImageURL,
        [POST_TEXT]: postText,
        [POST_VOTES]: 0
    }
}

export const createComment = (comment:comment):comment => {
    return {
        ...comment,
        [COMMENT_ID]: nanoid(),
        [DATE]: calculateDate(),
        [VOTES]: 0
    }
}

export const getPostIdFromURL = () : string => {
    const postId = window.location.pathname.split("/")[2];
    return postId;
}   

