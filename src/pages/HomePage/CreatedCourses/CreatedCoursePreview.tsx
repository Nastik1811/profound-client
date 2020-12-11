import React from 'react'
import { Link } from 'react-router-dom'

type CoursePreviewProps = {
    id: string,
    title: string,
    author: string
}

const CreatedCoursePreview : React.FC<CoursePreviewProps> = ({id, title, author}) => {
    return(
        <Link className="created-course-preview" to={`/overview/${id}`}>
            <div className="p-info">
                <span className="p-title">{title}</span>
                <span></span>
            </div>
        </Link>
    )
}

export default CreatedCoursePreview