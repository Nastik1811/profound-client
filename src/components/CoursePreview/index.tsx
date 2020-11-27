import React from 'react'

type CoursePreviewProps = {
    title: string,
    creator: string,
    description?: string,
    price?: string,
    onClick: () => void
}

const CoursePreview : React.FC<CoursePreviewProps> = ({title, creator, description, price, onClick}) => {
    return(
        <div className="course-preview" onClick={onClick}>
            <div className="p-info">
                <h4 className="p-title">{title}</h4>
                <span className="p-creator">{creator}</span>
                <p className="p-description">
                    {description}
                </p>
                <span className="p-price">{price}</span>
            </div>
        </div>
    )
}

export default CoursePreview