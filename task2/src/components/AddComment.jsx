import React, {useState} from 'react'
import {COMMENT, COMMENT_ID, USER_NAME, USER_IMAGE, USER_COMMENT } from '../constants';


function AddComment({
    type="comment", 
    updateShowAddReplyToggle = () => {}, 
    comment=COMMENT, 
    currPostID = "",
    addComment = () => {},
    addReply = () => {}
}) {

    const [commentState, setCommentState] = useState(COMMENT);
    const [validationErrorObj, setValidationErrorObj] = useState({
        [USER_NAME]: "",
        [USER_IMAGE]: "",
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
        let tempValidationErrorObj = [];

        if(commentState[USER_NAME].trim().length == 0){
            tempValidationErrorObj[USER_NAME] = "This field cannot be empty !";
            isValid = false;
        }
        
        if(commentState[USER_IMAGE].trim().length == 0){
            tempValidationErrorObj[USER_IMAGE] = "This field cannot be empty !";
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
        className= {type == "reply" ? "addReplyDiv addCommentDiv" : "addCommentDiv"}
    >
        <div className='addCommentDiv-left'>
            <input 
                id="userName" 
                type="text" 
                placeholder="Add a name .." 
                name={USER_NAME} 
                value={commentState[USER_NAME]}
                onChange={updateComment}
                onFocus={handleFocus}
            />
            {validationErrorObj[USER_NAME] != "" && (
                <span className='error'>{validationErrorObj[USER_NAME]}</span>
            )}
            <input 
                id="userImage" 
                type="text" 
                placeholder="Add a image url .." 
                name={USER_IMAGE} 
                value={commentState[USER_IMAGE]}
                onChange={updateComment}
                onFocus={handleFocus}
            />
            {validationErrorObj[USER_IMAGE] != "" && (
                <span className='error'>{validationErrorObj[USER_IMAGE]}</span>
            )}
            <textarea 
                id="userComment" 
                rows="4" cols="50" 
                placeholder="Add a comment .." 
                name={USER_COMMENT} 
                value={commentState[USER_COMMENT]}
                onChange={updateComment}
                onFocus={handleFocus}
            />
            {validationErrorObj[USER_COMMENT] != "" && (
                <span className='error'>{validationErrorObj[USER_COMMENT]}</span>
            )}
        </div>
        <div className='addCommentDiv-right'>
            {type == "reply" ? (
                <div>
                    <button 
                        className="addCommentButton" 
                        type="submit" 
                        onClick={addNewComment}
                    >
                        <b>REPLY</b>
                    </button>
                </div>
            ):(
                <button 
                    className="addCommentButton" 
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