import React, { useEffect, useState } from 'react'
import AppNavigation from '../../components/AppNavigation'
import CoursePreview from '../../components/CoursePreview'
import { useHttp } from '../../hooks/http.hook'
import { ICoursePreview } from '../../types'



const DiscoverPage = () => {
    const [courses, setCourses] = useState<ICoursePreview[]|undefined>(undefined)
    const {request} = useHttp()
    useEffect(()=>{
        request('/courses').then(res => res.json()).then(setCourses).catch(console.log)
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
                        id={c.id}
                        title= {c.title}
                        author= {c.author}
                        price={c.price}
                    />)
                }
            </div>
        </section>
        </div>
    )
}

export default DiscoverPage