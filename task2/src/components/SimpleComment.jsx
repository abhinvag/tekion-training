import React from 'react'
import {USER_NAME, USER_IMAGE, USER_COMMENT, DATE, COMMENT } from './constants';

function SimpleComment({comment=COMMENT}) {
  return (
    <div className='commentSection_userCommentDiv'>
        <img className="userCommentDiv_userImage" src={comment[USER_IMAGE]} />
        <div className="userCommentDiv_detailsDiv">
            <div className="userCommentDiv_detailsDiv_personal">
                <p><b>{comment[USER_NAME]}</b></p>
                <p>{comment[DATE]}</p>
            </div>
            <div className="userCommentDiv_detailsDiv_comment">
                {comment[USER_COMMENT]}
            </div>
        </div>
    </div>
  )
}

export default SimpleComment