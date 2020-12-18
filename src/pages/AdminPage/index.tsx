import React, { useContext, useEffect, useState } from 'react'
import AppNavigation from '../../components/AppNavigation'
import CoursePreview from '../../components/CoursePreview'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import { AuthContext } from '../../context/auth'
import { useHttp } from '../../hooks/http.hook'
import { CourseStatus, ICoursePreview } from '../../types'
import CourseList from './CourseList'


const AdminPage = () => {
    const [courses, setCourses] = useState<ICoursePreview[]|undefined>(undefined)
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp(token)
    useEffect(()=>{
        request('https://profound-web-app.azurewebsites.net/api/course').then(
            data => setCourses(data.filter((c: { status: CourseStatus }) => c.status === "on_moderation"))
            ).catch(console.log)
    },[])

    return(
        <>
        <div className="admin-page">
        <AppNavigation/>
            <section>
                <header className="header">
                    <h3 className="title">Admin panel</h3>
                </header>
                <hr className="delimiter"/>
                {courses ?
                    <CourseList courses={courses}/>:
                    <Loader/>
                }
                {
                    courses?.length === 0 && <Message message="No upcoming courses"/>
                }
            </section>
        </div>
        </>
    )
}

export default AdminPage