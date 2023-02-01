import React, {useState} from 'react'
import {COMMENT, COMMENT_ID, USER_NAME, USER_IMAGE, USER_COMMENT, DATE, CURR_POST_ID } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import {addComment, addReply} from "../store/posts/actions"

function AddComment({type="comment", updateShowAddReplyToggle = () => {}, comment=COMMENT}) {

    const [commentState, setCommentState] = useState(COMMENT);
    const [validationErrorObj, setValidationErrorObj] = useState({
        [USER_NAME]: "",
        [USER_IMAGE]: "",
        [USER_COMMENT]: "",
    })

    const currPostID = useSelector(state => state[CURR_POST_ID]);

    const dispatch = useDispatch();

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
                dispatch(addComment(currPostID, commentState));
            }
            else{
                dispatch(addReply(currPostID, comment[COMMENT_ID], commentState))
                updateShowAddReplyToggle(false)
            }
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