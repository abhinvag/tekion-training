import React from 'react'
import { POST_ID, USER_ID } from '../constants'
import { useNavigate } from 'react-router-dom'
import { PostDetailsContainer } from '../containers/PostDetailsContainer';

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
                <PostDetailsContainer
                    user={users[post[USER_ID]]}
                    post={post}
                />
            </div>
        ))}
    </div>
  )
}   

export default Gallery