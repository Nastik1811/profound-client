import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../../../components/Loader'
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
        request('https://profound-web-app.azurewebsites.net/api/course/user').then(setCourses).catch(console.log)
    },[])

    return(
        <>
            <header className="section-header">
                    <h3 className="title">Current courses</h3>
            </header>
            <div className="created-course-list">
            {
                loading ? <Loader/> :
                courses?.length ? courses.map( c =>
                    <CurrentCoursePreview 
                        key={c.id}
                        id={c.id}
                        author={`${c.creator.firstName} ${c.creator.lastName}`}
                        title={c.title}
                        progress={c.progress || 0}
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