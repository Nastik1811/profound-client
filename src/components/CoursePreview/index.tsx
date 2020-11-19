import React from 'react'

interface CoursePreviewProps {
    title: string,
    creator: string,
    description?: string,
    price?: string,
    onClick: () => void
}

const CoursePreview = (props: CoursePreviewProps) => {
    return(
        <div className="course-preview" onClick={props.onClick}>
            <div className="p-info">
                <h4 className="p-title">{props.title}</h4>
                <span className="p-creator">{props.creator}</span>
                <p className="p-description">
                    {props.description}
                </p>
                <span className="p-price">{props.price}</span>
            </div>
        </div>
    )
}

export default CoursePreview