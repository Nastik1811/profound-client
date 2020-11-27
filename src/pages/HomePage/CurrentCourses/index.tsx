import React from 'react'
import CoursePreview from '../../../components/CoursePreview'

const CurrentCourses = () => {
    return(
        <section className="home-section">
            <h3 className="section-title">Current courses</h3>
            <CoursePreview
                    title="Deep Learning (семестр 1, осень 2020): базовый" 
                    author="Школа глубокого обучения МФТИ"
                    price="15$"
                    onClick={() => console.log("hehe")}
                    />
        </section>
    )
}

export default CurrentCourses