import React, { useCallback, useEffect, useState } from 'react'
import { useHttp } from '../../../hooks/http.hook'
import LessonNavigation from './LessonNavigation'
import PracticalComponent from './PracticalComponent'
import TheoreticComponent from './TheoreticComponent'

type LessonPropsType = {
    lesson_id: string
}
type TaskType =  'single' | 'mult' | 'text' | 'sort' | 'match' | 'file'
type ComponentType = 'practical' | 'theoretic'

export interface IPrascticalComponent{
    id: string, 
    title: string, 
    completed: boolean
    task_type: TaskType, 
    task_title: string 
}

export interface ITheoreticComponent{
    id: string, 
    title: string, 
    completed: boolean
    content: string
}

type Component = IPrascticalComponent | ITheoreticComponent

interface ILesson{
    id: string,
    name: string,
    components: Component[]
}

const Lesson:React.FC<LessonPropsType> = ({lesson_id}) => {
    const [lesson, setLesson] = useState<ILesson|undefined>(undefined)
    const [activeComponent, setActiveComponet] = useState<Component|undefined>(undefined)
    const [activeIndex, setActivIndex] = useState<number>(0)
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
        fetchLesson()
    }, [fetchLesson])

    if(!activeComponent){
        return(
            <div>
                Loading...
            </div>
        )
    }

    return(
        <section className="learning-component">
            <header>
                <h3 className="component-title">О нас</h3>
                <hr className="delimiter"/>
                <LessonNavigation/>
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