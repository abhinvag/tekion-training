import React from 'react'

function DeleteModal({
    updateModal = () => {}
}) {
  return (
    <div className='deleteModal'>
        <h3>Delete comment</h3>
        <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
        <div className='deleteModal-buttonsDiv'>
            <button 
                onClick={updateModal}
                className="deleteModal-buttonsDiv-cancel"
            >
                NO, CANCEL
            </button>
            <button
                className='deleteModal-buttonsDiv-delete'
            >YES, DELETE</button>
        </div>
    </div>
  )
}

export default DeleteModal