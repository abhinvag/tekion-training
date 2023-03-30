import React from 'react'

type ReplyButtonProps = {
  updateShowAddReplyToggle: (state: boolean) => void;
  showAddReplyToggle: boolean
}

function ReplyButton({
  updateShowAddReplyToggle = () => {}, 
  showAddReplyToggle=false,
}:ReplyButtonProps) {

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