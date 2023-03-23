import React from 'react'
import { POST_ID, POST_IMAGE_URL, USER_ID, USER_IMAGE, USER_NAME, POST_TEXT } from '../constants'
import { useNavigate } from 'react-router-dom'

function Gallery({
    posts = [], 
    users = {},
}) {

    const navigate = useNavigate();

    const getHandleClick = (id) =>  () => {
        navigate(`/post/${id}`);
    }

  return (
    <div className='gallery'>
        {posts.map((post) => (
            <div className="gallery-postDetails makeWhite" key={post[POST_ID]} onClick={getHandleClick(post[POST_ID])}>
                <div className="postDetails-top">
                <img className='postDetails-userImage' src={users[post[USER_ID]][USER_IMAGE]} ></img>
                <div className='postDetails-user'>
                    <p className='postDetails-userName'>{users[post[USER_ID]][USER_NAME]}</p>
                    <p className='postDetails-userID p--gray'>@{users[post[USER_ID]][USER_ID]}</p>
                </div>
                </div>
                <p>{post[POST_TEXT]}</p>
                <img className="postDetails-postImage" src={post[POST_IMAGE_URL]}></img>
            </div>
        ))}
    </div>
  )
}   

export default Gallery