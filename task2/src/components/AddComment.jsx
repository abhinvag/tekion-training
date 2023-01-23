import React, {useState} from 'react'
import { nanoid } from 'nanoid';

function AddComment(props) {

    const [comment, setComment] = useState({
        "id": "",
        "userName": "",
        "userImage": "",
        "userComment": "",
        "date": "",
        "replies": []
    })

    const updateComment = (e) => {
        const {name, value} = e.target;
        setComment((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            }
        })
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

    const addNewComment = () => {
        let comments = JSON.parse(localStorage.getItem("comments"));
        comment.id = nanoid();
        let date = new Date();
        const month = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
        let currentDate = date.getDate() + " " + month[date.getUTCMonth()] + " " + date.getFullYear() + ", " + date.getHours() + ":" + date.getUTCMinutes();
        comment.date = currentDate
        if(props.type == "comment") comments.push(comment);
        else{
            console.log(props.comment.id, comment);
            findCommentAndPushReply(props.comment.id, comment, comments)
            props.updateShowAddReplyToggle(false)
        }
        localStorage.setItem("comments", JSON.stringify(comments));
        props.updateComments(comments)
        setComment({
            "id": "",
            "userName": "",
            "userImage": "",
            "userComment": "",
            "date": "",
            "replies": []
        })
    }

  return (
    <div className="addCommentDiv">
        <input 
            id="userName" 
            type="text" 
            placeholder="Enter Name" 
            name="userName" 
            value={comment.userName}
            onChange={updateComment}
        />
        <input 
            id="userImage" 
            type="text" 
            placeholder="Enter Image URL" 
            name="userImage" 
            value={comment.userImage}
            onChange={updateComment}
        />
        <textarea 
            id="userComment" 
            rows="4" cols="50" 
            placeholder="Enter Comment" 
            name="userComment" 
            value={comment.userComment}
            onChange={updateComment}
        />
        {props.type == "reply" ? (
            <div>
                <button 
                    className="addCommentButton" 
                    type="submit" 
                    onClick={addNewComment}
                >
                    Reply
                </button>
                <button 
                    className="addCommentButton cancelButton" 
                    type="submit" 
                    onClick={() => {
                        props.updateShowAddReplyToggle(false)
                    }}
                >
                    Cancel
                </button>
            </div>
        ):(
            <button 
                className="addCommentButton" 
                type="submit" 
                onClick={addNewComment}
            >
                Comment
            </button>
        )}
       
    </div>
  )
}

export default AddComment