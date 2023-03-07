var modal = {
    currentPost: "",
    comments:[
        {
            "id": "sdjcbjsd",
            "userName": "Chris Evans",
            "userImage": "https://media.npr.org/assets/img/2022/11/08/ap22312071681283-0d9c328f69a7c7f15320e8750d6ea447532dff66.jpg",
            "date": "10 Jan 2023, 10:44",
            "comment": "Amazing Office",
            "replies": [
                {
                    "id": "askdnasjd",
                    "userName": "Robert Downey Jr.",
                    "userImage": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/01/12/16735402991293.jpg",
                    "date": "16 Jan 2023, 17:20",
                    "comment": "Hey Chris !! How are you ??",
                    "replies": []
                }
            ]
        },
        {
            "id": "assmdbqjd",
            "userName": "Robert Downey Jr.",
            "userImage": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/01/12/16735402991293.jpg",
            "date": "16 Jan 2023, 17:20",
            "comment": "I am gonna copy this design for the new Avengers HQ.",
            "replies": [
                {
                    "id": "jcbsjcbwj",
                    "userName": "Jeremy Renner",
                    "userImage": "https://media.cnn.com/api/v1/images/stellar/prod/230102115303-digital-jeremy-renner.jpg?c=original",
                    "date": "16 Jan 2023, 17:20",
                    "comment": "Hey Robert",
                    "replies": [
                        {
                            "userName": "Robert Downey Jr.",
                            "userImage": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/01/12/16735402991293.jpg",
                            "date": "16 Jan 2023, 17:20",
                            "comment": "Hey",
                            "replies": []
                        }
                    ]
                }
            ]
                
        },
        {
            "id": "asjkcnjd",
            "userName": "Mark Ruffalo",
            "userImage": "https://www.emmys.com/sites/default/files/Mark-Ruffalo.jpg",
            "date": "16 Jan 2023, 17:20",
            "comment": "Why isn't Avengers Tower that cool ??",
            "replies": [
            ]       
        }
    ]
}

const controller = {

    init(){
        controller.setCurrentPost("https://img.etimg.com/thumb/width-1200,height-900,imgsize-72880,resizemode-1,msid-91945253/industry/services/property-/-cstruction/tech-firm-tekion-leases-over-one-lakh-sqft-office-space-in-bengaluru-in-expansion-bid.jpg");
        currPostView.init();
    },
    
    getCurrentPost(){
        return modal.currentPost;
    },

    setCurrentPost(post){
        modal.currentPost = post; 
    },

    getComments(){
        return modal.comments;
    },

    pushInComments(comment){
        modal.comments.push(comment);
    },

    findCommentAndPushReplyHelper(id, reply, comments){

        for(var i=0;i<comments.length;i++){
            if(comments[i].id == id){
                comments[i].replies.push(reply);
                return true;
            }
            else if(comments[i].replies.length != 0){
                let temp = this.findCommentAndPushReplyHelper(id, reply, comments[i].replies);
                if(temp) return;
            }
        }
    
        return;
    
    },

    findCommentAndPushReply(id, reply){
        this.findCommentAndPushReplyHelper(id, reply, modal.comments);
    }

}

function showComments(){
    const mainDiv = document.querySelector(".mainDiv");
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "wholeCommentsDiv")
    let comments = controller.getComments();
    comments.map(function(comment){
        if(comment.replies.length === 0){
            newDiv.append(getSimpleCommentStructure(comment));
            let uniqueReplyButton = getReplyButton(comment)
            addEventListenerToReplyButton(comment, uniqueReplyButton, newDiv, false, {});
            newDiv.append(uniqueReplyButton);
        }
        else{
            newDiv.append(getCommentWithReply(comment));
        }
    })
    mainDiv.append(newDiv);
    document.getElementById("showButton").style.display = "none"
    document.getElementById("hideButton").style.display = "block"
}

function hideComments(){
    const element = document.getElementById("wholeCommentsDiv");
    element.remove();
    document.getElementById("showButton").style.display = "block"
    document.getElementById("hideButton").style.display = "none"
}

function getReplyButton (comment){
    const uniqueReplyButtonId = comment.id + "-replyButton";
    let uniqueReplyButton = document.createElement("button");
    uniqueReplyButton.innerHTML = `Reply <i class="fa fa-solid fa-reply"></i>`;
    uniqueReplyButton.setAttribute("id", uniqueReplyButtonId);
    uniqueReplyButton.setAttribute("class", "showHideRepliesButton replyButton");
    return uniqueReplyButton;
}

