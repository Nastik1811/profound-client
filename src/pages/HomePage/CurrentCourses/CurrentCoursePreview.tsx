import React from 'react'
import { Link } from 'react-router-dom'

type CoursePreviewProps = {
    id: string,
    title: string,
    author: string,
    lessons_number: number,
    passed_lessons_number: number
}

const CurrentCoursePreview : React.FC<CoursePreviewProps> = ({id, title, author, lessons_number, passed_lessons_number}) => {
    return(
        <Link className="current-course-preview" to={`/overview/${id}`}>
            <div className="p-info">
                <span className="p-title">{title}</span>
                <span className="p-creator">{author}</span>
            </div>
        </Link>
    )
}

export default CurrentCoursePreview