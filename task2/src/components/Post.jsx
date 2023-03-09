import React from 'react'
import CommentSection from './CommentSection';
import { POST, POST_COMMENTS, POST_IMAGE_URL, POST_TEXT, USER_NAME, USER_IMAGE, USER_ID, POST_ID } from '../constants';
import { AddCommentContainer } from '../containers/AddCommentContainer';
import "../styles/post.css"

function Post({post = {}, user = {}}) {
        
  return (
    <div className="post">
      <div className="postDetails">
        <div className="postDetails-top">
          <img className='postDetails-userImage' src={user[USER_IMAGE]} ></img>
          <div className='postDetails-user'>
            <p className='postDetails-userName'>{user[USER_NAME]}</p>
            <p className='postDetails-userID p--gray'>@{user[USER_ID]}</p>
          </div>
        </div>
        <p>{post[POST_TEXT]}</p>
        <img className="postDetails-postImage" src={post?.[POST_IMAGE_URL]}></img>
      </div>
      <CommentSection comments={post?.[POST_COMMENTS]} key={`commentSection-${post[POST_ID]}`}/>
      <AddCommentContainer type="comment" key={`addComment-${post[POST_ID]}`} />
    </div>
  )
}

export default Post