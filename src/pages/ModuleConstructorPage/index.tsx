import React, { useContext, useEffect, useState } from 'react'
import AppNavigation from '../../components/AppNavigation'
import { uuid } from 'uuidv4'
import { Button } from '@material-ui/core'
import { ILesson, ISimpleComponent, ISimpleComponentDetails, RouteParamsType } from '../../types'
import LessonsList from './LessonsList'
import ComponentConstructor, { ComponentDetails } from './ComponentConstructor'
import { AuthContext } from '../../context/auth'
import { useHttp } from '../../hooks/http.hook'
import { baseUrl } from '../../routes'
import { useHistory, useParams } from 'react-router-dom'

const defaultParams = {
    open: false,
    onSave: (details: ComponentDetails) => {},
    onDismiss: () => {}
}

type ParamsType = typeof defaultParams

const ConstructorPage = () => {
    const {token} = useContext(AuthContext)
    const {request} = useHttp(token)
    const {module_id, course_id} = useParams<RouteParamsType>()
    const history = useHistory()
    const [name, setName] = useState<string>("")
    const [newLessonName, setNewLessonName] = useState<string>("")
    const [lessons, setLessons] = useState<ILesson[]>([])
    const [constructorParams, setConstructorParams] = useState<ParamsType>(defaultParams)
   
    useEffect(() => {
        module_id && request(`${baseUrl}/api/teacher/course/${course_id}`).then(data => {
            const module = data.course.modules[0]
            setName(module.name)
            setLessons(module.lessons)
        })
    }, [module_id, course_id])

    const handleSubmit = async () => {
        try{
            if(name === ""){
                throw new Error("A module name should not be empty.")
            }
        await request(`${baseUrl}/api/teacher/course/modules`, 'POST', {name, lessons: lessons.map((l, i) => ({
            name: l.name,
            order: i,
            components: l.components?.map((c,i) =>({
                content: c.content, 
                componentType: c.componentType,
                maxPoints: c.maxPoints,
                order: i
            }))
        })), courseId:+course_id})
            history.goBack()
        }catch(e){
            alert(e)
        }
        
    }

    const onAddComponent = (lesson_id: string) => {
        setConstructorParams({
            open: true,
            onSave: (details) => {
                createNewComponent(lesson_id, details)
            },
            onDismiss: () => {
                setConstructorParams(defaultParams)
            }
        })
    }

    const onEditComponent = (lesson_id: string) => {
        setConstructorParams({
            open: true,
            onSave: (details) => {
                createNewComponent(lesson_id, details)
            },
            onDismiss: () => {
                setConstructorParams(defaultParams)
            }
        })
    }

    const onDeleteComponent = (lesson_id: string, id: string) => {
        setLessons(lessons => lessons?.map(
            l => {
                if(l.id === lesson_id){
                    const componentList = l.components!.filter(c => c.id !== id)
                    return {...l, components: componentList}
                }
                return l
            }
        ))
    }

    const onDeleteLesson = (lesson_id: string) => {
        setLessons(lessons => lessons.filter(l => l.id !== lesson_id))
    }
   
    const createNewLesson = () => {
        if(newLessonName === ""){
            alert("A lesson name should not be empty.")
            return
        }
        const newLesson: ILesson = {
            id: uuid(),
            name: newLessonName,
            components: []
        }
        setLessons(lessons => [...lessons, newLesson])
        setNewLessonName("")
    }
    

    const createNewComponent = (lesson_id: string, details: ComponentDetails) => {
        const componentList = lessons!.find(l => l.id === lesson_id)?.components
        const content = details.componentType === "theory" ? details.content : JSON.stringify({text: details.content, answers: [details.answer]})
        const newComponent: ISimpleComponent = {
            id: uuid(),
            componentType: details.componentType,
            content,
            maxPoints: +details.maxPoints
        }


        const newComponentList = componentList ? [...componentList, newComponent] : [newComponent]

        setLessons(lessons => lessons?.map(
                    l => {
                        if(l.id === lesson_id){
                            return {...l, components: newComponentList}
                        }
                        return l
                    }
                ))
    }

    return(
        <div className="content">
            <AppNavigation/> 
            <div className="constructor">
                <header className="constructor-header">
                    <input className="constructor--name-input" 
                                placeholder="Enter a name for new module"
                                value={name} 
                                onChange={e => setName(e.target.value)}/>
                    <div className="constructor-header--actions">
                        <Button onClick={() => history.goBack()}>Cancel</Button>
                        <Button color="secondary" onClick={handleSubmit}>Save</Button>
                    </div> 
                </header>
                <hr className="header--hr"/>
                <LessonsList
                    lessons={lessons}
                    newLessonName={newLessonName} 
                    setNewLessonName={setNewLessonName} 
                    createNewLesson={createNewLesson} 
                    deleteLesson={onDeleteLesson}
                    addComponent={onAddComponent}
                    editComponent={onEditComponent}
                    deleteComponent={onDeleteComponent}
                />
            </div>
            <ComponentConstructor
                open={constructorParams.open}
                onSave={constructorParams.onSave}
                onDismiss={constructorParams.onDismiss}
            />
        </div>
    )
}

export default ConstructorPage