import React, {useState} from 'react'
import ReplyButton from './ReplyButton';
import SimpleComment from './SimpleComment'
import {COMMENT_ID, COMMENT, COMMENT_REPLIES} from '../constants';
import { AddCommentContainer } from '../containers/AddCommentContainer';

function CommentWithReply({comment=COMMENT}) {

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
        {(showAddReplyToggle && comment[COMMENT_ID] == currCommentID) && (
            <AddCommentContainer
                type="reply"
                updateShowAddReplyToggle={updateShowAddReplyToggle}
                comment={comment}
            />
        )}
        {comment[COMMENT_REPLIES].length > 0 && (
            <>
                {showRepliesToggle ? (
                    <>
                        <button
                            className='showHideRepliesButton'
                            onClick={updateShowRepliesToggle}
                        >
                            Hide Replies <i className="fa fa-light fa-angle-up"></i>
                        </button>
                        {comment[COMMENT_REPLIES].map((reply) => (
                            <div className='nestedComment'>
                                <CommentWithReply 
                                    comment={reply}
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