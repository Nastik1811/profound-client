import { Button } from '@material-ui/core'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'

import AppNavigation from '../../components/AppNavigation'
import Loader from '../../components/Loader'
import { AuthContext } from '../../context/auth'
import { useHttp } from '../../hooks/http.hook'
import { ICourse, RouteParamsType } from '../../types'
import ModuleSection from './ModulesSection'


const CourseOverview = () => {
    const {course_id} = useParams<RouteParamsType>()
    const {token, userId} = useContext(AuthContext)
    const {request} = useHttp(token)
    const history = useHistory()
    const [course, setCourse] = useState<ICourse|undefined>(undefined)
    const [isAuthor, setIsAuthor] = useState<boolean>(false)
    const [isEnrolled, setIsEnrolled] = useState<boolean>(false)

    const fetchCourse = useCallback(async () => {
        try{
            const data = await request(`https://profound-web-app.azurewebsites.net/api/course/${course_id}`)
            setCourse(data.course)
            setIsAuthor(userId === data.course.creatorId)
            setIsEnrolled(true) //Какое поле для этого проверять
        }catch (e){
            console.log(e.message)
        }
    }, [request])

    useEffect(() => {
        fetchCourse()
    }, [fetchCourse])

    if(!course){
        return(<Loader/>)
    }
    const handleDelete = () => {
        console.log("Delete")
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
            <div className="course-description">
                {course.description}
            </div>
            <div className="overview-actions">
                {!isAuthor && isEnrolled && <Link className="to-next" to={`/learn/${course_id}`}>Go to course</Link>}
                {!isEnrolled && !isAuthor && <Link className="to-next" to={`/payment/${course_id}`}>Enroll</Link>}
                {isAuthor && <Link className="to-next" to={`${history.location.pathname}/constructor`}>Edit</Link>}
                {isAuthor && <Link className="to-next" to={`${history.location.pathname}/constructor`}>Publish</Link>}
            </div>
        </section>


        {isAuthor && <ModuleSection 
            modules={course.modules ? course.modules : []}
            onAdd={() => history.push(`${history.location.pathname}/constructor`)}
            onDelete={handleDelete}
            onEdit={(module_id: string) => history.push(`${history.location.pathname}/constructor/${module_id}`)}
            />}
    </div>
    )
}

export default CourseOverview