import React from 'react'


const LessonNavigation = () => {

    return(
        <div className="lesson-progress-container">
            <div className="step-indicator passed"></div>
            <div className="step-indicator passed"></div>
            <div className="step-indicator active"></div>
            <div className="step-indicator"></div>
        </div>
    )
}

export default LessonNavigation