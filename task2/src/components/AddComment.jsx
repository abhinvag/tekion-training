import React, {useState} from 'react'
import { nanoid } from 'nanoid';
import {findCommentAndPushReply, calculateDate, checkImage} from "./helper";
import {COMMENT, ID, USER_NAME, USER_IMAGE, USER_COMMENT, DATE } from './constants';

function AddComment({type="comment", updateShowAddReplyToggle = () => {}, updateComments = () => {}, comment=COMMENT, comments=[]}) {

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
        // else if(!checkImage(commentState[USER_IMAGE])){
        //     tempValidationErrorObj[USER_IMAGE] = "This is not a valid image URL !";
        //     isValid = false;
        // }
        
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
        let commentsArray = JSON.parse(JSON.stringify(comments));
        commentState[ID] = nanoid();
        commentState[DATE] = calculateDate();
        if(validate()){
            if(type == "comment") commentsArray.push(commentState);
            else{
                findCommentAndPushReply(comment.id, commentState, commentsArray)
                updateShowAddReplyToggle(false)
            }
            updateComments(commentsArray)
            setCommentState(COMMENT)
        }
        else{
            //console.log(validationErrorArray);
        }
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
            onFocus={handleFocus}
        />
        {validationErrorObj[USER_NAME] != "" && (
            <span className='error'>{validationErrorObj[USER_NAME]}</span>
        )}
        <input 
            id="userImage" 
            type="text" 
            placeholder="Enter Image URL" 
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
            placeholder="Enter Comment" 
            name={USER_COMMENT} 
            value={commentState[USER_COMMENT]}
            onChange={updateComment}
            onFocus={handleFocus}
        />
        {validationErrorObj[USER_COMMENT] != "" && (
            <span className='error'>{validationErrorObj[USER_COMMENT]}</span>
        )}
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