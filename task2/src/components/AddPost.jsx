import React, {useState} from 'react';
import {POST_IMAGE_URL, POST, USER_ID, POST_TEXT} from '../constants';
import "../styles/addPost.css"

function AddPost({
    addPost = () => {},
    users={}
}) {

    const [post, setPost] = useState(POST);

    const [validationErrorObj, setValidationErrorObj] = useState({
        [USER_ID]: "",
        [POST_IMAGE_URL]: "",
    })

    const updatePost = (e) => {
        const {name, value} = e.target;
        setPost((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    const validate = () => {

        let isValid = true;
        let tempValidationErrorObj = {};
        
        if(post[USER_ID].trim().length == 0){
            tempValidationErrorObj[USER_ID] = "This field cannot be empty !";
            isValid = false;
        }
        else if(users[post[USER_ID]] == undefined){
            console.log("hello");
            tempValidationErrorObj[USER_ID] = "Username does'nt exists !";
            isValid = false;
        }

        if(post[POST_IMAGE_URL].trim().length == 0){
            tempValidationErrorObj[POST_IMAGE_URL] = "This field cannot be empty !";
            isValid = false;
        }

        setValidationErrorObj(tempValidationErrorObj)
        
        return isValid;
    }

    const handleClick = () => {
        if(validate()){
            addPost(post);
            setPost(POST)
        };
    }

    const handleFocus = (e) => {
        setValidationErrorObj((prevValue) => {
            return {
                ...prevValue,
                [e.target.name]: "",
            }
        })
    } 

  return (
    <div className='addPost'>
        <h2 className='addPost-h2'>Add New Post</h2>
        <div className='addPost-input'>
            <input 
                name={USER_ID}
                value={post[USER_ID]}
                placeholder='Add your username ..'
                onChange={updatePost}
                onFocus={handleFocus}
            />
            {validationErrorObj[USER_ID] != "" && (
                <span className='error'>{validationErrorObj[USER_ID]}</span>
            )}
        </div>
        <div className='addPost-input'>
            <input 
                name={POST_IMAGE_URL}
                value={post[POST_IMAGE_URL]}
                placeholder='Add Image URL ..'
                onChange={updatePost}
                onFocus={handleFocus}
            />
            {validationErrorObj[POST_IMAGE_URL] != "" && (
                <span className='error'>{validationErrorObj[POST_IMAGE_URL]}</span>
            )}
        </div>
        <textarea  
            rows="4" cols="50" 
            placeholder="Add some text .." 
            name={POST_TEXT} 
            value={post[POST_TEXT]}
            onChange={updatePost}
            onFocus={handleFocus}
            className="addPost-input"
        />
        <button 
            className='button--purple'
            type='submit'
            onClick={handleClick}
        >  
            ADD
        </button>
    </div>
  )
}

export default AddPost