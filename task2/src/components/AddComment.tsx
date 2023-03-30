import React, {useState, useEffect} from 'react'
import {COMMENT, COMMENT_ID, USER_COMMENT, USER_ID, USER_IMAGE } from '../constants';
import { AddCommentContainerReduxProps } from '../containers/AddCommentContainer';
import { Comment } from '../types';

type Props = {
    type: string;
    updateShowAddReplyToggle?: (state: boolean) => void;
    comment?:Comment;
    currPostID:string|undefined;
}

type AddCommentProps = Props & AddCommentContainerReduxProps

function AddComment({
    type="comment", 
    updateShowAddReplyToggle = () => {}, 
    comment, 
    currPostID = "",
    addComment = () => {},
    addReply = () => {},
    currentUser
}:AddCommentProps) {

    const [commentState, setCommentState] = useState<Comment>(COMMENT);
    const [shareDisabled, setShareDisabled] = useState(true);
    
    useEffect(() => {
      commentState[USER_ID] = currentUser[USER_ID]
    }, [])

    useEffect(() => {
        if(commentState[USER_COMMENT] == ""){
            setShareDisabled(true);
        }
        else{
            setShareDisabled(false);
        }
    }, [commentState])
    

    const updateComment = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setCommentState((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            }
        })
    }

    const addNewComment = () => {
        if(type == "comment") {
            addComment(currPostID, commentState);
        }
        else{
            if(comment != undefined) {
                addReply(currPostID, comment[COMMENT_ID], commentState);
                updateShowAddReplyToggle(false)
            }
        }
        setCommentState(COMMENT)
    }

  return (
    <div 
        className= {type == "reply" ? "addComment addReply" : "addComment"}
    >
        <div className='addComment-left'>
            <img className='addComment-image' src={currentUser[USER_IMAGE]} ></img>
            <textarea  
                rows={4} 
                cols={50} 
                placeholder="Add a comment .." 
                name={USER_COMMENT} 
                value={commentState[USER_COMMENT]}
                onChange={updateComment}
                className="addComment-textarea"
            />
        </div>
        <div className='addComment-button'>
            <button 
                className={shareDisabled ? 'button--purple button--disabled' : 'button--purple'}
                type="submit" 
                onClick={addNewComment}
                disabled={shareDisabled}
                style={{marginTop: "0"}}
            >
                <b>{type == "reply" ? "REPLY" : "SEND"}</b>
            </button>
        </div>
    </div>
  )
}

export default AddComment