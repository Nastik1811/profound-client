
import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../../../components/Loader'
import { useHttp } from '../../../hooks/http.hook'
import { ICoursePreview } from '../../../types'
import CreatedCoursePreview from './CreatedCoursePreview'

const CreatedCourses = () => {
    const {request, loading} = useHttp()

    const [courses, setCourses] = useState<ICoursePreview[]|undefined>(undefined)
    useEffect(()=>{
        request('/courses').then(setCourses)
    },[])

    if(loading){
        return(
            <Loader/>
        )
    }
    return(
        <>
            <header className="section-header">
                    <h3 className="title">Created courses</h3>
            </header>
            <div className="created-course-list">
                <Link className="created-course-preview constructor-link" to="/create">
                    <span className="">
                        CREATE COURSE
                    </span>
                </Link>
            {
                courses?.length && courses.map( c =>
                    <CreatedCoursePreview 
                        id={c.id}
                        author={c.author}
                        title={c.title}
                        />
                )
            }
            </div>
        </>
    )
}

export default CreatedCourses