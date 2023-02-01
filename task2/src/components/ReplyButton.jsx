import React from 'react'
import { COMMENT, COMMENT_ID } from '../constants'

function ReplyButton({updateShowAddReplyToggle = () => {}, setCurrCommentID = () => {}, comment=COMMENT}) {

    const handleClick = () => {
        updateShowAddReplyToggle(true)
        //console.log(comment[COMMENT_ID]);
        setCurrCommentID(comment[COMMENT_ID])
    }

  return (
    <button
        className='showHideRepliesButton replyButton'
        onClick={handleClick}
    >
        Reply <i className="fa fa-solid fa-reply"></i>
    </button>
  )
}

export default ReplyButton