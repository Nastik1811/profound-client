import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import AppNavigation from '../../components/AppNavigation'
import Loader from '../../components/Loader'
import { useHttp } from '../../hooks/http.hook'
import { ICourse, RouteParamsType } from '../../types'


const CourseOverview = () => {
    const {course_id} = useParams<RouteParamsType>()
    const {request} = useHttp()
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

    return(
    <div className="content ">
        <AppNavigation/> 
        <div>Course name</div>
        <div>Author name</div>
        <div>Description</div>
    </div>
    )
}

export default CourseOverview