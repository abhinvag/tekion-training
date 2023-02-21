import React, {useState} from 'react'
import CommentWithReply from './CommentWithReply';
import SimpleComment from './SimpleComment';
import {COMMENT_ID, COMMENT_REPLIES, DATE } from '../constants';
import { AddCommentContainer } from '../containers/AddCommentContainer';

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
                        {comment[COMMENT_REPLIES].length ===  0 ? (
                            <div className='comment'>
                                <SimpleComment
                                    comment = {comment}
                                    date = {comment[DATE]}
                                    updateShowAddReplyToggle={updateShowAddReplyToggle}
                                    setCurrCommentID={setCurrCommentID}
                                    showRepliesButton={false}
                                />
                            
                                {(showAddReplyToggle && comment[COMMENT_ID] == currCommentID) && (
                                    <AddCommentContainer
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