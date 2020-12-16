import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Message from '../../../components/Message'
import { AuthContext } from '../../../context/auth'
import { useHttp } from '../../../hooks/http.hook'
import { ICoursePreview } from '../../../types'
import CurrentCoursePreview from './CurrentCoursePreview'


const CurrentCourses = () => {
    const [courses, setCourses] = useState<ICoursePreview[]|undefined>(undefined)
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp(token)
    useEffect(()=>{
        request('https://profound-web-app.azurewebsites.net/api/course').then(setCourses).catch(console.log)
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
                        author={`${c.creator.firstName} ${c.creator.lastName}`}
                        title={c.title}
                        lessons_number={20}
                        passed_lessons_number={5}
                        />
                )
                :
                <Message message="You have no active courses :("/>
            }
            </div>
        </>
    )
}

export default CurrentCourses