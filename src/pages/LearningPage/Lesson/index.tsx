import { Button } from '@material-ui/core'
import React, {useCallback, useContext, useEffect, useState } from 'react'
import Loader from '../../../components/Loader'
import Message from '../../../components/Message'
import { AuthContext } from '../../../context/auth'
import { useHttp } from '../../../hooks/http.hook'
import { baseUrl } from '../../../routes'
import { ILesson, LessonComponent } from '../../../types'
import LessonNavigation from './LessonNavigation'
import TaskComponent from './TaskComponent'

type LessonPropsType = {
    lesson_id: string,
    course_id: string
}

const Lesson:React.FC<LessonPropsType> = ({lesson_id, course_id}) => {
    const [lesson, setLesson] = useState<ILesson|undefined>(undefined)
    const [activeComponent, setActiveComponet] = useState<LessonComponent|undefined>(undefined)
    const [activeIndex, setActiveIndex] = useState<number>(0) 
    const {token} = useContext(AuthContext)
    const {request} = useHttp(token)

    const fetchLesson = useCallback(async () => {
        try{
            const data = await request(`${baseUrl}/api/course/${course_id}/lesson/${lesson_id}`)
            setLesson(data)
            setActiveIndex(0)
        }catch (e){
            console.log(e.message)
        }
    }, [request, lesson_id, course_id])

    useEffect(() => {
        if(lesson?.components){
            setActiveComponet(lesson.components[activeIndex])
        }
    }, [activeIndex, lesson])

    useEffect(() => {
        fetchLesson()
    }, [fetchLesson])

    if(!lesson){
        return(
            <Loader/>
        )
    }
    if(!lesson.components || !lesson.components.length ){
        return(
            <Message message="This lesson has no components"/>
        )
    }
    const onAnswer = () => {

    }
    
    return(
        <section className="learning-component">
            <header>
                <h3 className="component-title">О нас</h3>
                <hr className="delimiter"/>
                {lesson.components &&
                    <LessonNavigation 
                        components={lesson.components} 
                        activeIndex={activeIndex} 
                        onIndexChange={setActiveIndex}
                        />
                }
            </header>
            {
                activeComponent && 
                <div className="task-container">
                    <TaskComponent content={activeComponent.content} componentType={activeComponent.componentType}/>
                    <Button size="large" color="inherit" onClick={onAnswer}>Submit</Button>
                </div>


            }
            {/* <a href="#" className="to-next">Next step</a> */}
        </section>
        
    )
}
export default Lesson