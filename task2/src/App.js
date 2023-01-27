import { useState, useEffect } from 'react';
import './App.css';
import Gallery from './components/Gallery';
import Post from './components/Post';
import AddPost from './components/AddPost'
import data from "./data.json";
import { POST_ID } from './components/constants';
import { updatePostsOnLocalStorage } from './components/helper';

function App() {

  const [currPostID, setCurrPostID] = useState("id");
  const [posts, setPosts] = useState({});
  
  useEffect(() => {
    
    let localPosts = JSON.parse(localStorage.getItem("posts"));
    
    if(localPosts == null){
      localStorage.setItem("posts", JSON.stringify(data));
      setPosts(JSON.stringify(data));
    }
    else{
      setPosts(localPosts);
    }
  
  }, [])

  const updateCurrPostID = (id) => {
    setCurrPostID(id);
  }

  const updatePosts = (newPost) => {
    let newPostObj = JSON.parse(JSON.stringify(posts));
    newPostObj[newPost[POST_ID]] = newPost;
    updatePostsOnLocalStorage("", {}, newPostObj);
    setPosts(newPostObj);
  }

  return (
    <>
      <h1 className='main_heading'>Global Image Book</h1>
      <div className='wall'>
        <Gallery posts={posts} updateCurrPostID={updateCurrPostID} currPostID={currPostID} />
        <Post currPostID={currPostID} posts={posts} />
        <AddPost posts={posts} updatePosts={updatePosts} />
      </div>
    </>
  );
}

export default App;
