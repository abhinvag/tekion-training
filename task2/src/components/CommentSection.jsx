import React, {useState} from 'react'
import CommentWithReply from './CommentWithReply';
import {COMMENT_ID} from '../constants';
import ModalContainer from './ModalContainer';
import {DeleteModalContainer} from "../containers/DeleteModalContainer"
import "../styles/commentSection.css"

function CommentSection({
    comments=[],
    currPostID=""
}) {

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
                        currPostID={currPostID}
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
                    currPostID={currPostID}
                />
            </ModalContainer>
        )}
    </>
  )
}

export default CommentSection