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
    onSave: () => {},
    onDismiss: () => {}
}

const defaultDetails: ISimpleComponentDetails = {
    content: "",
    points: 0,
    componentType: "theory",
    
}

type ParamsType = typeof defaultParams

const ConstructorPage = () => {
    const [name, setName] = useState<string>("New module")
    const [newLessonName, setNewLessonName] = useState<string>("")
    const [lessons, setLessons] = useState<ILesson[]>([])
    const [componentDetails, setComponentDetails] = useState<ISimpleComponentDetails>(defaultDetails)
    const [constructorParams, setConstructorParams] = useState<ParamsType>(defaultParams)
   
    const onAddComponent = (lesson_id: string) => {
        setConstructorParams({
            open: true,
            onSave: () => createNewComponent(lesson_id),
            onDismiss: () => {
                setConstructorParams(defaultParams)
                setComponentDetails(defaultDetails)
            }
        })
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
console.log(componentDetails)
    const createNewComponent = (lesson_id: string) => {
        const componentList = lessons!.find(l => l.id === lesson_id)?.components
        
        const newComponent: ISimpleComponent = {
            ...componentDetails,
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
                    addComponent={onAddComponent}
                />
            </div>
            <ComponentConstructor
                open={constructorParams.open}
                content={componentDetails.content} 
                onContentChange={(content: ContentType) => setComponentDetails({...componentDetails, content})} 
                onContentTypeChange={(componentType: LessonComponentType) => setComponentDetails({...componentDetails, componentType})}  
                componentType={componentDetails.componentType} 
                points={componentDetails.points}
                onSave={constructorParams.onSave}
                onCancel={constructorParams.onDismiss}
            />
        </div>
    )
}

export default ConstructorPage