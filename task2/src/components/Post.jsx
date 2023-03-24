import React, {useEffect} from 'react'
import CommentSection from './CommentSection';
import { POST, POST_COMMENTS, POST_IMAGE_URL, POST_TEXT, USER_NAME, USER_IMAGE, USER_ID, POST_ID } from '../constants';
import { AddCommentContainer } from '../containers/AddCommentContainer';
import { useNavigate } from 'react-router-dom';

function Post({post = {}, user = {}}) {

  console.log(post);

  const navigate = useNavigate();

  useEffect(() => {
    if(post[POST_ID] == undefined || user[USER_ID] == undefined){
      navigate("/404");
    }
  }, [])
  
        
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
        <p className='postDetails-postText'> {post[POST_TEXT]}</p>
        {post[POST_IMAGE_URL] !== "" && (
          <img className="postDetails-postImage" src={post?.[POST_IMAGE_URL]}></img>
        )}
      </div>
      <CommentSection 
        key={`commentSection-${post[POST_ID]}`}
        comments={post?.[POST_COMMENTS]} 
        currPostID={post[POST_ID]}
      />
      <AddCommentContainer 
        key={`addComment-${post[POST_ID]}`} 
        type="comment" 
        currPostID={post[POST_ID]}
      />
    </div>
  )
}

export default Post