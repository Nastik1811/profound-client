import { IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import React from 'react'

type LessonBlockPropsType = {
    name: string,
    onAddComponent: () => void,
    components?: Array<PracticalComponent | TheoreticComponent>
}

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


type TaskType = "single" | "mult" | "text" | "sort" | "match" | "file"

const LessonBlock: React.FC<LessonBlockPropsType> = ({name, components,onAddComponent}) => {
    return(
        <div className="lesson-block">
            <header className="lesson-block--header">
                {name}
                <div className="lesson-block--actions">
                    <IconButton onClick={onAddComponent}>
                        <AddIcon fontSize="small"/>
                    </IconButton>
                </div>
            </header>
            <div className="lesson-block--content">
                {
                    components?.map(
                        comp => <span>{comp.name}</span>
                    )
                }
            </div>
        </div>
    )
}

export default LessonBlock