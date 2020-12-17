import { IconButton } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import React from 'react'
import { ILesson } from '../../types'

export type ModuleViewProps = {
    name: string,
    lessons?: ILesson[]
}

const ModuleView: React.FC<ModuleViewProps> = ({name, lessons}) => {
    return(
        <div className="module-block overview-block">
            <header className="module-block--header">
                <span className="subtitle">{name}</span>
            </header>
                <hr className="header--hr"/>
            <div className="module-block--content">
                {lessons?.map(l => <li className="lesson">
                    {l.name}
                </li>)}
            </div>
        </div>
    )
    
}

export default ModuleView