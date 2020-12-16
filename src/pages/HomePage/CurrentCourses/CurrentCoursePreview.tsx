import React from 'react'
import { Link } from 'react-router-dom'
import ProgressBar from '../../../components/ProgressBar'

type CoursePreviewProps = {
    id: string,
    title: string,
    author: string,
    lessons_number: number,
    passed_lessons_number: number
}

const CurrentCoursePreview : React.FC<CoursePreviewProps> = ({id, title, author, lessons_number, passed_lessons_number}) => {
    return(
        <Link className="current-course-preview current-preview" to={`/overview/${id}`}>
                <span className="preview--title">{title}</span>
                <span className="preview--creator">{author}</span>
                <ProgressBar percentage={80}/>
        </Link>
    )
}

export default CurrentCoursePreview