import React from 'react'
import { POST_IMAGE_URL } from './constants'

function Gallery({posts = {}, updateCurrPostID = () => {}, currPostID = ""}) {

    const handleClick = (id) => {
        updateCurrPostID(id)
    }

  return (
    <div className='gallery_div'>
        {Object.keys(posts).map((id) => (
            <img 
                className={id == currPostID ? 'gallery_image gallery_image_selected' : 'gallery_image' }
                src={posts[id][POST_IMAGE_URL]} 
                onClick={() => {
                    handleClick(id)
                }}
            />
        ))}
    </div>
  )
}

export default Gallery