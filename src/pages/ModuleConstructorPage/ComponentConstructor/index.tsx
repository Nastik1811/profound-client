import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { ContentType, ISimpleComponentDetails, LessonComponentType } from '../../../types'


interface IComponentConstructorProps {
    open: boolean
    onSave: (details: ISimpleComponentDetails) => void
    onDismiss: () => void
}

const defaultDetails: ISimpleComponentDetails = {
    content: "",
    points: 0,
    componentType: "theory"
}

const ComponentConstructor: React.FC<IComponentConstructorProps> = ({open, onSave, onDismiss}) => {
    const [details, setDetails] = useState(defaultDetails)
    
    //useEffect(()=> setSelfContent(defaultDetails))
    const handleSave = () => {
        onSave(details)
        setDetails(defaultDetails)
        onDismiss()
    }
    const handleCancel = () => {
        setDetails(defaultDetails)
        onDismiss()
    }

    if(!open){
        return null
    }

    return (
    <div className="window">
        <div className="constructor-container">
            <div className="constructor">
                <input value={details.content} onChange={e => setDetails({...details, content: e.target.value})}/>  

                <div className="constructor--actions">
                    <Button onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button onClick={handleSave}>
                        Save
                    </Button>
                </div>
            </div> 
        </div>

    </div>)
}

export default ComponentConstructor

