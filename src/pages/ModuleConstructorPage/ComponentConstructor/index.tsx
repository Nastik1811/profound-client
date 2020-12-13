import { Button } from '@material-ui/core'
import React from 'react'
import { ContentType, ISimpleComponentDetails, LessonComponentType } from '../../../types'


interface IComponentConstructorProps extends ISimpleComponentDetails {
    open: boolean
    onContentChange: (content: ContentType) => void
    onContentTypeChange: (contentType: LessonComponentType) => void
    onSave: () => void
    onCancel: () => void
}

const ComponentConstructor: React.FC<IComponentConstructorProps> = ({open, content, onContentChange, onContentTypeChange, componentType, points, onSave, onCancel}) => {
    if(!open){
        return null
    }
    return (
    <div className="window">
        <div className="constructor-container">
            <div className="constructor">
                <input value={content} onChange={e => onContentChange(e.target.value)}/>  

                <div className="constructor--actions">
                    <Button onClick={onCancel}>
                        Cancel
                    </Button>
                    <Button onClick={onSave}>
                        Save
                    </Button>
                </div>
            </div> 
        </div>

    </div>)
}

export default ComponentConstructor

