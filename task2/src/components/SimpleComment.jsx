import React, {useState} from 'react'
import {USER_NAME, USER_IMAGE, USER_COMMENT, DATE, COMMENT, VOTES, INCREMENT_VOTES, DECREMENT_VOTES, COMMENT_ID } from '../constants';
import ReplyButton from './ReplyButton';
import "../styles/simpleComment.css"

function SimpleComment({
  comment=COMMENT,
  updateShowAddReplyToggle = () => {},
  setCurrCommentID = () => {},
  showRepliesButton = false,
  showRepliesToggle = false,
  updateShowRepliesToggle = () => {},
  commentAuthor="",
  updateModal = () => {},
  incrementVotes = () => {},
  decrementVotes = () => {},
  editCommentRedux = () => {},
  currPostID = "",
  parentCommentId="root"
}) {

  const currUser = "Jeremy Renner"; 

  const [editComment, setEditComment] = useState(false)
  const [newComment, setNewComment] = useState();

  const updateEditComment = (comment) => () => {
    setEditComment(!editComment);
    setNewComment(comment)
  }

  const handleIncrementDecrement = (id, type) => () => {
    if(type == INCREMENT_VOTES){
      incrementVotes(currPostID, id)
    }
    else if(type == DECREMENT_VOTES){
      decrementVotes(currPostID, id)
    }
  }

  const handleDeleteClick = (commentId) => () => {
    updateModal();
    setCurrCommentID({parentCommentId, [COMMENT_ID]: commentId});
  }

  const handleNewCommentEdit = (e) => {
    setNewComment(e.target.value);
  }

  const handleCommentUpdate = () => {
    console.log(newComment);
    editCommentRedux(currPostID, comment[COMMENT_ID], newComment);
    setEditComment(!editComment)
  }

  return (
    <div className='userComment'>
        <div className='userCommentLeft'>
          <button
            className='userCommentLeft-button'
            onClick={handleIncrementDecrement(comment[COMMENT_ID], INCREMENT_VOTES)}
          >
            +
          </button>
          <span className='userCommentLeft-span'><b>{comment[VOTES]}</b></span>
          <button
            className='userCommentLeft-button'
            onClick={handleIncrementDecrement(comment[COMMENT_ID], DECREMENT_VOTES)}
          >
            -
          </button>
        </div>
        <div className='userCommentRight'>
          <div className="userCommentRightTop">
            <div className='userCommentRightTop-details'>
              <img className="userComment-image" src={comment[USER_IMAGE]} />
              <p className="userCommentRightTop-p"><b>{comment[USER_NAME]}</b></p>
              {comment[USER_NAME] == currUser && (
                <div className='youdiv'><b>you</b></div>
              )}
              <p className="userCommentRightTop-p">{comment[DATE]}</p>
            </div>
            {comment[USER_NAME] == currUser ? (
              <div>
                <button
                    className='deleteButton button-icon button-icon--red'
                    onClick={handleDeleteClick(comment[COMMENT_ID])}
                  
                >
                    <i className="fa fa-solid fa-trash"></i> Delete 
                </button>
                <button
                    className='editButton button-icon button-icon--purple'
                    onClick={updateEditComment(comment[USER_COMMENT])}
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
          <div className="userComment-comment">
              {editComment ? (
                <div className='updateCommentDiv'> 
                  <textarea 
                    id="userComment" 
                    rows="4" cols="50" 
                    value={newComment}
                    className="updateCommentTextarea"
                    onChange={handleNewCommentEdit}
                  />
                  <div className='updateCommentButtonDiv'>
                    <button 
                      className="updateCommentButton" 
                      type="submit" 
                      onClick={handleCommentUpdate}
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