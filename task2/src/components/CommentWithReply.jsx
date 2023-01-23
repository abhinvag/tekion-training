import React, {useState} from 'react'
import ReplyButton from './ReplyButton';
import SimpleComment from './SimpleComment'
import AddComment from './AddComment';

function CommentWithReply(props) {

    const [showRepliesToggle, setShowRepliesToggle] = useState(false);
    const [showAddReplyToggle, setShowAddReplyToggle] = useState(false);
    const [currCommentID, setCurrCommentID] = useState();

    const updateShowAddReplyToggle = (state) => {
        setShowAddReplyToggle(state);
    }

  return (
    <div className='commentWithReply'>
        <SimpleComment 
            userName = {props.userName}
            userImage = {props.userImage}
            userComment = {props.userComment}
            date = {props.date}
        />
        <ReplyButton
            updateShowAddReplyToggle={updateShowAddReplyToggle}
            setCurrCommentID={setCurrCommentID}
            comment={props}
        />
        {(showAddReplyToggle && props.id == currCommentID) && (
            <AddComment
                type="reply"
                updateShowAddReplyToggle={updateShowAddReplyToggle}
                comment={props}
                updateComments={props.updateComments}
            />
        )}
        {props.replies.length > 0 && (
            <>
                {showRepliesToggle ? (
                    <>
                        <button
                            className='showHideRepliesButton'
                            onClick={() => {
                                setShowRepliesToggle(false);
                            }}
                        >
                            Hide Replies <i class="fa fa-light fa-angle-up"></i>
                        </button>
                        {props.replies.map((reply) => (
                            <div className='nestedComment'>
                                <CommentWithReply 
                                    userName = {reply.userName}
                                    userImage = {reply.userImage}
                                    userComment = {reply.userComment}
                                    date = {reply.date}
                                    replies = {reply.replies}
                                    id={reply.id}
                                    updateComments={props.updateComments}
                                />
                            </div>
                        ))}
                    </>
                ):(
                    <button
                        className='showHideRepliesButton'
                        onClick={() => {
                            setShowRepliesToggle(true);
                        }}
                    >
                        Show Replies <i class="fa fa-light fa-angle-down"></i>
                    </button>
                )}
            </>
        )}
        
    </div>
  )
}

export default CommentWithReply