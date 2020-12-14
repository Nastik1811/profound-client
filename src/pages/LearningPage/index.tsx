import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader'
import { useHttp } from '../../hooks/http.hook'
import { baseUrl } from '../../routes'
import { ICourse, RouteParamsType } from '../../types'
import CourseContent from './CourseContent'
import Lesson from './Lesson'

const LearningPage = () => {
    const {course_id} = useParams<RouteParamsType>()
    const {request} = useHttp()
    const [course, setCourse] = useState<ICourse|undefined>(undefined)
    const [lessonId, setLessonId] = useState<string|undefined>(undefined)

    const fetchCourse = useCallback(async () => {
        try{
            const data = await request(`${baseUrl}/api/course/${course_id}`)
            setCourse(data.course)
            const lastLessonId = data.course.lastLessonId 
            lastLessonId === -1 ?  setLessonId(data.course.modules[0].lessons[0].id) : setLessonId(lastLessonId)
            setLessonId(data.course.modules[0].lessons[0].id)
        }catch (e){
            console.log(e.message)
        }
    }, [request])

    useEffect(() => {
        fetchCourse()
    }, [fetchCourse])

    useEffect(() => console.log(lessonId), [lessonId])

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