function getReplyForm (id){
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <div class="addCommentDiv" id="replyDiv">
        <input id="userName-reply" type="text" placeholder="Enter Name" name="userName" oninput="updateNewReply()">
        <input id="userImage-reply" type="text" placeholder="Enter Image URL" name="userImage" oninput="updateNewReply()">
        <textarea id="userComment-reply" rows="4" cols="50" placeholder="Enter Reply" name="userComment" oninput="updateNewReply()"></textarea>
        <div>
            <button class="addCommentButton" type="submit" onclick="addNewComment('reply', '${id}')">Reply</button>
            <button class="addCommentButton cancelButton" type="submit" onclick="deleteReplyDiv()">Cancel</button>
        </div>
    </div>
    `
    return newDiv;
}

function deleteReplyDiv(){
    if(document.getElementById("replyDiv") != null) {
        document.getElementById("replyDiv").remove();
    }
}

function getSimpleCommentStructure (comment){
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "commentSection_userCommentDiv");
    newDiv.innerHTML = `<img class="userCommentDiv_userImage" src=${comment.userImage}>
        <div class="userCommentDiv_detailsDiv">
            <div class="userCommentDiv_detailsDiv_personal">
                <p><b>${comment.userName}</b></p>
                <p>${comment.date}</p>
            </div>
            <div class="userCommentDiv_detailsDiv_comment">
                ${comment.comment}
            </div>
        </div>
    `
    return newDiv;
}

function getCommentWithReply(comment){

    if(comment.replies.length === 0){
        return getSimpleCommentStructure(comment);
    }
    else{
        const uniqueShowButtonId = comment.id + "-showbutton";
        const uniqueHideButtonId = comment.id+ "-hideButton";
        
        const uniqueDivId = comment.id + "-div";
        const uniqueDiv = document.createElement("div");
        uniqueDiv.setAttribute("id", uniqueDivId);

        let uniqueShowButton = document.createElement("button");
        let uniqueHideButton = document.createElement("button");
        
        uniqueShowButton.innerHTML = `Show Replies <i class="fa fa-light fa-angle-down"></i>`;
        uniqueShowButton.setAttribute("id", uniqueShowButtonId);
        uniqueShowButton.setAttribute("class", "showHideRepliesButton")
        uniqueShowButton.addEventListener("click", function(){
            uniqueDiv.append(getNestedCommentStructure(comment));
            uniqueShowButton.style.display = "none"
            uniqueHideButton.style.display = "inline-block";
        })

        
        uniqueHideButton.innerHTML = `Hide Replies <i class="fa fa-light fa-angle-up">`;
        uniqueHideButton.setAttribute("id", uniqueHideButtonId);
        uniqueHideButton.setAttribute("class", "showHideRepliesButton")
        uniqueHideButton.style.display = "none"
        uniqueHideButton.addEventListener("click", function(){
            uniqueDiv.removeChild(uniqueDiv.firstElementChild);
            uniqueHideButton.style.display = "none"
            uniqueShowButton.style.display = "inline-block"
        })

        const newDiv = document.createElement("div");

        let uniqueReplyButton = getReplyButton(comment)
        addEventListenerToReplyButton(comment, uniqueReplyButton, newDiv, true, uniqueDiv);

        
        newDiv.setAttribute("class", "commentWithReply");
        newDiv.append(getSimpleCommentStructure(comment));
        newDiv.append(uniqueShowButton);
        newDiv.append(uniqueHideButton);
        newDiv.append(uniqueReplyButton);
        newDiv.append(uniqueDiv);

        return newDiv;
    }
}

function getNestedCommentStructure (comment){
    let newDiv = document.createElement("div")
    newDiv.setAttribute("class", "nestedComment");
    comment.replies.map(function(reply){
        console.log(reply);
        if(reply.replies.length === 0){
            newDiv.append(getSimpleCommentStructure(reply))
            let uniqueReplyButton = getReplyButton(reply)
            addEventListenerToReplyButton(reply, uniqueReplyButton, newDiv, false, {});
            newDiv.append(uniqueReplyButton);
        }
        else{
            newDiv.append(getCommentWithReply(reply));
        }
    })
    return newDiv
}

let newComment = {
    "id": "",
    "userName" : "",
    "comment": "",
    "userImage": "",
    "replies": [],
    "date": "",
}

function updateNewComment(){
    newComment.userName = document.getElementById("userName").value;
    newComment.userImage = document.getElementById("userImage").value;
    newComment.comment = document.getElementById("userComment").value;
}

function updateNewReply(){
    newComment.userName = document.getElementById("userName-reply").value;
    newComment.userImage = document.getElementById("userImage-reply").value;
    newComment.comment = document.getElementById("userComment-reply").value;
    console.log(newComment);
}

function addNewComment(type, id){
    let date = new Date();
    const month = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
    let currentDate = date.getDate() + " " + month[date.getUTCMonth()] + " " + date.getFullYear() + ", " + date.getHours() + ":" + date.getUTCMinutes();
    newComment.date = currentDate;
    newComment.id = new Date();
    if(newComment.userName.trim().length === 0) return;
    else{
        const cloneComment = JSON.parse(JSON.stringify(newComment))
        if(type == "comment") {
            controller.pushInComments(cloneComment);
            document.getElementById("userName").value = "";
            document.getElementById("userImage").value = "";
            document.getElementById("userComment").value = "";
        }
        else{
            controller.findCommentAndPushReply(id.trim(), cloneComment)
            deleteReplyDiv();
        }
        refreshWholeCommentsDiv();
        newComment.userName = "";
        newComment.comment = "";
        newComment.userImage = "";
        newComment.date = ""
        newComment.id = ""
    }
}

function refreshWholeCommentsDiv(){
    if(document.getElementById("hideButton").style.display == "block"){
        document.getElementById("hideButton").click();
        document.getElementById("showButton").click();
    }
    else document.getElementById("showButton").click();
}

function addEventListenerToReplyButton(comment, uniqueReplyButton, newDiv, shouldNotAppend, uniqueDiv){
    
    uniqueReplyButton.addEventListener("click", function(){
        deleteReplyDiv();
        const replyFormStructure = getReplyForm(comment.id);
        if(shouldNotAppend === false) newDiv.append(replyFormStructure);
        else newDiv.insertBefore(replyFormStructure, uniqueDiv);
    })

}

currPostView = {
    init(){
        this.currPostElem = document.getElementById("postImage");
        this.render();
    },
    render(){
        const currPost = controller.getCurrentPost();
        this.currPostElem.setAttribute("src", currPost);
    }
}

controller.init();


