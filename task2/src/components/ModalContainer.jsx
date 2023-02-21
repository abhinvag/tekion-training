import React from 'react'

function ModalContainer(props) {
  return (
    <div 
        style={{
            "position": "fixed",
            "top": "0",
            "left": "0",
            "width": "100%",
            "height": "100%",
            "background": "rgba(0, 0, 0, 0.5)",
            "display": "flex",
            "justifyContent": "center",
            "alignItems": "center",
            "zIndex": "5"
        }}
    >
        {props.children}
    </div>
  )
}

export default ModalContainer