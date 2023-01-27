import React, {useState} from 'react'
import ReplyButton from './ReplyButton';
import SimpleComment from './SimpleComment'
import AddComment from './AddComment';
import {ID, COMMENT} from './constants';

function CommentWithReply({comment=COMMENT, updateComments = () => {}, comments={}}) {

    const [showRepliesToggle, setShowRepliesToggle] = useState(false);
    const [showAddReplyToggle, setShowAddReplyToggle] = useState(false);
    const [currCommentID, setCurrCommentID] = useState();

    const updateShowAddReplyToggle = (state) => {
        setShowAddReplyToggle(state);
    }

    const updateShowRepliesToggle = () => {
        setShowRepliesToggle(!showRepliesToggle);
    }

  return (
    <div className='commentWithReply'>
        <SimpleComment 
            comment={comment}
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
                updateComments={updateComments}
                comments={comments}
            />
        )}
        {comment.replies.length > 0 && (
            <>
                {showRepliesToggle ? (
                    <>
                        <button
                            className='showHideRepliesButton'
                            onClick={updateShowRepliesToggle}
                        >
                            Hide Replies <i className="fa fa-light fa-angle-up"></i>
                        </button>
                        {comment.replies.map((reply) => (
                            <div className='nestedComment'>
                                <CommentWithReply 
                                    comment={reply}
                                    updateComments={updateComments}
                                    comments={comments}
                                />
                            </div>
                        ))}
                    </>
                ):(
                    <button
                        className='showHideRepliesButton'
                        onClick={updateShowRepliesToggle}
                    >
                        Show Replies <i className="fa fa-light fa-angle-down"></i>
                    </button>
                )}
            </>
        )}
        
    </div>
  )
}

export default CommentWithReply