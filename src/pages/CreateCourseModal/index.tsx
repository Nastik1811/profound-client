import { Button, Modal, TextField } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { AuthContext } from '../../context/auth'
import { useHttp } from '../../hooks/http.hook'
import { baseUrl } from '../../routes'
import { useFormik } from 'formik'


type CourseDetailsType = {
    title: string,
    description: string,
    requirements: string,
    acceptancePercantage: number,
    price: number
}
const defaultInfo = {
    title: "",
    description:"",
    requirements: "",
    price: 0,
    acceptancePercantage: 100
}

const CreateCourseModal: React.FC = () => {
    const {token, userId} = useContext(AuthContext)
    const {request} = useHttp(token)
    const history = useHistory()

    const handleSave = async (values: CourseDetailsType) => {   
        try{
            const res = await request(`${baseUrl}/api/teacher/courses/`, 'POST', {course: {...values, creatorId: userId}, courseCategories : [{"id": 1}]})
            if(res.id){
                history.push(`/overview/${res.id}`)
            }
        }catch(e){
            alert(e)
            history.goBack()
        }
       
    }

    const formik = useFormik<CourseDetailsType>({
        initialValues: {
            title: "",
            description:"",
            requirements: "",
            price: 0,
            acceptancePercantage: 100
        },
        onSubmit: handleSave
      })


    return(
        <Modal open={true}>
            <div className="modal">
                <div className="modal--header">
                    <span className="modal--title title">
                        Enter a course's details
                    </span>
                </div>
                <div className="modal--content">
                        <form className="basic-info-section" onSubmit={formik.handleSubmit}>
                            <TextField
                                label="Course title"
                                name="title"
                                value={formik.values.title}
                                onChange={formik.handleChange}
                            />
                            <TextField 
                                multiline 
                                name="description"
                                label="Course description"
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                />
                            <TextField 
                                multiline 
                                name="requirements"
                                label="Course requirements"
                                value={formik.values.requirements}
                                onChange={formik.handleChange}
                            />
                            <TextField 
                                label="Acceptance creteria"
                                type="number"
                                name="acceptancePercantage"
                                value={formik.values.acceptancePercantage}
                                onChange={formik.handleChange}
                            />
                            <TextField 
                                label="Price"
                                type="number"
                                name="price"
                                inputProps={{max: 100}}
                                value={formik.values.price}
                                onChange={formik.handleChange}
                            />
                            <div className="modal--actions">
                                <Button type="submit">Create</Button>
                                <Button onClick={history.goBack}>Close</Button>
                            </div>
                        </form>
                        
                </div>
                
            </div>
        </Modal>
    )
}

export default CreateCourseModal