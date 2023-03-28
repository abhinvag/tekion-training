import React from 'react'

function UpvoteDownvoteButton({
    handleIncrement = () => {},
    handleDecrement = () => {},
    votes = 0,
    id = ""
}) {

    const handleIncrementClick = (event) => {
        event.stopPropagation();
        handleIncrement(id)
    }

    const handleDecrementClick = (event) => {
        event.stopPropagation();
        handleDecrement(id);
    }

  return (
    <div className='upvotedownvote'>
        <button
            className='upvotedownvote-button'
            onClick={handleIncrementClick}
        >
            +
        </button>
        <span className='upvotedownvote-span'><b>{votes}</b></span>
        <button
            className='upvotedownvote-button'
            onClick={handleDecrementClick}
        >
            -
        </button>
    </div>
  )
}

export default UpvoteDownvoteButton;