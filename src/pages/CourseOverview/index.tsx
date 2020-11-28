import React from 'react'
import { useParams } from 'react-router-dom'

import AppNavigation from '../../components/AppNavigation'


const CourseOverview = () => {
    const course_id = useParams()

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