import React, { useContext, useEffect, useState } from 'react'
import CoursePreview from '../../components/CoursePreview'
import Loader from '../../components/Loader'
import { AuthContext } from '../../context/auth'
import { useHttp } from '../../hooks/http.hook'
import { ICoursePreview } from '../../types'
import CourseList from './CourseList'

const AdminPage = () => {
    const [courses, setCourses] = useState<ICoursePreview[]|undefined>(undefined)
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp(token)
    useEffect(()=>{
        request('https://profound-web-app.azurewebsites.net/api/course').then(
            data => setCourses(data.filter(c => c.status === "on_moderation"))
            ).catch(console.log)
    },[])

    return(
        <div className="admin-page">
            <header className="header">
                 <div className="logo-container logo">  </div> 
            </header>
            <section>
                <header className="header">
                    <h3 className="title">Admin panel</h3>
                </header>
                <hr className="delimiter"/>
                {courses ?
                    <CourseList courses={courses}/>:
                    <Loader/>
                }
            </section>
        </div>
    )
}

export default AdminPage