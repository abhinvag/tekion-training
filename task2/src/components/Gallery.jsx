import React from 'react'
import { CURR_POST_ID, POSTS, POST_IMAGE_URL } from './constants'
import { useSelector, useDispatch } from 'react-redux';
import {updateCurrPostID} from "../actions"

function Gallery() {

    const posts = useSelector(state => state[POSTS]);
    const currPostID = useSelector(state => state[CURR_POST_ID])

    const dispatch = useDispatch();

    const getHandleClick = (id) =>  () => {
        dispatch(updateCurrPostID(id))
    }

  return (
    <div className='gallery_div'>
        {Object.keys(posts).map((id) => (
            <img 
                className={id == currPostID ? 'gallery_image gallery_image_selected' : 'gallery_image' }
                src={posts[id][POST_IMAGE_URL]} 
                onClick={getHandleClick(id)}
            />
        ))}
    </div>
  )
}

export default Gallery