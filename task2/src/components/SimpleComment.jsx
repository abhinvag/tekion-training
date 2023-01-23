import React from 'react'

function SimpleComment(props) {
  return (
    <div className='commentSection_userCommentDiv'>
        <img className="userCommentDiv_userImage" src={props.userImage} />
        <div className="userCommentDiv_detailsDiv">
            <div className="userCommentDiv_detailsDiv_personal">
                <p><b>{props.userName}</b></p>
                <p>{props.date}</p>
            </div>
            <div className="userCommentDiv_detailsDiv_comment">
                {props.userComment}
            </div>
        </div>
    </div>
  )
}

export default SimpleComment