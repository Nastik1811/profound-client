import { Button } from '@material-ui/core'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'

import AppNavigation from '../../components/AppNavigation'
import Loader from '../../components/Loader'
import { AuthContext } from '../../context/auth'
import { useHttp } from '../../hooks/http.hook'
import { baseUrl } from '../../routes'
import { ICourse, IModule, RouteParamsType } from '../../types'
import ModuleSection from './ModulesSection'


const CourseOverview = () => {
    const {course_id} = useParams<RouteParamsType>()
    const {token, userId} = useContext(AuthContext)
    const {request} = useHttp(token)
    const history = useHistory()
    const [course, setCourse] = useState<ICourse|undefined>(undefined)
    const [modules, setModules] = useState<IModule[] | undefined>(undefined)
    const [isAuthor, setIsAuthor] = useState<boolean>(false)
    const [isEnrolled, setIsEnrolled] = useState<boolean>(false)

    const fetchCourse = useCallback(async () => {
        try{
            const data = await request(`https://profound-web-app.azurewebsites.net/api/course/${course_id}`)
            if(data.course.status === "on_moderation"){
                throw new Error(`The "${data.course.title}" course is on moderation now. Please, try again later`)
            }
            setCourse(data.course)
            setModules(data.course.modules)
            setIsAuthor(userId === data.course.creator.id)
            setIsEnrolled(!!data.lastLessonId)
        }catch (e){
            alert(e.message)
            history.push('/home')
        }
    }, [request])

    useEffect(() => {
        fetchCourse()
    }, [fetchCourse])

    const publishCourse = async () => {
        await request(`${baseUrl}/api/teacher/course/${course_id}/requestToPublish`, 'POST')
        history.push('/home/own-courses')
    }
    if(!course){
        return(<Loader/>)
    }
    const handleDelete = async (id: string) => {
        try{
            await request(`${baseUrl}/api/teacher/course/modules/${id}`, 'DELETE')
            setModules(modules => modules?.filter(m => m.id !== id))
        }catch(e){
            alert("Something went wrong")
        }
    }

    const deleteModule = (module_id: string) => {
        //setModules(modules => modules.filter(m => m.id !== module_id))
    }
 

    return(
    <div className="content ">
        <AppNavigation/> 
        <section className="course-overview-info">
            <header className="overview-header">
                    <h3 className="title">{course.title}</h3>
            </header>
            <hr className="header--hr  mb-1"/>
            
            <div className="course-description ">
                <span className="subtitle">Description: </span>
                {course.description}
            </div>
            <div className="course-description">
                <span className="subtitle">Requirements: </span>
                {course.requirements}
            </div>
            <div className="course-description">
                <span className="subtitle">Price: </span>
                {course.price} 
                <span> BYN</span>
            </div>
            <div className="overview-actions">
                {!isAuthor && isEnrolled && <Link className="to-next" to={`/learn/${course_id}`}>Go to course</Link>}
                {!isEnrolled && !isAuthor && <Link className="to-next" to={`/payment/${course_id}`}>Enroll</Link>}
                {isAuthor && <Link className="to-next" to={`${history.location.pathname}/constructor`}>Edit</Link>}
                {isAuthor && <button className="to-next" onClick={publishCourse}>Publish</button>}
            </div>
            <hr className="header--hr mt-2"/>
        </section>


        {isAuthor && <ModuleSection 
            modules={modules ? modules : []}
            onAdd={() => history.push(`${history.location.pathname}/constructor`)}
            onDelete={handleDelete}
            onEdit={(module_id: string) => history.push(`${history.location.pathname}/constructor/${module_id}`)}
            />}
    </div>
    )
}

export default CourseOverview