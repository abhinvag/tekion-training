import React, {useState} from 'react'
import { nanoid } from 'nanoid';
import {findCommentAndPushReply, calculateDate} from "./helper";
import {COMMENT, ID, USER_NAME, USER_IMAGE, USER_COMMENT, DATE } from './constants';

function AddComment({type="comment", updateShowAddReplyToggle, updateComments, comment=COMMENT}) {

    const [commentState, setCommentState] = useState(COMMENT)

    const updateComment = (e) => {
        const {name, value} = e.target;
        console.log(name, value)
        setCommentState((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            }
        })
    }
    
    const addNewComment = () => {
        let comments = JSON.parse(localStorage.getItem("comments"));
        commentState[ID] = nanoid();
        commentState[DATE] = calculateDate();
        if(type == "comment") comments.push(commentState);
        else{
            //console.log(comment.id, commentState);
            findCommentAndPushReply(comment.id, commentState, comments)
            updateShowAddReplyToggle(false)
        }
        localStorage.setItem("comments", JSON.stringify(comments));
        updateComments(comments)
        setCommentState(COMMENT)
    }

    const handleCancel = () => {
        updateShowAddReplyToggle(false)
    }

  return (
    <div className="addCommentDiv">
        <input 
            id="userName" 
            type="text" 
            placeholder="Enter Name" 
            name={USER_NAME} 
            value={commentState[USER_NAME]}
            onChange={updateComment}
        />
        <input 
            id="userImage" 
            type="text" 
            placeholder="Enter Image URL" 
            name={USER_IMAGE} 
            value={commentState[USER_IMAGE]}
            onChange={updateComment}
        />
        <textarea 
            id="userComment" 
            rows="4" cols="50" 
            placeholder="Enter Comment" 
            name={USER_COMMENT} 
            value={commentState[USER_COMMENT]}
            onChange={updateComment}
        />
        {type == "reply" ? (
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
                    onClick={handleCancel}
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