import React, { FormEvent, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'; 

const baseData = {
    title: "", 
    content: ""
}

type TheoreticDataType = typeof baseData

type TheoreticComponentPropsType = {
    initialData: TheoreticDataType
    onSave: (data: TheoreticDataType) => void,
    onDelete: () => void,
    onCancel: () => void
}

const TheoreticComponentBuilder: React.FC<TheoreticComponentPropsType> = ({initialData = baseData, onSave, onDelete,onCancel}) => {
    const [data, setData] = useState<TheoreticDataType>(initialData)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        onSave(data)
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <input value={data.title} onChange={e => setData(data => ({...data, title:e.target.value }))}/>
            <Editor
                initialValue="<p>Initial content</p>"
                apiKey="byzib6vl77xa64lyhxnx2kkuidn62dbwndgf0l21x5adzryr"
                init={{
                height: 500,
                menubar: false,
                plugins: [
                    'advlist autolink lists link image', 
                    'charmap print preview anchor help',
                    'searchreplace visualblocks code',
                    'insertdatetime media table paste wordcount'
                ],
                toolbar:
                    'undo redo | formatselect | bold italic | \
                    alignleft aligncenter alignright | \
                    bullist numlist outdent indent | help'
                }}
                onChange={e => setData(data => ({...data, title:e.target.getContent() }))}
            />
            <button type="submit">Save</button>
        </form>
    )
}

export default TheoreticComponentBuilder