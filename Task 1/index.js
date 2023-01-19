var comments = [
    {
        "userName": "Chris Evans",
        "userImage": "https://media.npr.org/assets/img/2022/11/08/ap22312071681283-0d9c328f69a7c7f15320e8750d6ea447532dff66.jpg",
        "date": "10 Jan 2023, 10:44 AM",
        "comment": "Amazing Office",
        "replies": [
            {
                "userName": "Robert Downey Jr.",
                "userImage": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/01/12/16735402991293.jpg",
                "date": "16 Jan 2023, 5:20 PM",
                "comment": "Hey Chris !! How are you ??",
                "replies": []
            }
        ]
    },
    {
        "userName": "Robert Downey Jr.",
        "userImage": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/01/12/16735402991293.jpg",
        "date": "16 Jan 2023, 5:20 PM",
        "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend ex at congue porta. Morbi sit amet sollicitudin augue. Suspendisse vitae consequat metus.",
        "replies": [
            {
                "userName": "Jeremy Renner",
                "userImage": "https://media.cnn.com/api/v1/images/stellar/prod/230102115303-digital-jeremy-renner.jpg?c=original",
                "date": "16 Jan 2023, 5:20 PM",
                "comment": "Hey Robert",
                "replies": [
                    {
                        "userName": "Robert Downey Jr.",
                        "userImage": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/01/12/16735402991293.jpg",
                        "date": "16 Jan 2023, 5:20 PM",
                        "comment": "Hey",
                        "replies": []
                    }
                ]
            }
        ]
            
    },
    {
        "userName": "Mark Ruffalo",
        "userImage": "https://www.emmys.com/sites/default/files/Mark-Ruffalo.jpg",
        "date": "16 Jan 2023, 5:20 PM",
        "comment": "Why isn't Avengers Tower that cool ??",
        "replies": [
        ]       
    }
]

function showComments(){
    const mainDiv = document.querySelector(".mainDiv");
    let newDiv = document.createElement("div");
    comments.map(function(comment){
        if(comment.replies.length === 0){
            newDiv.append(simpleCommentStructure(comment));
        }
        else{
            newDiv.append(handleCommentWithReply(comment));
        }
    })
    mainDiv.append(newDiv);
    document.getElementById("showButton").style.display = "none"
}

function simpleCommentStructure (comment){
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "commentSection_userCommentDiv");
    newDiv.innerHTML = `<img class="userCommentDiv_userImage" src=${comment.userImage}>
        <div class="userCommentDiv_detailsDiv">
            <div class="userCommentDiv_detailsDiv_personal">
                <p>${comment.userName}</p>
                <p>${comment.date}</p>
            </div>
            <div class="userCommentDiv_detailsDiv_comment">
                ${comment.comment}
            </div>
        </div>
    `
    return newDiv;
}

function handleCommentWithReply(comment){

    if(comment.replies.length === 0){
        return simpleCommentStructure(comment);
    }
    else{
        const uniqueButtonId = comment.userName + comment.date + "-button";
        const uniqueDivId = comment.userName + comment.date + "-div";
        
        const uniqueDiv = document.createElement("div");
        uniqueDiv.setAttribute("id", uniqueDivId);

        let uniqueButton = document.createElement("button");
        uniqueButton.innerHTML = "Show Replies";
        uniqueButton.setAttribute("id", uniqueButtonId);
        uniqueButton.addEventListener("click", function(){
            uniqueDiv.append(nestedCommentStructure(comment));
            uniqueButton.style.display = "none"
        })

        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "commentWithReply");
        newDiv.append(simpleCommentStructure(comment));
        newDiv.append(uniqueDiv);
        newDiv.append(uniqueButton);

        return newDiv;
    }
}

function nestedCommentStructure (comment){
    let newDiv = document.createElement("div")
    newDiv.setAttribute("class", "commentSection_userCommentDiv nestedComment");
    comment.replies.map(function(reply){
        console.log(reply);
        if(reply.replies.length === 0){
            newDiv.append(simpleCommentStructure(reply))
        }
        else{
            newDiv.append(handleCommentWithReply(reply));
        }
    })
    return newDiv
}

