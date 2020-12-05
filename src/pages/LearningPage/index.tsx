import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useHttp } from '../../hooks/http.hook'
import CourseContent from './CourseContent'
import Lesson from './Lesson'

type RouteParams = {
    course_id: string
}  

interface ICourse{
    id: string,
    name: string,
}

type Lesson = {
    id: string
} 

type LessonComponent = {
       
}

const LearningPage = () => {
    const {course_id} = useParams<RouteParams>()
    const {request} = useHttp()
    const [course, setCourse] = useState<ICourse|undefined>(undefined)
    const [lessonId, setLessonId] = useState<string|null>(null)

    const fetchCourse = useCallback(async () => {
        try{
            const data = await request(`/course_full/${course_id}`)
            setCourse(data)
            data["last_lesson_id"] && setLessonId(data["last_lesson_id"])
            console.log(data)
        }catch (e){
            console.log(e.message)
        }
    }, [request])

    useEffect(() => {
        fetchCourse()
    }, [fetchCourse])

    useEffect(() => console.log(course), [course])

    return(
        <>
            <div className="sidebar">
                <a href="/home" className="back-btn">Back to home </a>
                <CourseContent />
            </div>
            <div className="learn-container">
                {lessonId ? <Lesson lesson_id={lessonId}/> : <div>Loading</div>}
            </div>
        </>
    )
}

export default LearningPage
