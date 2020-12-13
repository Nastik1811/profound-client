import { Button, Modal, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { useHttp } from '../../hooks/http.hook'


type CourseDetailsType = {
    name: string,
    description: string,
    requirements: string
}

const CreateCourseModal: React.FC = () => {
    const [data, setData] = useState<CourseDetailsType>({
        name: "",
        description:"",
        requirements: ""
    })
    const {request} = useHttp()
    const history = useHistory()

    const handleSave = async () => {
        
        try{
            const res = await request('/course', 'POST', {...data})
            if(res.course_id){
                history.push(`/overview/${res.course_id}`)
            }
        }catch(e){
            alert(e)
            history.goBack()
        }
       
    }

    return(
        <Modal open={true}>
            <div className="modal">
                <div className="modal--header">
                    <span className="modal--title title">
                        Enter a course's details
                    </span>
                </div>
                <div className="modal--content">
                        <section className="basic-info-section">
                            <TextField
                                label="Course title"
                                value={data.name}
                                onChange={e => setData({...data, name: e.target.value})}
                            />
                            <TextField 
                                multiline 
                                placeholder="Course description" 
                                label="Course description"
                                value={data.description}
                                onChange={e => setData({...data, description: e.target.value})}
                                />
                            <TextField 
                                multiline 
                                label="Course requirements"
                                value={data.requirements}
                                onChange={e => setData({...data, requirements: e.target.value})}
                            />
                        </section>
                </div>
                <div className="modal--actions">
                        <Button onClick={handleSave}>Create</Button>
                        <Button onClick={history.goBack}>Close</Button>
                </div>
            </div>
        </Modal>
    )
}

export default CreateCourseModal