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
            <div className="preview">
                <span className="preview--title">{title}</span>
                <span className="preview--creator">{author}</span>
                <p className="preview--description">
                    {description}
                </p>
                <span className="preview--price">{price} BYN</span>
            </div>
        </Link>
    )
}

export default CoursePreview