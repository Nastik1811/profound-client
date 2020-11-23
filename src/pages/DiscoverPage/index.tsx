import React from 'react'
import CoursePreview from '../../components/CoursePreview'

const DiscoverPage = () => {
    return(
      <div className="content ">
        <section className="section">
            <h3 className="section-title">Popular courses</h3>
            <hr className="delimiter"/>
            <div className="course-list">
                <CoursePreview 
                    title="Deep Learning (семестр 1, осень 2020): базовый" 
                    creator="Школа глубокого обучения МФТИ"
                    price="15$"
                    onClick={() => console.log("hehe")}
                    />
                <CoursePreview 
                    title="Deep Learning (семестр 1, осень 2020): базовый" 
                    creator="Школа глубокого обучения МФТИ"
                    price="15$"
                    onClick={() => console.log("hehe")}
                    />
                <CoursePreview 
                    title="Deep Learning (семестр 1, осень 2020): базовый" 
                    creator="Школа глубокого обучения МФТИ"
                    price="15$"
                    onClick={() => console.log("hehe")}
                    />
                <CoursePreview 
                title="Deep Learning (семестр 1, осень 2020): базовый" 
                creator="Школа глубокого обучения МФТИ"
                price="15$"
                onClick={() => console.log("hehe")}
                />
                <CoursePreview 
                    title="Deep Learning (семестр 1, осень 2020): базовый" 
                    creator="Школа глубокого обучения МФТИ"
                    price="15$"
                    onClick={() => console.log("hehe")}
                    />
            </div>
        </section>
        </div>
    )
}

export default DiscoverPage