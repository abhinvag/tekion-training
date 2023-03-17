import React, {useState} from 'react'
import {COMMENT, COMMENT_ID, USER_COMMENT, USER_ID } from '../constants';
import "../styles/addComment.css"

function AddComment({
    type="comment", 
    updateShowAddReplyToggle = () => {}, 
    comment=COMMENT, 
    currPostID = "",
    addComment = () => {},
    addReply = () => {},
    users = {}
}) {

    const [commentState, setCommentState] = useState(COMMENT);
    const [validationErrorObj, setValidationErrorObj] = useState({
        [USER_ID]: "",
        [USER_COMMENT]: "",
    })

    const updateComment = (e) => {
        const {name, value} = e.target;
        setCommentState((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            }
        })
    }

    const validate = () => {

        let isValid = true;
        let tempValidationErrorObj = {};

        if(commentState[USER_ID].trim().length == 0){
            tempValidationErrorObj[USER_ID] = "This field cannot be empty !";
            isValid = false;
        }
        else if(users[commentState[USER_ID]] == undefined){
            tempValidationErrorObj[USER_ID] = "Username doesn't exists";
            isValid = false;
        }
        
        if(commentState[USER_COMMENT].trim().length == 0){
            tempValidationErrorObj[USER_COMMENT] = "This field cannot be empty !";
            isValid = false;
        }

        setValidationErrorObj(tempValidationErrorObj)

        return isValid;
    }

    const handleFocus = (e) => {
        setValidationErrorObj((prevValue) => {
            return {
                ...prevValue,
                [e.target.name]: "",
            }
        })
    }   
    
    const addNewComment = () => {
        if(validate()){
            if(type == "comment") {
                addComment(currPostID, commentState);
            }
            else{
                addReply(currPostID, comment[COMMENT_ID], commentState);
                updateShowAddReplyToggle(false)
            }
            setCommentState(COMMENT)
        }
    }

  return (
    <div 
        className= {type == "reply" ? "addComment addReply" : "addComment"}
    >
        <div className='addCommentLeft'>
            <input  
                type="text" 
                placeholder="Add your username .." 
                name={USER_ID} 
                value={commentState[USER_ID]}
                onChange={updateComment}
                onFocus={handleFocus}
                className="addCommentLeft-input"
            />
            {validationErrorObj[USER_ID] != "" && (
                <span className='error'>{validationErrorObj[USER_ID]}</span>
            )}
            <textarea  
                rows="4" cols="50" 
                placeholder="Add a comment .." 
                name={USER_COMMENT} 
                value={commentState[USER_COMMENT]}
                onChange={updateComment}
                onFocus={handleFocus}
                className="addCommentLeft-textarea"
            />
            {validationErrorObj[USER_COMMENT] != "" && (
                <span className='error'>{validationErrorObj[USER_COMMENT]}</span>
            )}
        </div>
        <div className='addCommentRight'>
            {type == "reply" ? (
                <div>
                    <button 
                        className="button--purple" 
                        type="submit" 
                        onClick={addNewComment}
                    >
                        <b>REPLY</b>
                    </button>
                </div>
            ):(
                <button 
                    className="button--purple" 
                    type="submit" 
                    onClick={addNewComment}
                >
                    <b>SEND</b>
                </button>
            )}
        </div>
    </div>
  )
}

export default AddComment