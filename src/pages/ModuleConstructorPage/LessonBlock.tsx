import { IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import React from 'react'
import { ISimpleComponent } from '../../types'

type LessonBlockPropsType = {
    name: string,
    onAddComponent: () => void,
    components?: ISimpleComponent[],
    onDelete: () => void,
    onEditComponent: () => void,
    onDeleteComponent: (id: string) => void
}

interface IComponentBlockProps extends ISimpleComponent{
    onDelete: () => void
    onEdit: () => void
}

const ComponentBlock: React.FC<IComponentBlockProps> = ({id, maxPoints, content, componentType, onEdit, onDelete}) => {
    return(
        <div className="component-block">
            <span>#</span>
            <span>{content}</span>
            <span>{componentType}</span>
            <span>{maxPoints}</span>
            <IconButton onClick={onDelete}>
                    <DeleteIcon fontSize="small"/>
            </IconButton>
        </div>
    )
}

const LessonBlock: React.FC<LessonBlockPropsType> = ({name, components, onDelete, onAddComponent, onEditComponent, onDeleteComponent}) => {
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
                    <IconButton onClick={onDelete}>
                        <DeleteIcon fontSize="small"/>
                    </IconButton>
                </div>
            </header>
            <hr className="lesson-block--hr"/>
            <div className="lesson-block--content">
                {
                    components?.map(
                        (c) => <ComponentBlock 
                                key={c.id}
                                id={c.id} 
                                content={c.content} 
                                componentType={c.componentType} 
                                maxPoints={c.maxPoints} 
                                onEdit={onEditComponent}
                                onDelete={() => onDeleteComponent(c.id)}
                                />
                    )
                }
            </div>
        </div>
    )
}

export default LessonBlock