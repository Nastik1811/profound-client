import React, { useState } from 'react'
import AppNavigation from '../../components/AppNavigation'
import { Editor } from '@tinymce/tinymce-react'; 
//Может быть новый курс либо редактировать уже существующий

type CourseModule = {
    name: string,
    lessons: CourseLesson[]
}

type CourseLesson = {
    name: string,
    components: Array<PracticalComponent | TheoreticComponent>
}

type TaskType = "single" | "mult" | "text" | "sort" | "match" | "file"

type TheoreticComponent = {
    name: string,
    component_type: "theoretic"
}

type PracticalComponent = {
    name: string,
    component_type: "practical",
    task_type: TaskType
}

const ConstructorPage = () => {
    const [title, setName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [requirements, setRequirements] = useState<string>("")
    const [modules, setModules] = useState([])
    const [editorText, setEditorText] = useState("")

    return(
        <div className="content">
            <AppNavigation/> 
            <section className="section">
                <h3 className="section-titile">Constructor</h3>
                <input placeholder="Course title"/>
                <textarea placeholder="Course description"/>
                <textarea placeholder="Course requirements"/>
                <button>Add module</button>
                <section>
                    Course modules
                    <div className="course-moudule">
                        <header>
                            <button>Delete</button>
                            <button>Edit</button>
                        </header>
                        <ul>
                            <li>
                                <div className="lesson">

                                </div>
                            </li>
                        </ul>
                        
                    </div>
                </section>
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
                    onChange={e => console.log(e.target.getContent())}
                />
            </section>
        </div>
    )
}

export default ConstructorPage