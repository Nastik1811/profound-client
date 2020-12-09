import { IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import React from 'react'

type ModuleBlockProps = {
    name: string,
    collapsed: boolean,
    children: React.ReactNode,
    onAddLesson: () => void,
    onDelete: () => void,
}

const ModuleBlock: React.FC<ModuleBlockProps> = ({name, children, collapsed, onAddLesson, onDelete}) => {
    return(
        <div className="module-block">
            <header className="module-block--header">
                {name}
                <div className="module-block--actions">
                    <IconButton onClick={onAddLesson}>
                        <AddIcon fontSize="small"/>
                    </IconButton>
                    <IconButton onClick={onDelete}>
                        <DeleteIcon fontSize="small"/>
                    </IconButton>
                </div>
            </header>
            <div className="module-block--content">
                {children}
            </div>
        </div>
    )
    
}

export default ModuleBlock