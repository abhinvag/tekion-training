import React, {useState, useEffect} from 'react'
import AddComment from './AddComment';
import CommentSection from './CommentSection';
import {updatePostsOnLocalStorage} from "./helper";
import { POST, POST_ID, POST_COMMENTS, POST_IMAGE_URL } from './constants';


function Post({currPostID = "", posts={}}) {
        
  const [currPost, setCurrPost] = useState(POST);

  useEffect(() => {
    setCurrPost(posts[currPostID]);
  }, [currPostID, posts])

  const updateComments = (newCommentsArray) => {
      let post = JSON.parse(JSON.stringify(currPost));
      post[POST_COMMENTS] = newCommentsArray;
      updatePostsOnLocalStorage(currPost[POST_ID], post, posts);
      setCurrPost(post);
  }
     

  return (
    <div className="mainDiv">
      <img className="mainDiv_image" src={currPost?.[POST_IMAGE_URL]}></img>
      <AddComment type="comment" updateComments={updateComments} comments={currPost?.[POST_COMMENTS]} />
      <CommentSection comments={currPost?.[POST_COMMENTS]} updateComments={updateComments} />
    </div>
  )
}

export default Post