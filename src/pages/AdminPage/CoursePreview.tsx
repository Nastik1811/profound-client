import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'


type CoursePreviewProps = {
    id: string,
    author: string,
    title: string,
    published?: Date,
    price?: number,
    status: string
}


const CoursePreview: React.FC<CoursePreviewProps> = ({id, author, title, published, price, status}) => {
    return(
        <Link className={clsx("admin-preview", status)} to={`/admin/overview/${id}`}>
            <span className="preview--title">{title}</span>
            <span className="preview--creator">{author}</span>
            <span className="preview--published">{published}</span>
        </Link>
    )
}

export default CoursePreview