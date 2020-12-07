import React, { useEffect, useState } from 'react'
import { ICoursePreview } from '../../../types'

const CreatedCourses = () => {
    const [courses, setCourses] = useState<ICoursePreview[]|undefined>(undefined)
    useEffect(()=>{
        fetch('/courses').then(res => res.json()).then(setCourses)
    },[])

    return(
        <section className="home-section">
            <h3 className="section-title">Created courses</h3>
        </section>
    )
}

export default CreatedCourses