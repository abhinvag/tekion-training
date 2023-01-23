import React, {useState, useEffect} from 'react'
import AddComment from './AddComment';
import CommentWithReply from './CommentWithReply';
import ReplyButton from './ReplyButton';
import SimpleComment from './SimpleComment';

function CommentSection(props) {

    const [comments, setComments] = useState(props.comments);
    const [showCommentsToggle, setShowCommentsToggle] = useState(false);
    const [showAddReplyToggle, setShowAddReplyToggle] = useState(false);
    const [currCommentID, setCurrCommentID] = useState();

    // useEffect(() => {
    //     let comments = localStorage.getItem("comments");
    //     setComments(JSON.parse(comments))
    //     //console.log(comments);
    // }, [])

    const updateShowAddReplyToggle = (state) => {
        setShowAddReplyToggle(state);
    }
    

  return (
    <>
        {showCommentsToggle ? (
            <>
                <a 
                id="hideButton" 
                onClick={() => {
                    setShowCommentsToggle(false);
                }} 
                className="showHideCommentsButton"
                >
                    Hide Comments <i className="fa fa-light fa-angle-up"></i>
                </a>
                {props.comments.map((comment) => (
                    <>
                        {comment.replies.length ===  0 ? (
                            <div style={{width: "100%"}}>
                                <SimpleComment
                                    userName = {comment.userName}
                                    userImage = {comment.userImage}
                                    userComment = {comment.userComment}
                                    date = {comment.date}
                                />
                                <ReplyButton
                                    updateShowAddReplyToggle={updateShowAddReplyToggle}
                                    setCurrCommentID={setCurrCommentID}
                                    comment={comment}
                                />
                                {(showAddReplyToggle && comment.id == currCommentID) && (
                                    <AddComment
                                        type="reply"
                                        updateShowAddReplyToggle={updateShowAddReplyToggle}
                                        comment={comment}
                                        updateComments={props.updateComments}
                                    />
                                )}
                            </div>
                        ):(
                            <>
                                <CommentWithReply 
                                    userName = {comment.userName}
                                    userImage = {comment.userImage}
                                    userComment = {comment.userComment}
                                    date = {comment.date}
                                    replies = {comment.replies}
                                    id={comment.id}
                                    updateComments={props.updateComments}
                                />
                            </>
                        )}
                    </>
                ))}
            </>
        ):(
            <a 
            id="showButton" 
            onClick={() => {
                setShowCommentsToggle(true);
            }} 
            className="showHideCommentsButton"
            >
                Show Comments <i className="fa fa-light fa-angle-down"></i>
            </a>
        )}
    </>
  )
}

export default CommentSection