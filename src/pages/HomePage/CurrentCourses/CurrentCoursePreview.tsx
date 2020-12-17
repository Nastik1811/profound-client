import React from 'react'
import { Link } from 'react-router-dom'
import ProgressBar from '../../../components/ProgressBar'

type CoursePreviewProps = {
    id: string,
    title: string,
    author: string,
    progress: number
}

const CurrentCoursePreview : React.FC<CoursePreviewProps> = ({id, title, author, progress}) => {
    return(
        <Link className="current-course-preview current-preview" to={`/overview/${id}`}>
                <span className="preview--title">{title}</span>
                <span className="preview--creator">{author}</span>
                <ProgressBar percentage={progress}/>
        </Link>
    )
}

export default CurrentCoursePreview