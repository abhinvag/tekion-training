import React, {useState} from 'react'
import { POST_IMAGE_URL, POST_TEXT, USER_NAME, USER_IMAGE, USER_ID, POST_VOTES, POST_ID } from '../constants';
import UpvoteDownvoteButton from './UpvoteDownvoteButton';

function PostDetails({
    post={}, 
    user={},
    incrementPostVotes = () => {},
    decrementPostVotes = () => {}
}) {
    
    const handleIncrement = (id) => {
        incrementPostVotes(id)
    }

    const handleDecrement = (id) => {
        decrementPostVotes(id)
    }

  return (
    <div className="postDetails">
        <UpvoteDownvoteButton 
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            votes={post[POST_VOTES]}
            id={post[POST_ID]}
        />
        <div className='postDetails-right'>
            <div className="postDetails-top">
            <img className='postDetails-userImage' src={user[USER_IMAGE]} ></img>
            <div className='postDetails-user'>
                <p className='postDetails-userName'>{user[USER_NAME]}</p>
                <p className='postDetails-userID p--gray'>@{user[USER_ID]}</p>
            </div>
            </div>
            <p className='postDetails-postText'> {post[POST_TEXT]}</p>
            {post[POST_IMAGE_URL] !== "" && (
            <img className="postDetails-postImage" src={post?.[POST_IMAGE_URL]}></img>
            )}
        </div>
    </div>
  )
}

export default PostDetails