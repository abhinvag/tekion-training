import React, {useState, useEffect} from 'react'
import AddComment from './AddComment';
import CommentSection from './CommentSection';
import { POST, POST_COMMENTS, POST_IMAGE_URL, POSTS, CURR_POST_ID } from './constants';
import { useSelector } from 'react-redux';


function Post() {
        
  const posts = useSelector(state => state[POSTS]);
  const currPostID = useSelector(state => state[CURR_POST_ID])

  const [currPost, setCurrPost] = useState(POST);

  useEffect(() => {
    setCurrPost(posts[currPostID]);
  }, [currPostID, posts])

  return (
    <div className="mainDiv">
      <img className="mainDiv_image" src={currPost?.[POST_IMAGE_URL]}></img>
      <AddComment type="comment" />
      <CommentSection comments={currPost?.[POST_COMMENTS]} />
    </div>
  )
}

export default Post