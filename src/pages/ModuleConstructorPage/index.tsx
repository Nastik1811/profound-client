import React, { useCallback, useState } from 'react'
import AppNavigation from '../../components/AppNavigation'
import { uuid } from 'uuidv4'
import { Button } from '@material-ui/core'
import  {SetNameModalPropsType} from './SetNameModal'
import { ContentType, ILesson, ISimpleComponent, ISimpleComponentDetails, LessonComponentType } from '../../types'
import LessonsList from './LessonsList'
import ComponentConstructor from './ComponentConstructor'

const defaultParams = {
    open: false,
    onSave: (details: ISimpleComponentDetails) => {},
    onDismiss: () => {}
}

type ParamsType = typeof defaultParams

const ConstructorPage = () => {
    const [name, setName] = useState<string>("New module")
    const [newLessonName, setNewLessonName] = useState<string>("")
    const [lessons, setLessons] = useState<ILesson[]>([])
    const [constructorParams, setConstructorParams] = useState<ParamsType>(defaultParams)
   
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
        console.log('edit')
    }

    const onDeleteComponent = (lesson_id: string, id: string) => {
        setLessons(lessons => lessons?.map(
            l => {
                if(l.id === lesson_id){
                    const componentList = l.components.filter(c => c.id !== id)
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
            order: lessons?.length || 0,
            name: newLessonName,
            components: []
        }
        setLessons(lessons => [...lessons, newLesson])
        setNewLessonName("")
    }
    

    const createNewComponent = (lesson_id: string, details: ISimpleComponentDetails) => {
        const componentList = lessons!.find(l => l.id === lesson_id)?.components
        
        const newComponent: ISimpleComponent = {
            ...details,
            id: uuid(),
            order: componentList?.length || 0
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
                        <Button >Cancel</Button>
                        <Button color="secondary">Save</Button>
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