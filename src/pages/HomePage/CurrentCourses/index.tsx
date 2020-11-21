import React from 'react'
import CoursePreview from '../../../components/CoursePreview'

const CurrentCourses = () => {
    return(
        <section className="section">
            <h3 className="section-titile">Current courses</h3>
            <CoursePreview
                    title="Deep Learning (семестр 1, осень 2020): базовый" 
                    creator="Школа глубокого обучения МФТИ"
                    price="15$"
                    onClick={() => console.log("hehe")}
                    />
        </section>
    )
}

export default CurrentCourses