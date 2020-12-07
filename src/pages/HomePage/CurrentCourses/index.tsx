import React, { useEffect, useState } from 'react'
import { ICoursePreview } from '../../../types'


const CurrentCourses = () => {
    const [courses, setCourses] = useState<ICoursePreview[]|undefined>(undefined)
    useEffect(()=>{
        fetch('/courses').then(res => res.json()).then(setCourses)
    },[])

    return(
        <section className="home-section">
            <h3 className="section-title">Current courses</h3>
        </section>
    )
}

export default CurrentCourses