import { nanoid } from "nanoid";
import { DATE, COMMENT_ID, MONTHS_ARRAY, POST_BY, POST_COMMENTS, POST_ID, POST_IMAGE_URL, COMMENT_REPLIES } from "./constants";

export const calculateDate = () => {
    let date = new Date();
    let currentDate = date.getDate() + " " + MONTHS_ARRAY[date.getUTCMonth()];
    return currentDate
}

const findCommentAndPushReplyHelper = (id, reply, comments) => {

    comments.map((comment) => {
        if(comment[COMMENT_ID] == id){
            comment[COMMENT_REPLIES].push(reply);
            return true;
        }
        else if(comment[COMMENT_REPLIES].length != 0){
            let temp = findCommentAndPushReply(id, reply, comment[COMMENT_REPLIES]);
            if(temp) return true;
        }
    });

    return false;

}

export const findCommentAndPushReply = (id, reply, comments) => {

    let newComments = [...comments];

    findCommentAndPushReplyHelper(id, reply, newComments);

    return newComments;

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

export const createPost = ({imageURL}) => {
    return {
        [POST_ID]: nanoid(),
        [POST_BY]: "",
        [POST_COMMENTS]: [],
        [POST_IMAGE_URL]: imageURL
    }
}

export const createComment = (comment) => {
    return {
        ...comment,
        [COMMENT_ID]: nanoid(),
        [DATE]: calculateDate()
    }
}

