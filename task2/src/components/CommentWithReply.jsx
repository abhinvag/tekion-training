import React from 'react'
import {COMMENT_ID, COMMENT, COMMENT_REPLIES, USER_NAME, USER_ID} from '../constants';
import { SimpleCommentContainer } from '../containers/SimpleCommentContainer';

function CommentWithReply({
    comment=COMMENT,
    commentAuthor="",
    updateModal = () => {},
    currCommentID="",
    currPostID="",
    setCurrCommentID = () => {},
    parentCommentId="root"
}) {

  return (
    <>
        <SimpleCommentContainer 
            key={`simpleComment-${comment[COMMENT_ID]}`}
            comment={comment}
            setCurrCommentID={setCurrCommentID}
            commentAuthor={commentAuthor}
            updateModal={updateModal}
            parentCommentId={parentCommentId}
            currPostID={currPostID}
        />
        {comment[COMMENT_REPLIES].length > 0 && (
            <div className='nestedComments'>
                {comment[COMMENT_REPLIES].map((reply) => (
                    <CommentWithReply 
                        comment={reply}
                        commentAuthor={comment[USER_ID]}
                        updateModal={updateModal}
                        currCommentID={currCommentID}
                        currPostID={currPostID}
                        setCurrCommentID={setCurrCommentID}
                        parentCommentId={comment[COMMENT_ID]}
                        key={`commentWithReply-${reply[COMMENT_ID]}`}
                    />
                ))}
            </div>
        )}
        
    </>
  )
}

export default CommentWithReply