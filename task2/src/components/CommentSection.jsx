import React, {useState} from 'react'
import AddComment from './AddComment';
import CommentWithReply from './CommentWithReply';
import ReplyButton from './ReplyButton';
import SimpleComment from './SimpleComment';
import {ID, DATE } from './constants';

function CommentSection({comments=[]}) {

    const [showCommentsToggle, setShowCommentsToggle] = useState(false);
    const [showAddReplyToggle, setShowAddReplyToggle] = useState(false);
    const [currCommentID, setCurrCommentID] = useState();

    const updateShowAddReplyToggle = (state) => {
        setShowAddReplyToggle(state);
    }

    const updateShowCommentsToggle = () => {
        setShowCommentsToggle(!showCommentsToggle);
    }
    

  return (
    <>
        {showCommentsToggle ? (
            <>
                <a 
                id="hideButton" 
                onClick={updateShowCommentsToggle} 
                className="showHideCommentsButton"
                >
                    Hide Comments <i className="fa fa-light fa-angle-up"></i>
                </a>
                {comments.map((comment) => (
                    <>
                        {comment.replies.length ===  0 ? (
                            <div style={{width: "100%"}}>
                                <SimpleComment
                                    comment = {comment}
                                    date = {comment[DATE]}
                                />
                                <ReplyButton
                                    updateShowAddReplyToggle={updateShowAddReplyToggle}
                                    setCurrCommentID={setCurrCommentID}
                                    comment={comment}
                                />
                                {(showAddReplyToggle && comment[ID] == currCommentID) && (
                                    <AddComment
                                        type="reply"
                                        updateShowAddReplyToggle={updateShowAddReplyToggle}
                                        comment={comment}
                                    />
                                )}
                            </div>
                        ):(
                            <>
                                <CommentWithReply 
                                    comment={comment}
                                />
                            </>
                        )}
                    </>
                ))}
            </>
        ):(
            <a 
            id="showButton" 
            onClick={updateShowCommentsToggle} 
            className="showHideCommentsButton"
            >
                Show Comments <i className="fa fa-light fa-angle-down"></i>
            </a>
        )}
    </>
  )
}

export default CommentSection