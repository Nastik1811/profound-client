import { Button, TextField } from '@material-ui/core'
import React from 'react'
import { ILesson } from '../../types'
import LessonBlock from './LessonBlock'

type LessonsListPropsType = {
    lessons: ILesson[],
    newLessonName: string,
    setNewLessonName: (name: string) => void,
    createNewLesson: () => void,
    addComponent: (id: string) => void,

}

const LessonsList: React.FC<LessonsListPropsType> = ({lessons, newLessonName, setNewLessonName, createNewLesson, addComponent}) => {
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
                        name={l.name} 
                        components={l.components}
                        onAddComponent={() => addComponent(l.id)}/>)
                    :
                    <div className="message">
                        No lessons created.
                    </div>
                }
            </section>
    )
}

export default LessonsList