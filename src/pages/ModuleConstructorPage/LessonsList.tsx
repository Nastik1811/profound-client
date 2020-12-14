import { Button, TextField } from '@material-ui/core'
import React from 'react'
import Message from '../../components/Message'
import { ILesson } from '../../types'
import LessonBlock from './LessonBlock'

type LessonsListPropsType = {
    lessons: ILesson[],
    newLessonName: string,
    setNewLessonName: (name: string) => void,
    createNewLesson: () => void,
    deleteLesson: (id: string) => void,
    addComponent: (id: string) => void,
    editComponent: (id: string) => void,
    deleteComponent: (lesson_id: string, id: string) => void
}

const LessonsList: React.FC<LessonsListPropsType> = ({lessons, newLessonName, setNewLessonName, createNewLesson, addComponent, editComponent, deleteComponent, deleteLesson}) => {
    return(
        <section className="lessons-section">
                    <div className="lesson-block lesson-block--create">
                        <TextField
                            label="New "
                            value={newLessonName}

                            onChange={e => setNewLessonName(e.target.value)}
                                />
                        <div className="lesson-block--actions">
                            <Button onClick={createNewLesson}>
                                Add lesson
                            </Button>
                        </div>
                    </div>
                {
                    lessons.length ? lessons.map(l => 
                    <LessonBlock 
                        key={l.id}
                        name={l.name} 
                        components={l.components}
                        onDelete={() => deleteLesson(l.id)}
                        onAddComponent={() => addComponent(l.id)}
                        onEditComponent={() => editComponent(l.id)}
                        onDeleteComponent={(id) => deleteComponent(l.id, id)}
                        />)
                    :
                    <Message message="No lessons created"/>
                }
            </section>
    )
}

export default LessonsList