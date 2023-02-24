import React, {useState} from 'react';
import {POST_IMAGE_URL} from '../constants';
import "../styles/addPost.css"

function AddPost({addPost = () => {}}) {

    const [imageURL, setImageURL] = useState("");
    const [validationError, setValidationError] = useState("");

    const updateImageURL = (e) => {
        setImageURL(e.target.value);
    }

    const validate = (imageURL) => {

        let isValid = true;
        
        if(imageURL.trim().length == 0){
            setValidationError("This field cannot be empty !");
            isValid = false;
        }
        
        return isValid;
    }

    const handleClick = () => {
        if(validate(imageURL)){
            addPost(imageURL);
            setImageURL("")
        };
    }

    const handleFocus = () => {
        setValidationError("");
    }

  return (
    <div className='addPost'>
        <h2 className='addPost-h2'>Add New Post</h2>
        <input 
            name={POST_IMAGE_URL}
            value={imageURL}
            placeholder='Enter Image URL'
            onChange={updateImageURL}
            onFocus={handleFocus}
            className='addPost-input'
        />
        {validationError != "" && (
            <span className='error'>{validationError}</span>
        )}
        <button 
            className='button--purple'
            type='submit'
            onClick={handleClick}
        >  
            Add Post
        </button>
    </div>
  )
}

export default AddPost