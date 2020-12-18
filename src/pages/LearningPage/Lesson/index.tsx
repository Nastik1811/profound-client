import { Button } from '@material-ui/core'
import clsx from 'clsx'
import React, {useCallback, useContext, useEffect, useState } from 'react'
import Loader from '../../../components/Loader'
import Message from '../../../components/Message'
import { AuthContext } from '../../../context/auth'
import { useHttp } from '../../../hooks/http.hook'
import { baseUrl } from '../../../routes'
import { Comment, ILesson, LessonComponent } from '../../../types'
import Discussion from './Discussion'
import LessonNavigation from './LessonNavigation'
import TaskComponent, { Solution } from './TaskComponent'

type LessonPropsType = {
    lesson_id: string,
    course_id: string
}


const Lesson:React.FC<LessonPropsType> = ({lesson_id, course_id}) => {
    const {token, firstname, lastname, userId} = useContext(AuthContext)
    const {request, loading} = useHttp(token)

    const [lesson, setLesson] = useState<ILesson|undefined>(undefined)
    const [components, setComponets] = useState<LessonComponent[]|undefined>(undefined)
    const [activeIndex, setActiveIndex] = useState<number>(0) 
 
    const [score, setScore] = useState(0)
    const [solutions, setSolutions ] = useState<Solution[]>([])

    const fetchLesson = useCallback(async () => {
        try{
            setActiveIndex(0)
            const data = await request(`${baseUrl}/api/course/${course_id}/lesson/${lesson_id}`)
            setLesson(data)
            setComponets(data.components)
            setSolutions([])
            setScore(0)
        }catch (e){
            console.log(e.message)
        }
    }, [request, lesson_id, course_id])



    useEffect(() => {
        fetchLesson()
    }, [fetchLesson])

    if(loading){
        return <Loader/>
    }

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
    const onAnswerComponent = async (solution: Solution) => {
        if(solution.status === "correct" && solution.points > 0){
            alert("Well done!")
        }
        setComponets(comp => comp!.map(c => { 
            if(+c.id === solution.componentId){
                setScore(score => score + solution.points)
                return {...c, completed: true}
            }
            return c
        }))

        setSolutions(solutions => [...solutions, solution])

        if(activeIndex < components!.length - 1){
            setActiveIndex(i => ++i)
        }else{
            alert("It was the last component in this lesson. You are ready to finish it.")
        }
    }

    const onFinishLesson = async() => {
        await request(`${baseUrl}/api/course/lessons`, 'POST', {
            solutions,
            courseId: +course_id,
            lessonId: +lesson_id
        })

    }

    const onAddComment = (componentId: string, text: string) => {
        const comment: Comment = {
            createdAt: new Date(),
            text,
            creator: `${firstname} ${lastname}`
        }
        setComponets(comp => comp!.map(c => { 
            if(c.id === componentId){
                const comments = c.comments || []
                
                return {...c, comments: [...comments, comment]}
            }
            return c
        }))
    }
    
    return(
        <section className="learning-component">
            <header>
                <h3 className="component-title">О нас</h3>
                <hr className="delimiter"/>
                <div style={{display: `flex`, justifyContent: `space-between`}}>
                    {components &&
                        <LessonNavigation 
                            components={components} 
                            activeIndex={activeIndex} 
                            onIndexChange={setActiveIndex}
                            />
                    }
                <span className="score">Score: {score}</span>
                </div>
                
            </header>

            {
                components && components.length > 0 && 
                <div className={clsx("task-container", components[activeIndex].componentType)}>
                    <TaskComponent 
                        component={components[activeIndex]}
                        onSubmit={onAnswerComponent}
                    />
                </div>

            }
            <div className="lesson-learn-action mt-2">
                <button className="to-next" onClick={onFinishLesson} disabled={lesson.completed}>Finish lesson</button>
            </div>
            { components && components.length > 0 &&
                <Discussion
                    comments={components[activeIndex].comments || []}
                    onAddComment={text => onAddComment(components[activeIndex].id, text)}
                    componentId={components[activeIndex].id}
                />
                }
        </section>
        
    )
}
export default Lesson