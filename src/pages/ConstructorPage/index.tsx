import React, { useState } from 'react'
import AppNavigation from '../../components/AppNavigation'
import ModuleBlock from './ModuleBlock'
import { uuid } from 'uuidv4'
import { Button, Modal, TextField } from '@material-ui/core'
import SetNameModal, {SetNameModalPropsType} from './SetNameModal'
import LessonBlock from './LessonBlock'
//Может быть новый курс либо редактировать уже существующий

type CourseModule = {
    id: string,
    name: string,
    order: number,
    lessons?: CourseLesson[]
}

type CourseLesson = {
    id: string,
    name: string,
    order: number,
    components?: Array<PracticalComponent | TheoreticComponent>
}


type TaskType = "single" | "mult" | "text" | "sort" | "match" | "file"

type TheoreticComponent = {
    id: string,
    name: string,
    component_type: "theoretic"
}

type PracticalComponent = {
    id: string,
    name: string,
    component_type: "practical",
    task_type: TaskType
}

const defaultModalParams: SetNameModalPropsType = {
    open: false,
    onSave: () => {},
    onDismiss: () => {}
}


const ConstructorPage = () => {
    const [name, setName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [requirements, setRequirements] = useState<string>("")
    const [modules, setModules] = useState<CourseModule[]>([])
    const [modalParams, setModalParams] = useState<SetNameModalPropsType>(defaultModalParams)
    
    const onAddModuleClick = () => {
        setModalParams(
            {
                open: true,
                onSave: createNewModule,
                onDismiss: closeModal
            }
        )
    }

    const onAddLessonClick = (module_id: string) => {
        setModalParams(
            {
                open: true,
                onSave: (name) => createNewLesson(module_id, name),
                onDismiss: closeModal
            }
        )
    }

    const onAddComponent = (lesson_id: string) => {

    }

    const closeModal = () => setModalParams(defaultModalParams)


    const createNewModule = (name: string) => {
        const newModule: CourseModule = {
            id: uuid(),
            name,
            order: modules.length,
            lessons: []
        }
        setModules(modules => [...modules, newModule])
        closeModal()
    }

    const createNewLesson = (module_id: string, name: string) => {
        const lessonsList = modules.find(m => m.id === module_id)?.lessons
        const newLesson: CourseLesson = {
            id: uuid(),
            order: lessonsList?.length || 0,
            name
        }
        const newLessonsList = lessonsList ? [...lessonsList, newLesson] : [newLesson]
        
        setModules(modules => modules.map(m => {
            if(m.id === module_id){
                return {...m, lessons: newLessonsList}
            }
            return m
        }))
        closeModal()
    }

    const createNewComponent = (module_id: string, lesson_id: string) => {
        const lessonsList = modules.find(m => m.id === module_id)?.lessons
        const componentList = lessonsList!.find(l => l.id === lesson_id)?.components
        
        const newComponent: TheoreticComponent = {
            id: uuid(),
            name: "New component",
            component_type:"theoretic"
        }

        const newComponentList = componentList ? [...componentList, newComponent] : [newComponent]

        setModules(modules => modules.map(m => {
            if(m.id === module_id){
                m.lessons?.map(
                    l => {
                        if(l.id === lesson_id){
                            return {...l, components: newComponentList}
                        }
                        return l
                    }
                )
            }
            return m
        }))
    }

    const deleteModule = (module_id: string) => {
        setModules(modules => modules.filter(m => m.id !== module_id))
    }

    return(
        <div className="content">
            <AppNavigation/> 
            <div className="constructor">
                <header className="constructor-header">
                    <h3 className="title">Course constructor</h3>
                    <div className="constructor-header--actions">
                        <Button variant="outlined" >Cancel</Button>
                        <Button variant="outlined" color="secondary">Save</Button>
                    </div>
                </header>
                <section className="basic-info-section">
                    <TextField
                        label="Course title"
                    />
                    <TextField 
                        multiline 
                        placeholder="Course description" 
                        label="Course description"
                        />
                    <TextField 
                        multiline 
                        label="Course requirements"
                    />
                </section>
                <section className="modules-section">
                    <header className="modules-section--header">
                        <span className="modules-section--title section-title">Course modules</span>
                        <Button onClick={onAddModuleClick} variant="outlined" >New module</Button>
                    </header>
                    {
                        modules.length ? modules.map(m => 
                        <ModuleBlock 
                            name={m.name} 
                            collapsed={false}
                            onAddLesson={() => onAddLessonClick(m.id)}
                            onDelete={() => deleteModule(m.id)}
                        >
                            {m.lessons?.map(l => 
                                <LessonBlock
                                    name={l.name}
                                    onAddComponent={() => createNewComponent(m.id, l.id)}
                                    components={l.components}
                                />
                            )}
                        </ModuleBlock>)
                        :
                        <div>
                            No modules created.
                        </div>
                    }
                    <footer className="modules-section--footer">
                    </footer>
                </section>
                <SetNameModal 
                    open={modalParams.open} 
                    onSave={modalParams.onSave} 
                    onDismiss={modalParams.onDismiss}
                />
            </div>
               
        </div>
    )
}

export default ConstructorPage