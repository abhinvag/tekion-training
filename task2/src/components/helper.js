import { MONTHS_ARRAY } from "./constants";

function calculateDate(){
    let date = new Date();
    let currentDate = date.getDate() + " " + MONTHS_ARRAY[date.getUTCMonth()] + " " + date.getFullYear() + ", " + date.getHours() + ":" + date.getUTCMinutes();
    return currentDate
}


function findCommentAndPushReply(id, reply, comments){

    for(var i=0;i<comments.length;i++){
        if(comments[i].id == id){
            comments[i].replies.push(reply);
            return true;
        }
        else if(comments[i].replies.length != 0){
            let temp = findCommentAndPushReply(id, reply, comments[i].replies);
            if(temp) return true;
        }
    }

    return false;

}

const checkImage = (url) => {

    //  check if a valid url

    try { 
        new URL(url); 
    }
    catch(e){ 

        return false; 
    }

    // check if the url is an image 

    url = url.split('?')[0];
    var parts = url.split('.');
    var extension = parts[parts.length-1];
    var imageTypes = ['jpg','jpeg','tiff','png','gif','bmp'];
    if(imageTypes.indexOf(extension) !== -1) {
        return true;   
    }

    return false;
}

export {calculateDate, findCommentAndPushReply, checkImage}

