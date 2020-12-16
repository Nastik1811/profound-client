import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import Loader from '../../components/Loader'
import { AuthContext } from '../../context/auth'
import { useHttp } from '../../hooks/http.hook'
import { baseUrl } from '../../routes'
import { ICourse, RouteParamsType } from '../../types'
import CourseContent from './CourseContent'
import Lesson from './Lesson'

const LearningPage = () => {
    const {course_id} = useParams<RouteParamsType>()
    const {token} = useContext(AuthContext)
    const {request} = useHttp(token)
    const [course, setCourse] = useState<ICourse|undefined>(undefined)
    const [lessonId, setLessonId] = useState<string|undefined>(undefined)
    const [error, setError] = useState(null)

    const fetchCourse = useCallback(async () => {
        try{
            const data = await request(`${baseUrl}/api/course/${course_id}`)
            setCourse(data.course)
            const lastLessonId = data.lastLessonId 
            if(lastLessonId === 0){
                throw new Error("You are not enrolled to this course")
            }
            lastLessonId === -1 ?  setLessonId(data.course.modules[0].lessons[0].id) : setLessonId(lastLessonId)
        }catch (e){
            alert(e)
            setError(e)
        }
    }, [request])

    useEffect(() => {
        fetchCourse()
        
    }, [fetchCourse])

    if(error){
        return(
            <Redirect to='/home'/>
        )
    }

    return(
        <>
            <div className="sidebar">
                <a href="/home" className="back-btn">Back to home </a>
                {course && <CourseContent activeId={lessonId} modules={course.modules} onSelectLesson={setLessonId} title={course.title}/>}
            </div>
            <div className="learn-container">
                {lessonId ? <Lesson lesson_id={lessonId} course_id={course_id}/> : <Loader/>}
            </div>
        </>
    )
}

export default LearningPage
