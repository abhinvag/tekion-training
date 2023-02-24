import React, {useState} from 'react'
import { COMMENT, COMMENT_ID } from '../constants'

function ReplyButton({
  updateShowAddReplyToggle = () => {}, 
  setCurrCommentID = () => {}, 
  comment=COMMENT
}) {

  const [toggle, setToggle] = useState(true)

    const handleClick = () => {
        updateShowAddReplyToggle(toggle)
        setCurrCommentID(comment[COMMENT_ID])
        setToggle(!toggle)
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