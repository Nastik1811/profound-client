
import { Button } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../../../components/Loader'
import { AuthContext } from '../../../context/auth'
import { useHttp } from '../../../hooks/http.hook'
import { baseUrl } from '../../../routes'
import { ICoursePreview } from '../../../types'
import CreatedCoursePreview from './CreatedCoursePreview'

const CreatedCourses = () => {
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp(token)

    const [courses, setCourses] = useState<ICoursePreview[]>([])
    useEffect(()=>{
        request(`${baseUrl}/api/teacher/courses`).then(setCourses)
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
                courses.length > 0 && courses.map( c =>
                    <CreatedCoursePreview 
                        id={c.id}
                        status={c.status}
                        title={c.title}
                        description={c.description}
                        />
                )
            }
            </div>
        </>
    )
}

export default CreatedCourses