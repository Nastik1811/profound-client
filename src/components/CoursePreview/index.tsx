import React from 'react'
import { Link } from 'react-router-dom'

type CoursePreviewProps = {
    id: string,
    title: string,
    author: string,
    description?: string,
    price?: string
}

const CoursePreview : React.FC<CoursePreviewProps> = ({id, title, author, description, price}) => {
    return(
        <Link className="course-preview" to={`/overview/${id}`}>
            <div className="p-info">
                <span className="p-title">{title}</span>
                <span className="p-creator">{author}</span>
                <p className="p-description">
                    {description}
                </p>
                <span className="p-price">{price}</span>
            </div>
        </Link>
    )
}

export default CoursePreview