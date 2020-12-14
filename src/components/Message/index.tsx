import React from 'react'

const Message: React.FC<{message: string}> = ({message}) => {
    return(
        <div className="message">
            {message}
        </div>
    )
}

export default Message