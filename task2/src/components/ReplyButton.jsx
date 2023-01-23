import React from 'react'

function ReplyButton(props) {

    const handleClick = () => {
        props.updateShowAddReplyToggle(true)
        props.setCurrCommentID(props.comment.id)
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