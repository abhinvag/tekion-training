import React, {useEffect} from 'react'
import CommentSection from './CommentSection';
import { POST_COMMENTS, USER_ID, POST_ID } from '../constants';
import { AddCommentContainer } from '../containers/AddCommentContainer';
import { useNavigate } from 'react-router-dom';
import { PostDetailsContainer } from '../containers/PostDetailsContainer';

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
      <PostDetailsContainer 
        user={user} 
        post={post}
      />
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