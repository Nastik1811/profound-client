import { IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import React from 'react'
import { ISimpleComponent } from '../../types'

type LessonBlockPropsType = {
    name: string,
    onAddComponent: () => void,
    components?: ISimpleComponent[]
}



const ComponentBlock: React.FC<ISimpleComponent> = ({id, order, points, content, componentType}) => {
    return(
        <div className="component-block">
            <span>#</span>
            <span>{content}</span>
            <span>{componentType}</span>
            <span>{points}</span>
            <IconButton >
                    <DeleteIcon fontSize="small"/>
            </IconButton>
        </div>
    )
}

const LessonBlock: React.FC<LessonBlockPropsType> = ({name, components,onAddComponent}) => {
    return(
        <div className="lesson-block">
            <header className="lesson-block--header">
                <span>№</span>
                <span>{name}</span>
                <span>Type</span>
                <span>Points</span>
                <div className="lesson-block--actions">
                    <IconButton onClick={onAddComponent}>
                        <AddIcon fontSize="small"/>
                    </IconButton>
                </div>
            </header>
            <hr className="lesson-block--hr"/>
            <div className="lesson-block--content">
                {
                    components?.map(
                        (c) => <ComponentBlock id={c.id} order={c.order} content={c.content} componentType={c.componentType} points={c.points}/>
                    )
                }
            </div>
        </div>
    )
}

export default LessonBlock