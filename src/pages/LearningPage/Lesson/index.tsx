import React, {useCallback, useEffect, useState } from 'react'
import Loader from '../../../components/Loader'
import { useHttp } from '../../../hooks/http.hook'
import { ILesson, LessonComponentType } from '../types'
import LessonNavigation, { NavTab } from './LessonNavigation'
import PracticalComponent from './PracticalComponent'
import TheoreticComponent from './TheoreticComponent'

type LessonPropsType = {
    lesson_id: string
}

const Lesson:React.FC<LessonPropsType> = ({lesson_id}) => {
    const [lesson, setLesson] = useState<ILesson|undefined>(undefined)
    const [activeComponent, setActiveComponet] = useState<LessonComponentType|undefined>(undefined)
    const [activeIndex, setActiveIndex] = useState<number>(0)
    const {request} = useHttp()

    const fetchLesson = useCallback(async () => {
        try{
            const data = await request(`/lessons/${lesson_id}`)
            setLesson(data)
            console.log(data)
        }catch (e){
            console.log(e.message)
        }
    }, [request])

    useEffect(() => {
        setActiveComponet(lesson?.components[activeIndex])
    }, [activeIndex, lesson])

    useEffect(() => {
        fetchLesson()
    }, [fetchLesson])

    if(!lesson || !activeComponent){
        return(
            <Loader/>
        )
    }

    return(
        <section className="learning-component">
            <header>
                <h3 className="component-title">О нас</h3>
                <hr className="delimiter"/>
                <LessonNavigation 
                    components={lesson.components} 
                    activeIndex={activeIndex} 
                    onIndexChange={setActiveIndex}
                    />
            </header>
            {
                "content" in activeComponent ?
                <TheoreticComponent 
                    id={activeComponent.id}
                    title={activeComponent.title}
                    content={activeComponent.content}
                    completed={activeComponent.completed}
                    />
                :
                <PracticalComponent 
                    id={activeComponent.id}
                    title={activeComponent.title}
                    task_title={activeComponent.task_title}
                    task_type={activeComponent.task_type}
                    completed={activeComponent.completed}
                />

            }
            <a href="#" className="to-next">Next step</a>
        </section>
        
    )
}
export default Lesson