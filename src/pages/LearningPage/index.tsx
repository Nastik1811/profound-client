import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useHttp } from '../../hooks/http.hook'
import CourseContent from './CourseContent'
import LessonNavigation from './LessonNavigation'
import PracticeComponent from './PracticeComponent'

type RouteParams = {
    course_id: string
}  

type Course = {
    id: string,
    title: string,
}

type Lesson = {
    id: string
} 

type LessonComponent = {
       
}

const LearningPage = () => {
    const {course_id} = useParams<RouteParams>()
    const {request} = useHttp()
    const [course, setCourse] = useState<Course|undefined>(undefined)
    const [lesson, setLesson] = useState(null)

    const fetchCourse = useCallback(async () => {
        try{
            const data = await request(`/course_full/${course_id}`)
            setCourse(data)
            console.log(data)
        }catch (e){
            console.log(e.message)
        }
    }, [request])

    const fetchLesson = useCallback(async () => {
        try{
            const data = await request(`/lessons/l1`)
            setLesson(data)
        }catch (e){
            console.log(e.message)
        }
    }, [request])

    useEffect(() => {
        fetchCourse()
        fetchLesson()
    }, [fetchCourse])

    return(
        <>
            <div className="sidebar">
                <a href="/home" className="back-btn">Back to home</a>
                <CourseContent />
            </div>
            <div className="learn-container">
                <section className="learning-component">
                    <header>
                        <h3 className="component-title">О нас</h3>
                        <hr className="delimiter"/>
                        <LessonNavigation/>
                    </header>
                    <PracticeComponent/>
                    <a href="#" className="to-next">Next step</a>
                </section>
            </div>
        </>
    )
}

export default LearningPage
