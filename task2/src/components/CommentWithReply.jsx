import React, {useState} from 'react'
import SimpleComment from './SimpleComment'
import {COMMENT_ID, COMMENT, COMMENT_REPLIES, USER_NAME} from '../constants';
import { AddCommentContainer } from '../containers/AddCommentContainer';

function CommentWithReply({
    comment=COMMENT,
    commentAuthor=""
}) {

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
    <>
        <div className='comment'>
            <SimpleComment 
                comment={comment}
                updateShowAddReplyToggle={updateShowAddReplyToggle}
                setCurrCommentID={setCurrCommentID}
                showRepliesButton = {comment[COMMENT_REPLIES].length > 0}
                showRepliesToggle={showRepliesToggle}
                updateShowRepliesToggle={updateShowRepliesToggle}
                commentAuthor={commentAuthor}
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