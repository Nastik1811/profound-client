import React from 'react'

type ProgressBarPropsType = {
    percentage: number
}

const ProgressBar:React.FC<ProgressBarPropsType> = ({percentage}) => {
    return(
        <div className="progress">
            <div className="progress--label">
                <span> {percentage}% completed </span>
            </div>
            <div className="progress-bar">
                <div className="progress--entire" >
                </div>
                <div className="progress--completed" style={{width: `${percentage}%`}} data-completed={percentage}>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar