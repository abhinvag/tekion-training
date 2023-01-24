function calculateDate(){
    let date = new Date();
    const month = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
    let currentDate = date.getDate() + " " + month[date.getUTCMonth()] + " " + date.getFullYear() + ", " + date.getHours() + ":" + date.getUTCMinutes();
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
            if(temp) return;
        }
    }

    return;

}

export {calculateDate, findCommentAndPushReply}

