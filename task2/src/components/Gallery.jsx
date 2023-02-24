import React from 'react'
import { POST_ID, POST_IMAGE_URL } from '../constants'
import "../styles/gallery.css"

function Gallery({
    posts = [], 
    currPostID = "", 
    updateCurrPostID = () => {}
}) {

    const getHandleClick = (id) =>  () => {
        updateCurrPostID(id);
    }

  return (
    <div className='gallery'>
        {posts.map((post) => (
            <img 
                className={post[POST_ID] == currPostID ? 'gallery-image gallery-image--selected' : 'gallery-image' }
                src={post[POST_IMAGE_URL]} 
                onClick={getHandleClick(post[POST_ID])}
            />
        ))}
    </div>
  )
}   

export default Gallery