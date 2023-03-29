import React, {useState} from 'react'
import {USER_NAME, USER_IMAGE, USER_COMMENT, DATE, COMMENT, VOTES, INCREMENT_VOTES, DECREMENT_VOTES, COMMENT_ID, USER_ID } from '../constants';
import ReplyButton from './ReplyButton';
import {AddCommentContainer} from "../containers/AddCommentContainer"
import UpvoteDownvoteButton from './UpvoteDownvoteButton';

function SimpleComment({
  comment=COMMENT,
  setCurrCommentID = () => {},
  commentAuthor="",
  updateModal = () => {},
  incrementVotes = () => {},
  decrementVotes = () => {},
  editCommentRedux = () => {},
  currPostID = "",
  currUserID = "",
  user = {},
  parentCommentId="root"
}) {

  const [editComment, setEditComment] = useState(false)
  const [newComment, setNewComment] = useState();
  const [showAddReplyToggle, setShowAddReplyToggle] = useState(false);

  const updateEditComment = (comment) => () => {
    setEditComment(!editComment);
    setNewComment(comment)
  }

  const updateShowAddReplyToggle = (state) => {
    setShowAddReplyToggle(state);
  }

  const handleIncrement = (commentId) => {
      incrementVotes(currPostID, commentId)
  }

  const handleDecrement = (commentId) => {
    decrementVotes(currPostID, commentId)
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
    <div className='comment' id={comment[COMMENT_ID]}>
      <div className='userComment'>
          <UpvoteDownvoteButton 
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            votes={comment[VOTES]}
            id={comment[COMMENT_ID]}
          />
          <div className='userCommentRight'>
            <div className="userCommentRightTop">
              <div className='userCommentRightTop-details'>
                <img className="userComment-image" src={user[USER_IMAGE]} />
                <div>
                  <p className="userCommentRightTop-p"><b>{user[USER_NAME]}</b></p>
                  <p className="userCommentRightTop-p p--gray">@{user[USER_ID]}</p>
                </div>
                {user[USER_ID] == currUserID && (
                  <div className='youdiv'>you</div>
                )}
                <p className="userCommentRightTop-p">{comment[DATE]}</p>
              </div>
              {user[USER_ID] == currUserID ? (
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
                    showAddReplyToggle={showAddReplyToggle}
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
                    <div className='userCommentUpdate'>
                      <button 
                        className="userCommentUpdate-button" 
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
          </div>
      </div>
        {showAddReplyToggle &&  (
          <AddCommentContainer
              type="reply"
              updateShowAddReplyToggle={updateShowAddReplyToggle}
              comment={comment}
              key={comment[COMMENT_ID]}
              currPostID = {currPostID}
          />
        )}
    </div>
  )
}

export default SimpleComment