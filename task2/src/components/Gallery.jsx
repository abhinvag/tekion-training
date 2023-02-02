import React from 'react'
import { POST_ID, POST_IMAGE_URL } from '../constants'

function Gallery({
    posts = [], 
    currPostID = "", 
    updateCurrPostID = () => {}
}) {

    const getHandleClick = (id) =>  () => {
        updateCurrPostID(id);
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