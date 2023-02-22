import React, {useState} from 'react'
import {USER_NAME, USER_IMAGE, USER_COMMENT, DATE, COMMENT } from '../constants';
import DeleteModal from './DeleteModal';
import ModalContainer from './ModalContainer';
import ReplyButton from './ReplyButton';

function SimpleComment({
  comment=COMMENT,
  updateShowAddReplyToggle = () => {},
  setCurrCommentID = () => {},
  showRepliesButton = false,
  showRepliesToggle = false,
  updateShowRepliesToggle = () => {},
  commentAuthor="",
  updateModal = () => {}
}) {

  const currUser = "Jeremy Renner"; 

  const [editComment, setEditComment] = useState(false)

  const updateEditComment = () => {
    setEditComment(!editComment)
  }

  return (
    <div className='userCommentDiv'>
        <div className='userCommentDiv-left'>
          <button>+</button>
          <span><b>5</b></span>
          <button>-</button>
        </div>
        <div className='userCommentDiv-right'>
          <div className="userCommentDiv-top">
            <div className='userCommentDiv-top-details'>
              <img className="userCommentDiv_userImage" src={comment[USER_IMAGE]} />
              <p><b>{comment[USER_NAME]}</b></p>
              {comment[USER_NAME] == currUser && (
                <div className='youdiv'><b>you</b></div>
              )}
              <p>{comment[DATE]}</p>
            </div>
            {comment[USER_NAME] == currUser ? (
              <div>
                <button
                    className='deleteButton'
                    onClick={updateModal}
                  
                >
                    <i className="fa fa-solid fa-trash"></i> Delete 
                </button>
                <button
                    className='editButton'
                    onClick={updateEditComment}
                >
                    <i className="fa fa-solid fa-pen"></i> Edit 
                </button>
              </div>
            ):(
              <>
                <ReplyButton
                  updateShowAddReplyToggle={updateShowAddReplyToggle}
                  setCurrCommentID={setCurrCommentID}
                  comment={comment}
                />
              </>
            )}
          </div>
          <div className="userCommentDiv-comment">
              {editComment ? (
                <div className='updateCommentDiv'> 
                  <textarea 
                    id="userComment" 
                    rows="4" cols="50" 
                    value={comment[USER_COMMENT]}
                    className="updateCommentTextarea"
                  />
                  <div className='updateCommentButtonDiv'>
                    <button 
                      className="updateCommentButton" 
                      type="submit" 
                    >
                      <b>UPDATE</b>
                    </button>
                  </div>
                </div>
              ):(
                <>
                  <b style={{"color": "rgba(75, 86, 210)"}}>{commentAuthor != "" && (`@${commentAuthor} `) }</b>
                  {comment[USER_COMMENT]}
                </>
              )}
          </div>
          {/* {showRepliesButton && (
            <>
                {showRepliesToggle ? (
                <button
                  className='showHideRepliesButton'
                  onClick={updateShowRepliesToggle}
                >
                    Hide Replies <i className="fa fa-light fa-angle-up"></i>
                </button>
              ):(
                <button
                      className='showHideRepliesButton'
                      onClick={updateShowRepliesToggle}
                  >
                      Show Replies <i className="fa fa-light fa-angle-down"></i>
                  </button>
              )}
            </>
          )} */}
        </div>
    </div>
  )
}

export default SimpleComment