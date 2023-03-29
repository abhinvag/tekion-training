import React, {useState, useEffect} from 'react';
import {POST_IMAGE_URL, POST, USER_ID, POST_TEXT} from '../constants';

function AddPost({
    addPost = () => {},
    currentUser = {}
}) {

    const [post, setPost] = useState(POST);
    const [shareDisabled, setShareDisabled] = useState(true);

    useEffect(() => {
        post[USER_ID] = currentUser[USER_ID]
    }, [])
    
    useEffect(() => {
        if(post[POST_IMAGE_URL] == "" && post[POST_TEXT] == ""){
            setShareDisabled(true);
        }
        else{
            setShareDisabled(false);
        }
    }, [post])

    const updatePost = (e) => {
        const {name, value} = e.target;
        setPost((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }
    
    const handleClick = () => {
        addPost(post);
        setPost(POST)
    }
    
  return (
    <div className='addPost'>
        <h2 className='addPost-h2'>What's happening ?</h2>
        <div className='addPost-input'>
            <input 
                name={POST_IMAGE_URL}
                value={post[POST_IMAGE_URL]}
                placeholder='Add image URL ..'
                onChange={updatePost}
            />
        </div>
        <textarea  
            rows="4" cols="50" 
            placeholder="Add some text .." 
            name={POST_TEXT} 
            value={post[POST_TEXT]}
            onChange={updatePost}
            className="addPost-input addPost-textarea"
        />
        <button 
            className= {shareDisabled ? 'button--purple button--disabled' : 'button--purple'} 
            type='submit'
            onClick={handleClick}
            disabled={shareDisabled}
        >  
            SHARE
        </button>
    </div>
  )
}

export default AddPost