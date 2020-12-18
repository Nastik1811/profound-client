import { Button } from '@material-ui/core'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Loader from '../../components/Loader'
import { AuthContext } from '../../context/auth'
import { useHttp } from '../../hooks/http.hook'
import { baseUrl } from '../../routes'
import { ICourse, RouteParamsType } from '../../types'
import MessageModal, { MessageModalProps } from './MessageModal'
import ModuleView from './ModuleView'

const defaultModalParams: MessageModalProps = {
    open: false,
    onSave: () => {},
    onDismiss: () => {}
}

const AdminOverview = () => {
    const {course_id} = useParams<RouteParamsType>()
    const {token} = useContext(AuthContext)
    const {request} = useHttp(token)
    const history = useHistory()
    const [modalParams, setModalParams] = useState<MessageModalProps>(defaultModalParams)
    const [course, setCourse] = useState<ICourse|undefined>(undefined)

    const fetchCourse = useCallback(async () => {
        try{
            const data = await request(`${baseUrl}/api/course/${course_id}`)
            setCourse(data.course)
        }catch (e){
            alert(e.message)
            history.push('/home')
        }
    }, [request])

    useEffect(() => {
        fetchCourse()
    }, [fetchCourse])

    const publishCourse = async () => {
        await request(`${baseUrl}/api/admin/${course_id}/publish`, 'POST')
        history.push('/admin')
    }
    const declineCourse = async (message: string) => {
        await request(`${baseUrl}/api/admin/${course_id}/reject`, 'POST', {rejectMessage: message})
        history.push('/admin')
    }
    const openModal = () => {
        setModalParams(
            {
                open: true,
                onSave: message => declineCourse(message),
                onDismiss: () => setModalParams(defaultModalParams)
            }
        )
    }

    if(!course){
        return(<Loader/>)
    }

    return(
    <div className="content ">
        
        <section className="course-overview-info">
            <header className="overview-header">
                <h3 className="title">{course.title}</h3>
                <span className="preview--creator">
                {`Author: ${course.creator?.firstName} ${course.creator?.firstName}`} 
                </span>
            </header>
            <hr className="header--hr  mb-1"/>

            <div className="course-description ">
                <span className="subtitle">Description: </span>
                {course.description}
            </div>
            <div className="course-description">
                <span className="subtitle">Requirements: </span>
                {course.requirements}
            </div>
            <div className="course-description">
                <span className="subtitle">Price: </span>
                {course.price} 
                <span> BYN</span>
            </div>
            <div className="overview-actions">
                <button onClick={publishCourse} className="to-next">Publish</button>
                <button onClick={openModal} className="to-next reject">Reject</button>
            </div>
        
        {
            !!course.modules?.length &&
            <section className="modules-section">
                    <header className="modules-section--header">
                        <span className="modules-section--title section-title">Course modules</span>
                    </header> 
                    {course.modules.map(
                            m => <ModuleView
                            name={m.name}
                            lessons={m.lessons}
                            />)}
            </section>
            
        }

        </section>

        <MessageModal
            open={modalParams.open} 
            onSave={modalParams.onSave} 
            onDismiss={modalParams.onDismiss}
        />
    </div>
    )
}

export default AdminOverview