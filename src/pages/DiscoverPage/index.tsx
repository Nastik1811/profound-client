import React, { useEffect, useState } from 'react'
import AppNavigation from '../../components/AppNavigation'
import CoursePreview from '../../components/CoursePreview'

type CoursePreview = {
    id: string,
    title: string,
    author: string,
    description?: string,
    price?: string,
}

const DiscoverPage = () => {
    const [courses, setCourses] = useState<CoursePreview[]|undefined>(undefined)
    useEffect(()=>{
        fetch('/courses').then(res => res.json()).then(setCourses)
    },[])
    return(
      <div className="content ">
        <AppNavigation/> 
        <section className="discover-section">
            <h3 className="section-title">Popular courses</h3>
            <hr className="delimiter"/>
            <div className="course-list">
                {
                    courses?.map(c => <CoursePreview
                        key={c.id}
                        title= {c.title}
                        author= {c.author}
                        price={c.price}
                        onClick={() => console.log(c.id)}
                    />)
                }
            </div>
        </section>
        </div>
    )
}

export default DiscoverPage