import React, { PropsWithChildren } from 'react'

function ModalContainer({children}:PropsWithChildren) {
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
        {children}
    </div>
  )
}

export default ModalContainer