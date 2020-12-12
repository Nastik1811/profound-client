import { Button } from '@material-ui/core'
import React, { useCallback, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import AppNavigation from '../../components/AppNavigation'
import Loader from '../../components/Loader'
import { useHttp } from '../../hooks/http.hook'
import { ICourse, RouteParamsType } from '../../types'
import ModuleSection from './ModulesSection'


const CourseOverview = () => {
    const {course_id} = useParams<RouteParamsType>()
    const {request} = useHttp()
    const history = useHistory()
    const [course, setCourse] = useState<ICourse|undefined>(undefined)

    const fetchCourse = useCallback(async () => {
        try{
            const data = await request(`/course_full/${course_id}`)
            setCourse(data)
        }catch (e){
            console.log(e.message)
        }
    }, [request])

    useEffect(() => {
        fetchCourse()
    }, [fetchCourse])

    if(!course){
        return(<Loader/>)
    }
    const handleDelete = () => {
        console.log("Delete")
    }
    const deleteModule = (module_id: string) => {
        //setModules(modules => modules.filter(m => m.id !== module_id))
    }

    return(
    <div className="content ">
        <AppNavigation/> 
        <section>
            <header className="constructor-header">
                    <h3 className="title">{course.name}</h3>
                    <div className="constructor-header--actions">
                        <Button variant="outlined" color="secondary">Edit</Button>
                    </div>
            </header>
            <div className="course-description">
                {course.description}
            </div>
        </section>

        <ModuleSection 
            modules={course.modules ? course.modules : []}
            onAdd={() => history.push(`${history.location.pathname}/constructor`)}
            onDelete={handleDelete}
            onEdit={(module_id: string) => history.push(`${history.location.pathname}/constructor/${module_id}`)}
            />
    </div>
    )
}

export default CourseOverview