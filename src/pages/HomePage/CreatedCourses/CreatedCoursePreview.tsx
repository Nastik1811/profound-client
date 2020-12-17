import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'

type CoursePreviewProps = {
    id: string,
    title: string,
    status: string,
    description?: string
}

const CreatedCoursePreview : React.FC<CoursePreviewProps> = ({id, title, status, description}) => {
    return(
        <Link className={clsx("created-course-preview", status)} to={`/overview/${id}`}>
                <span className="preview--title">{title}</span>
                 <span className="preview--description">{description}</span>
                <span className={clsx("preview--status", status)}>{status}</span>
        </Link>
    )
}

export default CreatedCoursePreview