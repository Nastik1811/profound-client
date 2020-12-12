import { IconButton } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import React from 'react'

export type ModuleBlockProps = {
    name: string,
    onEdit: () => void,
    onDelete: () => void,
    children?: React.ReactNode
}

const ModuleBlock: React.FC<ModuleBlockProps> = ({name, children, onEdit, onDelete}) => {
    return(
        <div className="module-block">
            <header className="module-block--header">
                {name}
                <div className="module-block--actions">
                    <IconButton onClick={onEdit}>
                        <EditIcon fontSize="small"/>
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