

import React, { FormEvent, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'; 

const baseData = {
    title: "", 
    content: ""
}

//include all fields but show and save only correspong to tasl type

type TheoreticDataType = typeof baseData

type TheoreticComponentPropsType = {
    initialData: TheoreticDataType
    onSave: (data: TheoreticDataType) => void,
    onDelete: () => void,
    onCancel: () => void
}

const PracticalComponentBuilder: React.FC<TheoreticComponentPropsType> = ({initialData = baseData, onSave, onDelete,onCancel}) => {
    const [data, setData] = useState<TheoreticDataType>(initialData)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        onSave(data)
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <input value={data.title} onChange={e => setData(data => ({...data, title:e.target.value }))}/>
            
            <button type="submit">Save</button>
        </form>
    )
}

export default PracticalComponentBuilder