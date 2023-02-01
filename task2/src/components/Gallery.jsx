import React from 'react'
import { CURR_POST_ID, POSTS, POST_ID, POST_IMAGE_URL } from '../constants'
import { useSelector, useDispatch } from 'react-redux';
import {updateCurrPostID} from "../store/curr-post/actions"

function Gallery() {

    const posts = useSelector(state => state[POSTS]);
    const currPostID = useSelector(state => state[CURR_POST_ID])

    const dispatch = useDispatch();

    const getHandleClick = (id) =>  () => {
        dispatch(updateCurrPostID(id))
    }

  return (
    <div className='gallery_div'>
        {posts.map((post) => (
            <img 
                className={post[POST_ID] == currPostID ? 'gallery_image gallery_image_selected' : 'gallery_image' }
                src={post[POST_IMAGE_URL]} 
                onClick={getHandleClick(post[POST_ID])}
            />
        ))}
    </div>
  )
}

export default Gallery