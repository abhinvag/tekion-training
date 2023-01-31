import React, {useState} from 'react';
import { POST, POST_ID ,POST_IMAGE_URL} from './constants';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import {addPost} from "../actions";

function AddPost() {

    const [imageURL, setImageURL] = useState("");
    const [validationError, setValidationError] = useState("");

    const dispatch = useDispatch();

    const updateImageURL = (e) => {
        setImageURL(e.target.value);
    }

    const validate = (newPost) => {

        let isValid = true;
        
        if(newPost[POST_IMAGE_URL].trim().length == 0){
            setValidationError("This field cannot be empty !");
            isValid = false;
        }
        // else if(!checkImage(commentState[USER_IMAGE])){
        //     setValidationError("This is not a valid image URL !");
        //    isValid = false;
        // }
        
        return isValid;
    }

    const handleClick = () => {
        let newPost = POST;
        newPost[POST_IMAGE_URL] = imageURL;
        newPost[POST_ID] = nanoid();
        if(validate(newPost)){
            dispatch(addPost(newPost));
            setImageURL("")
        };
    }

    const handleFocus = () => {
        setValidationError("");
    }

  return (
    <div className='addPostDiv'>
        <h2>Add New Post</h2>
        <input 
            name={POST_IMAGE_URL}
            value={imageURL}
            placeholder='Enter Image URL'
            onChange={updateImageURL}
            onFocus={handleFocus}
        />
        {validationError != "" && (
            <span className='error'>{validationError}</span>
        )}
        <button 
            className='addCommentButton'
            type='submit'
            onClick={handleClick}
        >  
            Add Post
        </button>
    </div>
  )
}

export default AddPost