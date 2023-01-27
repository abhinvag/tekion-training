import React from 'react'
import { COMMENT } from './constants'

function ReplyButton({updateShowAddReplyToggle = () => {}, setCurrCommentID = () => {}, comment=COMMENT}) {

    const handleClick = () => {
        updateShowAddReplyToggle(true)
        setCurrCommentID(comment.id)
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