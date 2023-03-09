import React, {useState} from 'react'
import CommentWithReply from './CommentWithReply';
import {COMMENT_ID, COMMENT_REPLIES, DATE } from '../constants';
import { AddCommentContainer } from '../containers/AddCommentContainer';
import ModalContainer from './ModalContainer';
import { SimpleCommentContainer } from '../containers/SimpleCommentContainer';
import {DeleteModalContainer} from "../containers/DeleteModalContainer"
import "../styles/commentSection.css"

function CommentSection({comments=[]}) {

    const [showCommentsToggle, setShowCommentsToggle] = useState(false);
    
    const [showModal, setShowModal] = useState(false);
    const [currCommentID, setCurrCommentID] = useState();

    const updateShowCommentsToggle = () => {
        setShowCommentsToggle(!showCommentsToggle);
    }

    const updateModal = () => {
        setShowModal(!showModal);
    }
    

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
        {showCommentsToggle && (
            <>
                {comments.map((comment) => (
                    <CommentWithReply 
                        comment={comment}
                        updateModal={updateModal}
                        currCommentID={currCommentID}
                        setCurrCommentID={setCurrCommentID}
                        key={`commentWithReply-${comment[COMMENT_ID]}`}
                    />
                ))}
            </>
        )}

        {showModal && (
            <ModalContainer>
                <DeleteModalContainer
                    updateModal={updateModal}
                    currCommentID={currCommentID}
                />
            </ModalContainer>
        )}
    </>
  )
}

export default CommentSection