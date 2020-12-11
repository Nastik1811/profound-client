import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ICoursePreview } from '../../../types'
import CurrentCoursePreview from './CurrentCoursePreview'


const CurrentCourses = () => {
    const [courses, setCourses] = useState<ICoursePreview[]|undefined>(undefined)
    useEffect(()=>{
        fetch('/courses').then(res => res.json()).then(setCourses)
    },[])

    return(
        <>
            <header className="section-header">
                    <h3 className="title">Current courses</h3>
            </header>
            <div className="created-course-list">
            {
                courses?.length ? courses.map( c =>
                    <CurrentCoursePreview 
                        id={c.id}
                        author={c.author}
                        title={c.title}
                        lessons_number={20}
                        passed_lessons_number={5}
                        />
                )
                :
                <div>No created coures yet</div>
            }
            </div>
        </>
    )
}

export default CurrentCourses