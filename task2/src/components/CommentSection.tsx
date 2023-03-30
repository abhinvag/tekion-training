import React, {useState, useEffect} from 'react'
import CommentWithReply from './CommentWithReply';
import {COMMENT_ID} from '../constants';
import ModalContainer from './ModalContainer';
import {DeleteModalContainer} from "../containers/DeleteModalContainer"
import { useParams } from 'react-router-dom';
import { Comment } from '../types';

type CommentSectionProps = {
    comments: Comment[] | undefined;
    currPostID: string | undefined
}

function CommentSection({
    comments,
    currPostID
}:CommentSectionProps) {

    const params = useParams();

    const [showCommentsToggle, setShowCommentsToggle] = useState(true);
    
    const [showModal, setShowModal] = useState(false);
    const [currCommentID, setCurrCommentID] = useState<{parentCommentId: string, commentID:string}>({
        parentCommentId: "",
        commentID: ""
    });

    const updateShowCommentsToggle = () => {
        setShowCommentsToggle(!showCommentsToggle);
    }

    const updateModal = () => {
        setShowModal(!showModal);
    }
    
    useEffect(() => {
      const commentId = params.commentId;
      let commentElement = null;
      if(commentId != undefined) commentElement = document.getElementById(commentId);
      if(commentElement != null){
        commentElement.scrollIntoView({ behavior: 'smooth', block: "center" });
      }else{
        updateShowCommentsToggle();
      }
    }, [])
    

  return (
    <>
        <a 
            onClick={updateShowCommentsToggle} 
            className="showHideCommentsButton"
        >
            {showCommentsToggle ? (
                <>
                    Hide Comments <i className="fa fa-light fa-angle-up"></i>
                </>
            ):(
                <>
                    Show Comments <i className="fa fa-light fa-angle-down"></i>
                </>
            )}
        </a>
        <div className='commentsSection'>
            {showCommentsToggle && (
                <>
                    {comments !== undefined && comments.length > 0 ? (
                        <>
                        {comments.map((comment) => (
                            <CommentWithReply 
                                comment={comment}
                                updateModal={updateModal}
                                currCommentID={currCommentID}
                                currPostID={currPostID}
                                setCurrCommentID={setCurrCommentID}
                                key={`commentWithReply-${comment[COMMENT_ID]}`}
                            />
                        ))}
                        </>
                    ):(
                        <div className='noComments'>No comments yet :-(</div>
                    )}
                </>
            )}
        </div>
        {showModal && (
            <ModalContainer>
                <DeleteModalContainer
                    updateModal={updateModal}
                    currCommentID={currCommentID}
                    currPostID={currPostID}
                />
            </ModalContainer>
        )}
    </>
  )
}

export default CommentSection