import React, {useState} from 'react'
import {COMMENT_ID, COMMENT, COMMENT_REPLIES, USER_NAME} from '../constants';
import { AddCommentContainer } from '../containers/AddCommentContainer';
import { SimpleCommentContainer } from '../containers/SimpleCommentContainer';

function CommentWithReply({
    comment=COMMENT,
    commentAuthor="",
    updateModal = () => {},
    currCommentID="",
    setCurrCommentID = () => {},
    parentCommentId="root"
}) {

    const [showRepliesToggle, setShowRepliesToggle] = useState(false);
    const [showAddReplyToggle, setShowAddReplyToggle] = useState(false);

    const updateShowAddReplyToggle = (state) => {
        setShowAddReplyToggle(state);
    }

    const updateShowRepliesToggle = () => {
        setShowRepliesToggle(!showRepliesToggle);
    }

  return (
    <>
        <div className='comment'>
            <SimpleCommentContainer 
                comment={comment}
                updateShowAddReplyToggle={updateShowAddReplyToggle}
                setCurrCommentID={setCurrCommentID}
                showRepliesButton = {comment[COMMENT_REPLIES].length > 0}
                showRepliesToggle={showRepliesToggle}
                updateShowRepliesToggle={updateShowRepliesToggle}
                commentAuthor={commentAuthor}
                updateModal={updateModal}
                parentCommentId={parentCommentId}
            />
        </div>
        {(showAddReplyToggle && comment[COMMENT_ID] == currCommentID) && (
            <AddCommentContainer
                type="reply"
                updateShowAddReplyToggle={updateShowAddReplyToggle}
                comment={comment}
            />
        )}
        {comment[COMMENT_REPLIES].length > 0 && (
            // <>
            //     {showRepliesToggle && (
                    <>
                        {comment[COMMENT_REPLIES].map((reply) => (
                            <div className='nestedComment'>
                                <CommentWithReply 
                                    comment={reply}
                                    commentAuthor={comment[USER_NAME]}
                                    updateModal={updateModal}
                                    currCommentID={currCommentID}
                                    setCurrCommentID={setCurrCommentID}
                                    parentCommentId={comment[COMMENT_ID]}
                                />
                            </div>
                        ))}
                    </>
            //     )}
            // </>
        )}
        
    </>
  )
}

export default CommentWithReply