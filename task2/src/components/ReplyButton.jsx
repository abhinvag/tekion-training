import React from 'react'

function ReplyButton({
  updateShowAddReplyToggle = () => {}, 
  showAddReplyToggle=false,
}) {

    const handleClick = () => {
        updateShowAddReplyToggle(!showAddReplyToggle)
    }

  return (
    <button
        className='button-icon button-icon--purple replyButton'
        onClick={handleClick}
    >
        <i className="fa fa-solid fa-reply"></i> Reply 
    </button>
  )
}

export default ReplyButton