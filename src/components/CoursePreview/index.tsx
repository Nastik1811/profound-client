import React from 'react'

type CoursePreviewProps = {
    title: string,
    author: string,
    description?: string,
    price?: string,
    onClick: () => void
}

const CoursePreview : React.FC<CoursePreviewProps> = ({title, author, description, price, onClick}) => {
    return(
        <div className="course-preview" onClick={onClick}>
            <div className="p-info">
                <h4 className="p-title">{title}</h4>
                <span className="p-creator">{author}</span>
                <p className="p-description">
                    {description}
                </p>
                <span className="p-price">{price}</span>
            </div>
        </div>
    )
}

export default CoursePreview