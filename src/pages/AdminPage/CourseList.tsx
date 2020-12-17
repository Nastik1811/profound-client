import React from 'react'
import { ICoursePreview } from '../../types'
import CoursePreview from './CoursePreview'


type CourseListProps = {
    courses: ICoursePreview[],

}

const CourseList: React.FC<CourseListProps> = ({courses}) => {
    return(
        <div className="admin-courses-list">
            {
                courses?.map(c => <CoursePreview
                    key={c.id}
                    id={c.id}
                    title= {c.title}
                    author={`${c.creator.firstName} ${c.creator.lastName}`}
                    published={c.publishedAt}
                    status={c.status}
                />)
            }
        </div>
    )
}

export default CourseList