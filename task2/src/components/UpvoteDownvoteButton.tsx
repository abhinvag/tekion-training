import React from 'react'

type UpvoteDownvoteButtonProps = {
    handleIncrement: (commentId: string) => void;
    handleDecrement: (commentId: string) => void;
    votes: React.ReactNode;
    id: string | undefined
}

function UpvoteDownvoteButton({
    handleIncrement = () => {},
    handleDecrement = () => {},
    votes = 0,
    id = ""
}:UpvoteDownvoteButtonProps) {

    const handleIncrementClick = (event:React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        handleIncrement(id)
    }

    const handleDecrementClick = (event:React.MouseEvent<HTMLElement>) => {
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